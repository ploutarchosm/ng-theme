import { Component, input } from '@angular/core';

export enum BadgeStyle {
  PeachyOrange = 'peachyOrange',
  PaleCyan = 'paleCyan',
  LightPeriwinkle = 'lightPeriwinkle',
}

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `
    <div class="badge__wrapper badge__{{ badgeStyleColor() }}">
      <span>
        <ng-content></ng-content>
      </span>
    </div>
  `,
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  badgeStyleColor = input.required<BadgeStyle>();
}
