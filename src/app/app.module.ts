import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartsListComponent } from './parts-list/parts-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DataMgmtComponent } from './data-mgmt/data-mgmt.component';
import { FormPageComponent } from './form-page/form-page.component';
import { NavComponent } from './nav/nav.component';
import { AnimateComponent } from './animate/animate.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PartsListComponent,
    DataMgmtComponent,
    FormPageComponent,
    NavComponent,
    AnimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch()), // Użycie fetch w HttpClient
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }