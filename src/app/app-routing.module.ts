import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegistrationComponent} from './registration/registration.component';
import {CardListComponent} from './card-list/card-list.component';

const routes: Routes = [
    {path: 'registration', component: RegistrationComponent},
    {path: '', redirectTo: '/registration', pathMatch: 'full'},
    {path: 'card-list', component: CardListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
