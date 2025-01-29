import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-productivity-profile',
  standalone: true,
  imports: [RouterModule, SidebarComponent],
  template: `
    <div class="flex min-h-screen">
      <!-- Sidebar Section -->
      <div class="w-1/4 bg-gray-50">
        <app-sidebar></app-sidebar>
      </div>

      <!-- Main Content Section -->
      <div class="flex-1 p-4">
        <ul class="flex gap-10">
          <li class="mb-2">
            <a
              routerLink="/configure-apps/productivity-profile/application-groups"
              routerLinkActive="text-blue-500 font-bold"
            >
              Application Groups
            </a>
          </li>
          <li class="mb-2">
            <a
              routerLink="/configure-apps/productivity-profile/teams"
              routerLinkActive="text-blue-500 font-bold"
            >
              Teams
            </a>
          </li>
          <li class="mb-2">
            <a
              routerLink="/configure-apps/productivity-profile/users"
              routerLinkActive="text-blue-500 font-bold"
            >
              Users
            </a>
          </li>
        </ul>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class ProductivityProfileComponent {}
