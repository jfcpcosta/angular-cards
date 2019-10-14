import { Component, OnInit, Input, forwardRef } from "@angular/core";
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from "@angular/forms";

@Component({
  selector: "ac-password-input",
  templateUrl: "./password-input.component.html",
  styleUrls: ["./password-input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent implements OnInit, ControlValueAccessor {
  hidePassword = true;
  control = new FormControl();

  @Input()
  placeholder: string;

  @Input("value")
  _value: string;

  get value(): string {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.onChange(value);
    this.onTouched(value);

    this.control.patchValue(value);
  }

  get inputType(): string {
    return this.hidePassword ? "password" : "text";
  }

  get inputIcon(): string {
    return this.hidePassword ? "visibility_off" : "visibility";
  }

  private onChange: any = () => {};
  private onTouched: any = () => {};

  constructor() {}

  ngOnInit() {
    this.control.valueChanges.subscribe(text => this.onChange(text));
  }

  toggle(): void {
    this.hidePassword = !this.hidePassword;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }
}
