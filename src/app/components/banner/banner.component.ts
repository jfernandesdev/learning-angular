import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent {
  toggleBanner: boolean = true;
  name: string = 'Jeferson';

  handleBannerToggle(): void {
    this.toggleBanner = !this.toggleBanner;
  }
}
