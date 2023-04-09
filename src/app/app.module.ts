import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { BannerComponent } from './components/banner/banner.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserDataComponent,
    BannerComponent,
    EmitterComponent,
    ChangeNumberComponent,
    PipesComponent,
    ExponentialPipe,
    TwoWayBindingComponent,
    ListCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
