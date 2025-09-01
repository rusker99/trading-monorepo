import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResearchFilterRequest } from '@trading-monorepo/core';

@Component({
  selector: 'trading-app-research-form',
  templateUrl: './research-form.component.html',
  styleUrl: './research-form.component.css'
})
export class ResearchFormComponent {
  formGroup: FormGroup;
  @Output()
  searchTriggeredEventEmitter: EventEmitter<ResearchFilterRequest>;
  @Output()
  resetTriggeredEventEmitter: EventEmitter<void>;

  constructor(protected formBuilder: FormBuilder)
  {
    this.searchTriggeredEventEmitter = new EventEmitter<ResearchFilterRequest>();
    this.resetTriggeredEventEmitter = new EventEmitter<void>();
    this.formGroup = formBuilder.group({
      losers: [''],
      lowestPrice: [''],
      highestPrice: [''],
      type: [''],
    })
  }

  search()
  {
    const researchFilter = {
      losers: this.formGroup.get('losers').value,
      lowestPrice: this.formGroup.get('lowestPrice').value,
      limitPrice: this.formGroup.get('highestPrice').value,
      type: this.formGroup.get('type').value,
    } as ResearchFilterRequest;

    this.searchTriggeredEventEmitter.emit(researchFilter);
  }

  reset()
  {
    this.resetTriggeredEventEmitter.emit();
  }
}
