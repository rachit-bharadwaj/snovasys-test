import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="min-h-screen flex flex-col p-3 pb-0">
      <!-- Global Tabs -->
      <nav class="shadow-sm">
        <div
          class="max-w-7xl mx-4 flex space-x-4 h-12 pb-0 items-center border-b-2 border-[#7ec7c7] w-fit"
        >
          <button
            routerLink="/trends"
            routerLinkActive="active-tab"
            [ngClass]="{
              'bg-[#7ec7c7] text-white': isActive('/trends'),
              'bg-white text-[#7ec7c7]': !isActive('/trends')
            }"
            class="cursor-pointer px-10 py-2 rounded-t-2xl flex gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                clip-rule="evenodd"
              />
            </svg>

            <p>Trends</p>
          </button>
          <button
            routerLink="/timeline"
            routerLinkActive="active-tab"
            [ngClass]="{
              'bg-[#7ec7c7] text-white': isActive('/timeline'),
              'bg-white text-[#7ec7c7]': !isActive('/timeline')
            }"
            class="cursor-pointer px-10 py-2 rounded-t-2xl flex gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                clip-rule="evenodd"
              />
            </svg>

            <p>Time Line</p>
          </button>
          <button
            routerLink="/configure-apps"
            routerLinkActive="active-tab"
            [ngClass]="{
              'bg-[#7ec7c7] text-white': isActive('/configure-apps'),
              'bg-white text-[#7ec7c7]': !isActive('/configure-apps')
            }"
            class="cursor-pointer px-10 py-2 rounded-t-2xl flex gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>

            <p>Configure Apps</p>
          </button>
        </div>
      </nav>

      <!-- Dynamic Content -->
      <main class="flex-1">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class MainLayoutComponent {
  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url.startsWith(path);
  }
}
