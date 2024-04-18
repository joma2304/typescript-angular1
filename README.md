# Om projektet

Detta är kod till en webbplats som jag skapat med ramverket Angular. Jag har skapat varje undersida som en egen komponent, jag
har även skapat en header komponenet som används på alla sidorna för själva huvudmenyn. Navigationen mellan dem
olika sidorna på webbplatsen sköts med angulars router modul.

# Kovertering 

Konverteringen av enheter skapade jag även som en egen komponent och sedan implementerade jag den i komponenten för själva sidan där man kan konvertera enheter. Den använder ngModel och databinding för att skriva ut konverteringen, samt ngIf för att se ifall där finns ett resultat eller inte och då väljer att inte skriva ut något ifall där inte finns något svar.

# Styling

För styling på webbplatsen har jag använt mig av SCSS, majoriteten av stylingen har lagts till på själva komponenten som den skall appliceras på, men jag har även lite global styling som gäller för hela sidan. Det var otroligt smidigt att kunna dela upp stylingen i olika komponenter då det är mycket enklare att hålla koll på var koden ligger och till vilka element den gäller.

## Instructions for Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
