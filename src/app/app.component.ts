import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { TabsComponent } from "./components/tabs/tabs.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBarComponent, TabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'trade-app';
}
