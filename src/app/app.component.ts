import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, of, zip } from 'rxjs';

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
  ]);

  people$ = of([
    { id: 1, value: 'Tyler' },
    { id: 2, value: 'Alex' },
    { id: 3, value: 'Steph' },
  ]);

  filters$ = zip([
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

  randomForm = new FormGroup({
    age: new FormControl(19),
    weight: new FormControl(150),
  });

  filtersChange(changes: any) {
    console.log({ ...this.randomForm.value, ...changes });
  }
}
