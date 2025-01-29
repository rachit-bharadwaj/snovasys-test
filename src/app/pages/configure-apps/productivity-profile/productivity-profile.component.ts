import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productivity-profile',
  standalone: true,
  imports: [RouterModule, SidebarComponent, CommonModule],
  template: `
    <div class="flex min-h-screen">
      <!-- Sidebar Section -->
      <div class="w-1/4 bg-gray-50">
        <app-sidebar></app-sidebar>
      </div>

      <!-- Main Content Section -->
      <div class="flex-1 p-4">
        <!-- Tabs Section -->
        <ul class="flex border-b border-[#7ec7c7] gap-10">
          <li>
            <button
              class="cursor-pointer p-2"
              routerLink="/configure-apps/productivity-profile/application-groups"
              [ngClass]="{
                'text-[#7ec7c7] border-b-2 border-[#7ec7c7]':
                  isActive('application-groups'),
                'text-gray-500': !isActive('application-groups')
              }"
            >
              Application Groups
            </button>
          </li>
          <li>
            <button
              class="cursor-pointer p-2"
              routerLink="/configure-apps/productivity-profile/teams"
              [ngClass]="{
                'text-[#7ec7c7] border-b-2 border-[#7ec7c7]': isActive('teams'),
                'text-gray-500': !isActive('teams')
              }"
            >
              Teams
            </button>
          </li>
          <li>
            <button
              class="cursor-pointer p-2"
              routerLink="/configure-apps/productivity-profile/users"
              [ngClass]="{
                'text-[#7ec7c7] border-b-2 border-[#7ec7c7]': isActive('users'),
                'text-gray-500': !isActive('users')
              }"
            >
              Users
            </button>
          </li>
        </ul>

        <!-- Dynamic Content -->
        <div class="p-4">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
})
export class ProductivityProfileComponent {
  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url.startsWith(
      `/configure-apps/productivity-profile/${path}`
    );
  }
}
