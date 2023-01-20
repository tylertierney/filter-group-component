import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface IFilter {
  filterName: string;
  options: {
    id: number | string;
    value: string;
  }[];
}

@Component({
  selector: 'filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.css'],
})
export class FilterGroupComponent implements OnInit {
  @Output() filtersChange = new EventEmitter<{ [key: string]: any }>();
  @Input() filters: IFilter[];
  @Input() valueField: string;

  constructor() {}

  filterForm: FormGroup;

  ngOnInit() {
    this.filterForm = new FormGroup(
      this.filters.reduce((acc, curr) => {
        acc[curr.filterName] = new FormControl([], { nonNullable: true });
        return acc;
      }, {} as { [key: string]: any })
    );

    this.filterForm.valueChanges.subscribe(() =>
      this.filtersChange.emit(this.filterForm.value)
    );
  }
}
