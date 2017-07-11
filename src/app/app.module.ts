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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReportComponent,
    TreehouseComponent,
    CodeschoolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ReportCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
