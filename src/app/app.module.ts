import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top.component';
import { HnResolver } from '../resolver/hn.resolver';
import {HnService} from '../resolver/hn.service';
import {HttpClientModule} from '@angular/common/http';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  {
    path: 'post',
    component: TopComponent,
    resolve: { hnData: HnResolver }
  }
];

@NgModule({
  imports: [ BrowserModule,AppRoutingModule,RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    TopComponent
  ],
  providers: [HnResolver,HnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
