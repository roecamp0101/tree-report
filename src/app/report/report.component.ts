import { Component, OnInit } from '@angular/core';
import { ReportCardService } from './report.service';
import { Response } from '@angular/http';

@Component({
  selector: 'tr-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    constructor(private reportservice: ReportCardService) { }
    
    items: any[];
    data: any[];
    
    ngOnInit() {
        
    this.reportservice.reportData().subscribe(
              (data: any) => {
                const myArray = [];
                for (let key in data) {
                  myArray.push(data[key]);
                }
                this.items = myArray;
              });         
  }

}
