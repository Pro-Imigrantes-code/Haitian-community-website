import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Importe o RouterModule
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NZ_I18N, NZ_DATE_CONFIG, pt_BR, en_US, es_ES } from 'ng-zorro-antd/i18n';
import { ForbiddenModule } from './shared/components/forbidden/forbidden.module';
import { EndpointsService } from './shared/components/services/endpoints/endpoints.service'; 
import { AppRoutingModule } from './app.routing.module'; 
import { AppComponent } from './app.component';
import { MenuModule } from './shared/components/menu/menu.module'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    NzLayoutModule,
    NzGridModule,
    NzPageHeaderModule,
    NzDividerModule,
    NzIconModule,
    MenuModule
  ],
  providers: [
    {
      provide: NZ_DATE_CONFIG,
      useValue: { firstDayOfWeek: 1 }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
