import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-unit-converter',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './unit-converter.component.html',
  styleUrl: './unit-converter.component.scss'
})
export class UnitConverterComponent {
  meter: number = 0;
  foot: number = 0;
  celsius: number = 0;
  fahrenheit: number = 0;
  
  meterToFootResult: number | null = null;
  footToMeterResult: number | null = null;
  celsiusToFahrenheitResult: number | null = null;
  fahrenheitToCelsiusResult: number | null = null;

  convertMeterToFoot() {
    this.meterToFootResult = Math.round(this.meter * 3.28084);
    this.footToMeterResult = null;
    this.celsiusToFahrenheitResult = null;
    this.fahrenheitToCelsiusResult = null;
  }

  convertFootToMeter() {
    this.footToMeterResult = Math.round(this.foot / 3.28084);
    this.meterToFootResult = null;
    this.celsiusToFahrenheitResult = null;
    this.fahrenheitToCelsiusResult = null;
  }

  convertCelsiusToFahrenheit() {
    this.celsiusToFahrenheitResult = Math.round((this.celsius * 9/5) + 32);
    this.meterToFootResult = null;
    this.footToMeterResult = null;
    this.fahrenheitToCelsiusResult = null;
  }

  convertFahrenheitToCelsius() {
    this.fahrenheitToCelsiusResult = Math.round((this.fahrenheit - 32) * 5/9);
    this.meterToFootResult = null;
    this.footToMeterResult = null;
    this.celsiusToFahrenheitResult = null;
  }
}
