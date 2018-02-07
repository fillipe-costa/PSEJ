import { Component } from '@angular/core';

import { GamesPage } from '../games/games';
import { AnimePage } from '../anime/anime';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GamesPage;
  tab3Root = AnimePage;

  constructor() {

  }
}
