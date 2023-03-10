import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IFilter, IFilterOption } from '../filter-group.component';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FilterComponent,
    },
  ],
})
export class FilterComponent implements OnInit, ControlValueAccessor {
  @Input() filterName: string;
  @Input() options: IFilterOption[];
  @Input() valueField: keyof IFilterOption;
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

  value: Array<string | number | IFilterOption> = [];

  onChange = (value: Array<string | number | IFilterOption>) => {};
  onTouch = () => {};

  writeValue(value: string[]): void {
    this.value = value;
  }

  registerOnChange(
    fn: (value: Array<string | number | IFilterOption>) => void
  ): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  toggleValue(selectedValue: IFilterOption | string | number) {
    const index = this.value.indexOf(selectedValue);

    if (index > -1) {
      this.value = [
        ...this.value.slice(0, index),
        ...this.value.slice(index + 1),
      ];
    } else {
      this.value = [...this.value, selectedValue];
    }

    this.onChange(this.value);
    this.onTouch();
  }

  isSelected(valueToCheck: IFilterOption | string | number) {
    return this.value.includes(valueToCheck);
  }
}
