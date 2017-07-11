import { Component, OnInit } from '@angular/core';
import { ReportCardService } from '../report/report.service';


@Component({
    selector: 'tr-treehouse',
    templateUrl: './treehouse.component.html',
    styleUrls: ['./treehouse.component.css']
    
})
export class TreehouseComponent implements OnInit {

    constructor(private treehouseservice: ReportCardService) { }
    
    treeinfo: any[];
    treedata: any[];

    ngOnInit() {
        
        this.treehouseservice.treeData().subscribe(
              (treedata: any) => {
                const myArray = [];
                for (let key in treedata) {
                  myArray.push(treedata[key]);
                }
                this.treeinfo = myArray;
              });         
    }
    

}
