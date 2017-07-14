import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReportComponent } from './report/report.component';
import { TreehouseComponent } from './treehouse/treehouse.component';
import { CodeschoolComponent } from './codeschool/codeschool.component';
import { ReportCardService } from './report/report.service';
import { LiftDirective } from './treehouse/lift.directive';
import { InstructionsComponent } from './routing/instructions/instructions.component';
import { TreeHouseRoutingModule } from './app-routing.module';
import { HomeComponent } from './routing/home/home.component';
import { AuthorComponent } from './routing/author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReportComponent,
    TreehouseComponent,
    CodeschoolComponent,
    LiftDirective,
    InstructionsComponent,
    HomeComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeHouseRoutingModule
  ],
  providers: [ReportCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
