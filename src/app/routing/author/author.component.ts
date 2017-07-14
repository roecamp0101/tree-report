import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
    
    info:{};
    skills = [
        { "name":"HTML", "types":[ "XHTML", " HTML5"] },
        { "name":"Javascript", "types":[ "ES5", " ES6" ] },
        { "name":"CSS", "types":[ "CSS 2", " CSS 3" ] },
        { "name":"Angular", "types":[ "ANGULAR 1X", " ANGULR 4" ] },
        { "name":"Jquery", "types":[ "Jquery 2.0", " Jquery 3.0" ] },
        { "name":"Node", "types":[ "Node 1.5", " Node 3.0" ] }
        
    ]
 

  constructor() { }

  ngOnInit() {
      this.info = this.skills;
  }

}
