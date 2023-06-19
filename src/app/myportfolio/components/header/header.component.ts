import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   currentHeaderUrl:boolean;
  constructor(private router: Router) {
     if(router.url=='/'){
      this.currentHeaderUrl=true;
     }
     this.currentHeaderUrl = false;
   }

  ngOnInit(): void {
    if(this.router.url=='/'){
      this.currentHeaderUrl=true;
     }
     this.currentHeaderUrl = false;
  }

}
