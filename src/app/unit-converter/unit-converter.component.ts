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
//Klass för konvertering
export class UnitConverterComponent {
  meter: number = 0;
  foot: number = 0;
  celsius: number = 0;
  fahrenheit: number = 0;
  //Resultat lagras här
  meterToFootResult: number | null = null;
  footToMeterResult: number | null = null;
  celsiusToFahrenheitResult: number | null = null;
  fahrenheitToCelsiusResult: number | null = null;
//För att konvertera från meter till foot
  convertMeterToFoot(): void {
    this.meterToFootResult = Math.round(this.meter * 3.28084);
  }
//Foot till meter
  convertFootToMeter(): void {
    this.footToMeterResult = Math.round(this.foot / 3.28084);
  }
//Celcius till fahrenheit
  convertCelsiusToFahrenheit(): void {
    this.celsiusToFahrenheitResult = Math.round((this.celsius * 9/5) + 32);

  }
//Fahrenheit till celcius
  convertFahrenheitToCelsius(): void {
    this.fahrenheitToCelsiusResult = Math.round((this.fahrenheit - 32) * 5/9);
  }
}
