import { Component, input, OnInit } from '@angular/core';

export enum SvgSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export enum SvgIcons {
  arrowLeft = 'arrow-left',
  arrowRight = 'arrow-right',
  horizontalDots = 'horizontal-dots',
  filter = 'filter',
  search = 'search',
  offline = 'offline',
  online = 'online',
}

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  template: `<svg
    [class]="size()"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    data-qa="svg">
    <use [attr.xlink:href]="link" [attr.href]="link" />
  </svg>`,
  styleUrl: './svg-icon.component.scss',
})
export class SvgIconComponent implements OnInit {
  size = input.required<SvgSize>();
  type = input.required<SvgIcons>();
  link: string = '';

  ngOnInit(): void {
    this.link = `/svgs/${this.type()}.svg#${this.type()}`;
  }
}
