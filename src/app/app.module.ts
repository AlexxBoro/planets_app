import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { PlanetDetailsComponent } from "./planet-details/planet-details.component";
import { PlanetsListComponent } from "./planets-list/planets-list.component";
import { PlanetCardComponent } from "./planets-list/planet-card/planet-card.component";
import { PlanetsService } from "./planets.service";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    PlanetDetailsComponent,
    PlanetsListComponent,
    PlanetCardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PlanetsListComponent
      },
      {
        path: 'details',
        component: PlanetDetailsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]),
    HttpClientModule
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
