import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-application-groups',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  template: `
    <div class="bg-white p-4 rounded shadow">
      <!-- Table -->
      <table class="w-full border-collapse">
        <thead class="border-b border-gray-300">
          <tr class="bg-gray-100 text-left">
            <th class="p-2 border-b font-medium">Application Group</th>
            <th class="p-2 border-b font-medium">Idle Time Configuration</th>
            <th
              class="p-2 border-b font-medium flex justify-between items-center"
            >
              <span> Status </span>

              <div class="flex items-center bg-gray-100 rounded px-2">
                <input
                  type="text"
                  placeholder="Search"
                  [(ngModel)]="searchTerm"
                  (input)="filterTable()"
                  class="px-4 py-2 text-sm bg-white rounded-lg focus:outline-none"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            *ngFor="let row of paginatedData; let i = index"
            class="hover:bg-gray-50 border-b border-gray-300 last:border-none"
          >
            <td class="p-2">{{ row.group }}</td>
            <td class="p-2">{{ row.idleTime }}</td>
            <td class="p-2 flex gap-2">
              <button
                class="px-2 py-1 rounded text-white"
                [ngClass]="{
                  'bg-green-500': row.status === 'Productive',
                  'bg-gray-200 text-gray-600': row.status !== 'Productive'
                }"
                (click)="toggleStatus(i, 'Productive')"
              >
                Productive
              </button>
              <button
                class="px-2 py-1 rounded text-white"
                [ngClass]="{
                  'bg-orange-500': row.status === 'Non-Productive',
                  'bg-gray-200 text-gray-600': row.status !== 'Non-Productive'
                }"
                (click)="toggleStatus(i, 'Non-Productive')"
              >
                Non-Productive
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
            <option *ngFor="let size of [5, 10, 25]" [value]="size">
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
export class ApplicationGroupsComponent {
  // Dummy data for the table
  data = [
    { group: 'cdxzdsz', idleTime: 'Default', status: '' },
    { group: 'Ct1', idleTime: 'Default', status: '' },
    { group: 'ct2', idleTime: 'Default', status: '' },
    { group: 'ct3', idleTime: 'Default', status: '' },
    { group: 'ct4', idleTime: 'Default', status: '' },
    { group: 'dczxd', idleTime: 'Default', status: '' },
    { group: 'dseax', idleTime: 'Default', status: '' },
    { group: 'Education', idleTime: 'No Idle Time', status: '' },
    { group: 'Email', idleTime: 'Default', status: '' },
  ];

  // Pagination variables
  itemsPerPage = 5;
  currentPage = 1;
  totalPages = 1;
  paginatedData = [...this.data];

  // Search term
  searchTerm = '';

  constructor() {
    this.updatePagination();
  }

  // Update pagination data
  updatePagination() {
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    this.paginate();
  }

  paginate() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedData = this.data.slice(start, end);
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

  // Filter table data
  filterTable() {
    const filtered = this.data.filter((row) =>
      row.group.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.paginatedData = filtered.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

  // Toggle status between Productive and Non-Productive
  toggleStatus(index: number, status: string) {
    const currentStatus = this.paginatedData[index].status;
    this.paginatedData[index].status = currentStatus === status ? '' : status; // Toggle between active and inactive
    this.data.find((d) => d.group === this.paginatedData[index].group)!.status =
      this.paginatedData[index].status;
  }
}
