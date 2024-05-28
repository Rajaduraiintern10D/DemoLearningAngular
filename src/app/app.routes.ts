import { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./Error.component";
import { DirectiveComponent } from "./directive/directive.component";

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'product', component: ProductComponent },
    {path : 'directive' ,component :DirectiveComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
  ];