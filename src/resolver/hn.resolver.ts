import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {HnService} from './hn.service';
import {ActivatedRouteSnapshot} from '@angular/router';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';

@Injectable()
export class HnResolver implements Resolve<any> {
  constructor(private hnService:HnService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.hnService.getPost();
  }
}