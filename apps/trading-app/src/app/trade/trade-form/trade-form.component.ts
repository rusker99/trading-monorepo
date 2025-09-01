import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InstrumentModel, OrderModel } from '@trading-monorepo/core';
import { ModelRestService } from '../../service/model-rest.service';
import {
  BehaviorSubject,
  combineLatest,
  concatMap,
  filter,
  Observable,
  of,
  skip,
  Subject, tap,
} from 'rxjs';

@Component({
  selector: 'trading-app-trade-form',
  templateUrl: './trade-form.component.html',
  styleUrl: './trade-form.component.css',
})
export class TradeFormComponent implements OnInit {
  formGroup: FormGroup;
  @Input()
  instrumentObservable: Observable<InstrumentModel>;
  private formSubmittedSubject: Subject<void>;
  private formSubmittedObservable: Observable<void>;
  @Output()
  resetTriggeredEventEmitter: EventEmitter<void>;
  submissionMessage: any;

  constructor(
    protected readonly formBuilder: FormBuilder,
    private restService: ModelRestService
  ) {
    this.resetTriggeredEventEmitter = new EventEmitter<void>();
    this.formSubmittedSubject = new BehaviorSubject(undefined);
    this.formSubmittedObservable = this.formSubmittedSubject.asObservable();
    this.formGroup = formBuilder.group({
      action: ['BUY'],
      type: ['MARKET'],
      limitPrice: [''],
      quantity: [''],
    });
  }
  ngOnInit(): void {
    combineLatest([
      this.instrumentObservable.pipe(filter((instrument) => !!instrument)),
      this.formSubmittedObservable.pipe(
        skip(1),
        filter(() => this.formGroup.valid)
      ),
    ])
      .pipe(
        concatMap(
          ([instrument]): Observable<OrderModel> =>
            this.restService
              .post({
                modelName: 'Order',
                action: this.formGroup.get('action').value,
                type: this.formGroup.get('type').value,
                limitPrice: this.formGroup.get('limitPrice').value,
                quantity: this.formGroup.get('quantity').value,
                status: 'NEW',
                instrumentId: instrument?.id,
              } as OrderModel)
              .pipe(tap(() => (this.submissionMessage = null)))
        )
      )
      .subscribe({
        next: (result) => {
          console.log(`result: ${JSON.stringify(result)}`);
          this.submissionMessage = "Success submitting order";
        },
        error: (err) => {
          this.submissionMessage = err;
          console.error(err);
          return of();
        },
      });
  }

  submit() {
    this.formSubmittedSubject.next();
  }

  reset() {
    this.resetTriggeredEventEmitter.emit();
  }
}
