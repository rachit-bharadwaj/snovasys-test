import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configure-apps',
  standalone: true,
  imports: [RouterModule, CommonModule], // Import CommonModule for ngClass
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Tabs Section -->
      <div class="bg-white shadow-sm">
        <div class="flex border-b border-[#7ec7c7] gap-10">
          <button
            class="cursor-pointer p-2"
            routerLink="productivity-profile"
            [ngClass]="{
              'text-[#7ec7c7] border-b-2 border-[#7ec7c7]': isActive(
                'productivity-profile'
              ),
              'text-gray-500': !isActive('productivity-profile')
            }"
          >
            Productivity Profile
          </button>
          <button
            class="cursor-pointer p-2"
            routerLink="mapping"
            [ngClass]="{
              'text-[#7ec7c7] border-b-2 border-[#7ec7c7]': isActive('mapping'),
              'text-gray-500': !isActive('mapping')
            }"
          >
            Mapping
          </button>
          <button
            class="cursor-pointer p-2"
            routerLink="application-groups"
            [ngClass]="{
              'text-[#7ec7c7] border-b-2 border-[#7ec7c7]':
                isActive('application-groups'),
              'text-gray-500': !isActive('application-groups')
            }"
          >
            Application Groups
          </button>
        </div>
      </div>

      <!-- Content Section -->
      <div class="p-4">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class ConfigureAppsComponent {
  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url.startsWith(`/configure-apps/${path}`);
  }
}
