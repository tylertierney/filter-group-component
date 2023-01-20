import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFilter } from '../filter-group.component';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Input() filterName: string;
  @Input() options: IFilter['options'];
  @Input() formGroup: FormGroup;
  @Input() valueField: string;
  isOpen = false;
  searchTerm = '';
  get searchedOptions() {
    return this.options.filter((option) =>
      option.value
        .trim()
        .toLowerCase()
        .includes(this.searchTerm.trim().toLowerCase())
    );
  }

  constructor() {}

  ngOnInit() {}

  toggleChecked(
    e: Event,
    option: { id: number | string; value: string; [key: string]: any }
  ) {
    const checked = (e.target as HTMLInputElement).checked;
    const filtersArr = this.formGroup.get(this.filterName);
    if (!filtersArr) return;
    const curr = filtersArr.value;

    let itemForResultingArray = option;
    if (this.valueField) itemForResultingArray = option[this.valueField];

    if (checked) {
      filtersArr.setValue([...curr, itemForResultingArray]);
    } else {
      filtersArr.setValue(
        curr.filter(
          (itemCurrentlyInArray: unknown) =>
            itemCurrentlyInArray !== itemForResultingArray
        )
      );
    }
  }
}
