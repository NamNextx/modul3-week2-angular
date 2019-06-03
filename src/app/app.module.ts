import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent} from './word/word.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StrucDirectiveComponent } from './struc-directive/struc-directive.component';
import { WordsComponent } from './words/words.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildParentComponent } from './view-child-parent/view-child-parent.component';
import { CardFormComponent } from './card-form/card-form.component';
import { LeanPipesComponent } from './lean-pipes/lean-pipes.component';
import { ServiceOneComponent } from './service-one/service-one.component';
import { ServiceUseComponent } from './service-use/service-use.component';
import { WeatherServiceApiComponent } from './weather-service-api/weather-service-api.component';



@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ProgressBarComponent,
    StrucDirectiveComponent,
    WordsComponent,
    RatingBarComponent,
    PersonComponent,
    ListPersonComponent,
    ChildComponentComponent,
    ViewChildComponent,
    ViewChildParentComponent,
    CardFormComponent,
    LeanPipesComponent,
    ServiceOneComponent,
    ServiceUseComponent,
    WeatherServiceApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ServiceOneComponent,
    WeatherServiceApiComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
