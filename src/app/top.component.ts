import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'top-root',
  templateUrl: './top.component.html'
})
export class TopComponent implements OnInit {
  message: any;

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.data.hnData[0].title);
     this.message = this.route.snapshot.data.hnData[0].title;
  }

  ngOnInit() {
   
  }
}