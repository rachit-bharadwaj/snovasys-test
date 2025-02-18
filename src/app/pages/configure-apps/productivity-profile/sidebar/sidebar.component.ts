import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  template: `
    <div class="w-full bg-gray-50 p-4">
      <!-- Search Box -->
      <div class="mb-4">
        <div
          class="flex items-center bg-white rounded shadow-sm border border-gray-300"
        >
          <input
            type="text"
            placeholder="Search"
            [(ngModel)]="searchTerm"
            (input)="filterProfiles()"
            class="flex-1 px-4 py-2 text-sm focus:outline-none"
          />
          <button
            class="p-2 bg-[#7ec7c7] text-white rounded-tr rounded-br hover:bg-[#65b2b2]"
          >
            +
          </button>
        </div>
      </div>

      <!-- Profile List -->
      <div>
        <h3 class="text-sm font-bold text-[#7ec7c7] mb-2">Default</h3>
        <ul>
          <li
            *ngFor="let profile of filteredProfiles; let i = index"
            (click)="selectProfile(i)"
            [class.bg-gray-200]="selectedProfile === i"
            class="flex items-center justify-between py-2 border-b border-gray-300 last:border-b-0 cursor-pointer hover:bg-gray-100"
          >
            <span class="text-sm">{{ profile }}</span>
            <div class="flex space-x-2">
              <button
                class="text-gray-500 hover:text-gray-800"
                title="Edit"
                (click)="openEditDialog(i, $event)"
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
                class="text-gray-500 hover:text-red-600"
                title="Delete"
                (click)="deleteProfile(i, $event)"
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
            </div>
          </li>
        </ul>
      </div>

      <!-- Edit Dialog -->
      <div
        *ngIf="isEditDialogOpen"
        class="fixed inset-0 bg-black/10 bg-opacity-50 flex items-center justify-center"
      >
        <div class="bg-white rounded p-6 w-96">
          <h2 class="text-lg font-bold mb-4">Manage Productivity Profile</h2>
          <label class="block mb-2 text-sm">Productivity Profile Name</label>
          <input
            [(ngModel)]="editedProfileName"
            class="w-full border rounded px-3 py-2"
            type="text"
          />
          <div class="flex justify-end gap-2 mt-4">
            <button
              (click)="saveEdit()"
              class="bg-[#7ec7c7] text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              (click)="closeEditDialog()"
              class="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  profiles: string[] = [
    'qte3',
    'fvgr',
    'vitest1',
    'vitest125',
    'fdg',
    'Agent-Test-NonProductive',
    'cx',
    'fc',
    'test',
  ];
  searchTerm: string = '';
  filteredProfiles: string[] = [...this.profiles];
  selectedProfile: number | null = null;

  isEditDialogOpen = false;
  editedProfileName: string = '';
  editIndex: number | null = null;

  filterProfiles() {
    this.filteredProfiles = this.profiles.filter((profile) =>
      profile.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectProfile(index: number) {
    this.selectedProfile = index;
  }

  openEditDialog(index: number, event: Event) {
    event.stopPropagation();
    this.editIndex = index;
    this.editedProfileName = this.filteredProfiles[index];
    this.isEditDialogOpen = true;
  }

  saveEdit() {
    if (this.editIndex !== null) {
      this.filteredProfiles[this.editIndex] = this.editedProfileName;
      this.profiles[this.editIndex] = this.editedProfileName;
    }
    this.closeEditDialog();
  }

  closeEditDialog() {
    this.isEditDialogOpen = false;
  }

  deleteProfile(index: number, event: Event) {
    event.stopPropagation();
    this.filteredProfiles.splice(index, 1);
    this.profiles.splice(index, 1);
  }
}
