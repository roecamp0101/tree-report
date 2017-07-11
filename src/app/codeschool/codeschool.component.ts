import { Component, OnInit } from '@angular/core';
import { ReportCardService } from '../report/report.service';

@Component({
  selector: 'tr-codeschool',
  templateUrl: './codeschool.component.html',
  styleUrls: ['./codeschool.component.css']
})
export class CodeschoolComponent implements OnInit {

    constructor(private codeschoolservice: ReportCardService) { }
    
    codeinfo: any[];
    codedata: any[];


  ngOnInit() {
      
    this.codeschoolservice.codeData().subscribe(
              (codedata: any) => {
                const myArray = [];
                for (let key in codedata) {
                  myArray.push(codedata[key]);
                }
                this.codeinfo = myArray;
              });         
      
  }

}
