import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white p-4 rounded shadow">
      <!-- Table -->
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="p-2 border-b font-medium">UserName</th>
            <th class="p-2 border-b font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            *ngFor="let user of paginatedData"
            class="hover:bg-gray-50 border-b last:border-none"
          >
            <td class="p-2">{{ user }}</td>
            <td class="p-2">
              <button class="text-[#7ec7c7] hover:opacity-80" title="Edit User">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-5"
                >
                  <path
                    d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"
                  />
                  <path
                    d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="flex justify-between items-center mt-4">
        <span class="text-sm text-gray-600">
          Items per page:
          <select
            [(ngModel)]="itemsPerPage"
            (change)="updatePagination()"
            class="border px-2 py-1 rounded text-sm"
          >
            <option *ngFor="let size of [5, 10, 20]" [value]="size">
              {{ size }}
            </option>
          </select>
        </span>
        <div class="flex items-center space-x-2">
          <button
            (click)="previousPage()"
            [disabled]="currentPage === 1"
            class="px-2 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            &lt;
          </button>
          <span class="text-sm"> {{ currentPage }} / {{ totalPages }} </span>
          <button
            (click)="nextPage()"
            [disabled]="currentPage === totalPages"
            class="px-2 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  `,
})
export class UsersComponent {
  // Dummy data for users
  users: string[] = [
    'fd sd',
    'Time Champ 23 Time Champ 23',
    'tttt tttt',
    'R130-16033.58.0 R130-16033.58.0',
    'vitest vitest',
    'vitest5 vitest5',
    'fg gf',
    'vitest4 vitest4',
    'tt tt',
  ];

  // Pagination variables
  itemsPerPage = 5;
  currentPage = 1;
  totalPages = 1;
  paginatedData: string[] = [];

  constructor() {
    this.updatePagination();
  }

  // Update pagination data
  updatePagination() {
    this.totalPages = Math.ceil(this.users.length / this.itemsPerPage);
    this.paginate();
  }

  paginate() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedData = this.users.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }
}
