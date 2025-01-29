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
            *ngFor="let user of paginatedData; let i = index"
            class="hover:bg-gray-50 border-b last:border-none"
          >
            <td class="p-2">{{ user }}</td>
            <td class="p-2 flex space-x-2">
              <button
                class="text-[#7ec7c7] hover:opacity-80"
                title="Edit User"
                (click)="openEditDialog(i)"
              >
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
              <button
                class="text-gray-400 hover:opacity-80"
                title="Delete User"
                (click)="deleteUser(i)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Edit Dialog -->
      <div
        *ngIf="isDialogOpen"
        class="fixed inset-0 bg-black/10 bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white p-6 rounded shadow w-1/3">
          <h2 class="text-lg font-bold mb-4">Edit User Productivity Profile</h2>
          <form (ngSubmit)="saveUser()">
            <div class="mb-4">
              <label
                for="userName"
                class="block text-sm font-medium text-gray-700"
                >User Name</label
              >
              <input
                id="userName"
                type="text"
                [(ngModel)]="editedUser"
                name="userName"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-[#7ec7c7] focus:border-[#7ec7c7]"
              />
            </div>
            <div class="flex justify-end space-x-2">
              <button
                type="button"
                (click)="closeDialog()"
                class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-[#7ec7c7] text-white rounded hover:bg-[#65b2b2]"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

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

  // Dialog State
  isDialogOpen = false;
  editedUser = '';
  editingIndex: number | null = null;

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

  // Edit functionality
  openEditDialog(index: number) {
    this.editingIndex = (this.currentPage - 1) * this.itemsPerPage + index;
    this.editedUser = this.users[this.editingIndex];
    this.isDialogOpen = true;
  }

  saveUser() {
    if (this.editingIndex !== null) {
      this.users[this.editingIndex] = this.editedUser;
      this.closeDialog();
      this.updatePagination();
    }
  }

  closeDialog() {
    this.isDialogOpen = false;
    this.editedUser = '';
    this.editingIndex = null;
  }

  // Delete functionality
  deleteUser(index: number) {
    const actualIndex = (this.currentPage - 1) * this.itemsPerPage + index;
    this.users.splice(actualIndex, 1);
    this.updatePagination();
  }
}
