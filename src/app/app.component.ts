import { Component } from '@angular/core';
import { delay, forkJoin, map, of } from 'rxjs';
import { IFilter } from './components/filter-group/filter-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  companies$ = of([
    {
      id: 1,
      value: 'Google',
    },
    {
      id: 2,
      value: 'Amazon',
    },
    {
      id: 3,
      value: 'Facebook',
    },
    {
      id: 4,
      value: 'Apple',
    },
  ]).pipe(delay(1000));

  people$ = of([
    { id: 1, value: 'Tyler' },
    { id: 2, value: 'Alex' },
    { id: 3, value: 'Steph' },
  ]).pipe(delay(3000));

  filters$ = forkJoin([
    this.companies$.pipe(
      map((options) => {
        return { name: 'Company', options };
      })
    ),
    this.people$.pipe(
      map((options) => {
        return { name: 'Person', options };
      })
    ),
  ]);

  filtersChange(e: any) {
    console.log(e);
  }
}
