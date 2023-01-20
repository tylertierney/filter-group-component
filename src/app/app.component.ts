import { Component } from '@angular/core';
import { IFilter } from './components/filter-group/filter-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  filters: IFilter[] = [
    {
      filterName: 'Company',
      options: [
        {
          id: 1,
          label: 'Google',
        },
        {
          id: 2,
          label: 'Amazon',
        },
        {
          id: 3,
          label: 'Facebook',
        },
        {
          id: 4,
          label: 'Apple',
        },
      ],
    },
    {
      filterName: 'State',
      options: [
        {
          id: 1,
          label: 'Alabama',
        },
        {
          id: 2,
          label: 'Colorado',
        },
        {
          id: 3,
          label: 'Florida',
        },
        {
          id: 4,
          label: 'Indiana',
        },
      ],
    },
  ];

  filtersChange(e: any) {
    console.log(e);
  }
}
