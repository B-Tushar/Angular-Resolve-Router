import { Component } from '@angular/core';
import {Event,Router,NavigationStart,NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-resolve';
  showLoading:boolean=false;
  constructor(private router:Router){
       this.router.events.subscribe((routerEvent:Event)=>{
          if(routerEvent instanceof NavigationStart){this.showLoading=true}
          if(routerEvent instanceof NavigationEnd){this.showLoading=false}
       })

  }

  OnInit(){
      //Reference URl - https://alligator.io/angular/route-resolvers/
      //https://www.youtube.com/watch?v=V_64FqedqW0
      //https://www.youtube.com/watch?v=Dm1OpX42Aho
  }
}
