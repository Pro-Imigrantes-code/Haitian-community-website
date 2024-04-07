import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NzMenuModule], 
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {}
