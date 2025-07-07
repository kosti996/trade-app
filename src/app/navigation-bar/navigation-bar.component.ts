import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarComponent {
  profileName = 'Arthur';
  profileImageUrl = 'https://avatars.githubusercontent.com/u/12345678?v=4';
  profileTasksCount = 12;

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement | null;
    const value = target?.value ?? '';
  }
}
