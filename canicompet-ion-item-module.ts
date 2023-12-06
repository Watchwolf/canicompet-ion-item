import {NgModule} from '@angular/core';
import {CanicompetIonItemComponent} from './canicompet-ion-item.component';
import {CommonModule} from "@angular/common";
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    CanicompetIonItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    RouterModule,
  ],
  exports: [
    CanicompetIonItemComponent
  ]
})
export class CanicompetIonItemModule {
}
