import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {CardComponent} from './card-list/card/card.component';
import {EditCardComponent} from './edit-card/edit-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import {CardListComponent} from './card-list/card-list.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    declarations: [
        AppComponent,
        RegistrationComponent,
        CardListComponent,
        CardComponent,
        EditCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule,
        MatIconModule,
        MatCheckboxModule,
        MatProgressSpinnerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
