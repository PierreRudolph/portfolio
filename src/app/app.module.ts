import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboveFoldComponent } from './above-fold/above-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboveFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ProjectPreviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
