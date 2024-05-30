import { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./Error.component";
import { DirectiveComponent } from "./directive/directive.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'product', component: ProductComponent },
    { path: 'directive', component: DirectiveComponent },
    { path: 'reactive-forms', component: ReactiveFormsComponent },
    { path: 'get-all-trains', loadChildren: () => import('./get-all-trains/get-all-trains-module/get-all-trains-module.module').then(m => m.GetAllTrainsModuleModule) },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];
