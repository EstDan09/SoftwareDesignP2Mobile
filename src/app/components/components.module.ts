import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthBtnComponent } from './auth-btn/auth-btn.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
      AuthBtnComponent,
      SidemenuComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule,
      TranslateModule.forChild()
    ],
    exports: [
      AuthBtnComponent,
      SidemenuComponent
    ]
})
export class ComponentsModule { }
