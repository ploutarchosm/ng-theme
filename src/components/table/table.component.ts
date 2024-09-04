import { Component, ElementRef, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {
  SvgIconComponent,
  SvgIcons,
  SvgSize,
} from '../svg-icon/svg-icon.component';
import { BadgeComponent, BadgeStyle } from '../badge/badge.component';
import { ButtonComponent, ButtonType } from '../button/button.component';
import { DashboardService } from '../../services/dashboard.service';
import { USER_ROLES, USER_STATUSES, UsersList } from '../../interfaces/dashboard';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    SvgIconComponent, 
    BadgeComponent, 
    ButtonComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DashboardService],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit, OnDestroy{
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

  public USER_ROLES = USER_ROLES;
  public USER_STATUSES = USER_STATUSES;

  public isRoleDropdownOpen: boolean = false;
  public roles: string[] = Object.values(USER_ROLES);
  public isStatusDropdownOpen: boolean = false;
  public statuses: string[] = Object.values(USER_STATUSES);

  public currentPage: number = 1;
  public totalPages: number = 1;
  public pages: number[] = [];

  public usersList!: UsersList;
  public take = 10;
  public searchControl = new FormControl('');
  public role: USER_ROLES = USER_ROLES.ADMIN;
  public status: USER_STATUSES = USER_STATUSES.ACTIVE;

  constructor(private dashboardService: DashboardService, private elementRef: ElementRef){}

  get prevBtnStatus(){
    let status= false;
    if (this.currentPage === 1 || this.currentPage < 1) {
      status = true;
    }
    return status;
  }
  get nextBtnStatus(){
    let status= false;
    if (this.currentPage === this.totalPages || this.currentPage > this.totalPages) {
      status = true;
    }
    return status;
  }

  ngOnDestroy(): void {
    if (this.listener) {
      document.removeEventListener('click', this.listener);
    }
  }
  private listener= () => {
    const clickInside = this.elementRef.nativeElement.contains(event?.target);
    if (!clickInside) {
      this.isRoleDropdownOpen = false;
      this.isStatusDropdownOpen = false;
    }
  };

  ngOnInit(): void {
    
    document.addEventListener('click', this.listener);
    this.subscribeSearchChanges();
    this.getUsersList();
  }

  subscribeSearchChanges(){
    this.searchControl.valueChanges.pipe(debounceTime(1000)).subscribe((res)=>{
      this.getUsersList();
    })
  }

  getUsersList(){
    const params = {
      take: this.take,
      skip:  (this.currentPage - 1) * this.take,
      search: this.searchControl.value,
      role: this.role,
      status: this.status
    };
    if (params.search) {
      params.skip = 0;
    }
    this.dashboardService.getUsersList(params).subscribe({
      next:(res: UsersList)=>{
        this.usersList = res;
        this.totalPages = Math.ceil(this.usersList.total / this.take);
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      },
      error: (err)=>{console.log(err)}
    })
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getUsersList();
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getUsersList();
    }
  }

  goToPage(page: number): void {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this.getUsersList();
    }
  }

  toggleRoleDropdown(): void {
    this.isRoleDropdownOpen = !this.isRoleDropdownOpen;
  }
  toggleStatusDropdown(): void {
    this.isStatusDropdownOpen = !this.isStatusDropdownOpen;
  }
  
}
