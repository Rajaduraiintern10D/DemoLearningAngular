import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './Error.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { DirectiveComponent } from './directive/directive.component';
import { ApphighlightDirective } from './directive/apphighlight.directive';
import { PipesPipe } from './home/pipes.pipe';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { GetAllTrainsComponent } from './get-all-trains/get-all-trains.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    ErrorComponent,
    DirectiveComponent,
    ApphighlightDirective,
    PipesPipe,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
 
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
