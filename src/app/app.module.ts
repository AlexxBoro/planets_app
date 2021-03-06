import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { PlanetDetailsComponent } from "./planet-details/planet-details.component";
import { PlanetsListComponent } from "./planets-list/planets-list.component";
import { PlanetCardComponent } from "./planets-list/planet-card/planet-card.component";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanetDetailsComponent,
    PlanetsListComponent,
    PlanetCardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PlanetsListComponent
      },
      {
        path: 'details/:name',
        component: PlanetDetailsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
