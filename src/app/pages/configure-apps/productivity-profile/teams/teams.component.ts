import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way binding

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white p-4 rounded shadow">
      <!-- Table -->
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="p-2 border-b font-medium">
              Team Name
              <span class="text-gray-500 text-sm">↓</span>
            </th>
            <th class="p-2 border-b font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            *ngFor="let team of teams; let i = index"
            class="hover:bg-gray-50 border-b last:border-none"
          >
            <td class="p-2">{{ team }}</td>
            <td class="p-2">
              <button
                class="text-[#7ec7c7] hover:opacity-80"
                title="Edit Team"
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
          <h2 class="text-lg font-bold mb-4">Edit Team Productivity Profile</h2>
          <form (ngSubmit)="saveTeam()">
            <div class="mb-4">
              <label
                for="teamName"
                class="block text-sm font-medium text-gray-700"
                >Team Name</label
              >
              <input
                id="teamName"
                type="text"
                [(ngModel)]="editedTeam"
                name="teamName"
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
    </div>
  `,
})
export class TeamsComponent {
  // Dummy data for teams
  teams: string[] = [
    'a14',
    'a5',
    'a18',
    'sales',
    'a8',
    'a12',
    'a3',
    'a7',
    'a10',
  ];

  // Edit Dialog State
  isDialogOpen = false;
  editedTeam: string = '';
  editingIndex: number | null = null;

  // Open the edit dialog
  openEditDialog(index: number) {
    this.editingIndex = index;
    this.editedTeam = this.teams[index]; // Set the current team name for editing
    this.isDialogOpen = true;
  }

  // Close the dialog
  closeDialog() {
    this.isDialogOpen = false;
    this.editedTeam = '';
    this.editingIndex = null;
  }

  // Save the edited team name
  saveTeam() {
    if (this.editingIndex !== null) {
      this.teams[this.editingIndex] = this.editedTeam; // Update the team name
      this.closeDialog();
    }
  }
}
