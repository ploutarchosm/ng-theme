import { Component, input, ViewEncapsulation } from '@angular/core';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  disabled = 'disabled',
  icon = 'icon',
}

@Component({
  selector: 'app-button',
  standalone: true,
  template: ` <button [disabled]="buttonStatus()"
    class="btn btn-{{ buttonTyped() }}">
    <ng-content />
  </button>`,
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  buttonTyped = input.required<ButtonType>();
  buttonStatus = input<boolean>(false);
}
