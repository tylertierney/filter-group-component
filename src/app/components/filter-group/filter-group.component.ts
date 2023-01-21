import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export interface IFilterOption {
  id: number | string;
  value: string;
}

export interface IFilter {
  name: string;
  options: IFilterOption[];
}

@Component({
  selector: 'filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.css'],
})
export class FilterGroupComponent implements OnInit {
  @Output() filtersChange = new EventEmitter<{ [key: string]: any }>();
  @Input() filters: IFilter[];
  @Input() valueField: keyof IFilterOption;

  constructor() {}

  filterForm: FormGroup;

  ngOnInit() {
    this.filterForm = new FormGroup(
      this.filters.reduce((acc, curr) => {
        acc[curr.name] = new FormControl([], { nonNullable: true });
        return acc;
      }, {} as { [key: string]: any })
    );

    this.filterForm.valueChanges.subscribe(() => {
      this.filtersChange.emit(this.filterForm.value);
    });

    // this.filterForm.valueChanges.subscribe(this.filtersChange.emit);
    // this.filtersChange = this.filterForm.valueChanges;
  }
}
