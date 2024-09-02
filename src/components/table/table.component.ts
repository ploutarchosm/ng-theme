import { Component, ViewEncapsulation } from '@angular/core';
import {
  SvgIconComponent,
  SvgIcons,
  SvgSize,
} from '../svg-icon/svg-icon.component';
import { BadgeComponent, BadgeStyle } from '../badge/badge.component';
import { ButtonComponent, ButtonType } from '../button/button.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [SvgIconComponent, BadgeComponent, ButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {
  // to be modify later
  data = {
    searchIcon: SvgIcons.search,
    btnTypeIcon: ButtonType.icon,
    btnPrimary: ButtonType.primary,
    btnSecondary: ButtonType.secondary,
    iconSize: SvgSize.md,
    filterIcon: SvgIcons.filter,
    badgeStyle: BadgeStyle.PeachyOrange,
    badgeStyle2: BadgeStyle.PaleCyan,
    badgeStyle3: BadgeStyle.LightPeriwinkle,
    threeDots: SvgIcons.horizontalDots,
    arrowRight: SvgIcons.arrowRight,
    arrowLeft: SvgIcons.arrowLeft,
    offlineIcon: SvgIcons.offline,
    onlineIcon: SvgIcons.online,
    iconXsSizd: SvgSize.xs,
  };
}
