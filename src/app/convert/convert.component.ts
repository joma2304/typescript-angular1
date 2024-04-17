import { Component } from '@angular/core';
import { UnitConverterComponent } from '../unit-converter/unit-converter.component';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [UnitConverterComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {

}
