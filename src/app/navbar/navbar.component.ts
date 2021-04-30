import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private themeService: ThemeService, public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.themeService.toggleMode();
  }

}
