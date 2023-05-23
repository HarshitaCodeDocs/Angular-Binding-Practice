import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeOneComponent } from './employee-one/employee-one.component';
import { EmployeeTwoComponent } from './employee-two/employee-two.component';
import { EmployeeThreeComponent } from './employee-three/employee-three.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StylesBindingComponent } from './styles-binding/styles-binding.component';
import { EventBindingAssignmentFourComponent } from './event-binding-assignment-four/event-binding-assignment-four.component';
import { FormsModule } from '@angular/forms';
import { PreDefinedDirectivesComponent } from './pre-defined-directives/pre-defined-directives.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeOneComponent,
    EmployeeTwoComponent,
    EmployeeThreeComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StylesBindingComponent,
    EventBindingAssignmentFourComponent,
    PreDefinedDirectivesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
