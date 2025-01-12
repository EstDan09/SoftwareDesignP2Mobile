import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  selectedLanguage: string = "";

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.selectedLanguage = this.translate.currentLang || this.translate.defaultLang;
  }

  changeLanguage() {
    if (this.selectedLanguage) {
      this.translate.use(this.selectedLanguage);
    }
  }

}
