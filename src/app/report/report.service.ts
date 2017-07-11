import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReportCardService {
    constructor(private http: Http){}
    
    reportData(){
    //used to extract server data onto the template
     return this.http.get('https://randomuser.me/api/?results=110')
         .map(
                (response: Response) =>{
                  
                    const data = response.json();
                    
                    return data.results;
                }
        
                )
            
    }
    
    treeData(){
    //used to extract server data onto the template
     return this.http.get('https://teamtreehouse.com/roeroe.json')
         .map(
                (response: Response) =>{
                  
                    const info = response.json();
                    
                    return info.badges;
                }
        
                )
            
    }
    
    codeData(){
    //used to extract server data onto the template
     return this.http.get('https://jsonplaceholder.typicode.com/photos')
         .map(
                (response: Response) =>{
                  
                    const infos = response.json();
                    
                    return infos;
                }
        
                )
            
    }
}