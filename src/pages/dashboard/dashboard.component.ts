import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent],
  template: `
      <div class="wrapper">
        <app-table />
      </div>
  `,

  styles: [
    `
    .wrapper {
      padding: 32px 40px;
    }
  `,
  ],
})
export class DashboardComponent {}
