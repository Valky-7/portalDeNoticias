import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { Regional } from './regional/regional';
import { Internacional } from './internacional/internacional';
import { Local } from './local/local';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home, Regional, Internacional, Local],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portal');
}
