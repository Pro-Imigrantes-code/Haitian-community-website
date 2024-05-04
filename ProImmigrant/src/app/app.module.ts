import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { AppRoutingModule } from './app.routing'; 

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
