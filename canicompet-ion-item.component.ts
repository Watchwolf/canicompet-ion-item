import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, Directive} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'canicompet-ion-item',
  templateUrl: './canicompet-ion-item.component.html',
  styleUrls: ['./canicompet-ion-item.component.scss'],
  standalone: false
})
export class CanicompetIonItemComponent  implements OnInit {

  @Input() lines: string = "full"
  @Input() ionItemClass: string = ''
  @Input() color: string = 'default'
  @Input() target: string = ''
  @Input() href: string = ''
  @Input() routerLink

  constructor() { }

  ngOnInit() {}

}
