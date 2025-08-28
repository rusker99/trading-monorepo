import { Component, Input } from '@angular/core';
import { PositionResult } from '@trading-monorepo/core';

@Component({
  selector: 'trading-app-positions',
  templateUrl: './positions.component.html',
  styleUrl: './positions.component.css'
})
export class PositionsComponent {

  @Input()
  positionResults: PositionResult[];

}
