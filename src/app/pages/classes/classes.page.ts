import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
  standalone: false
})
export class ClassesPage implements OnInit {
  bookings: any[] = [];
  filteredBookings: any[] = [];
  students: any[] = [];
  filterUserId: string = '';
  errorMessage: string = '';
  filterForm: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      userId: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.fetchBookings();
    this.fetchStudents();
  }

  fetchBookings(event?: any) {
    this.apiService.getBookings().subscribe(
      (data) => {
        this.bookings = data;
        this.filteredBookings = data;
        this.errorMessage = '';
        if (event) {
          event.target.complete(); 
        }
      },
      (error) => {
        console.error('Error fetching bookings:', error);
        this.errorMessage = 'Error al obtener las reservas. Por favor, intente nuevamente.';
        if (event) {
          event.target.complete(); 
        }
      }
    );
  }

  fetchStudents(event?: any) {
    this.apiService.getUsers().subscribe(
      (data) => {
        this.students = data;
        this.errorMessage = '';
        if (event) {
          event.target.complete(); 
        }
      },
      (error) => {
        console.error('Error fetching students:', error);
        this.errorMessage = 'Error al obtener los estudiantes. Por favor, intente nuevamente.';
        if (event) {
          event.target.complete(); 
        }
      }
    );
  }

  onFilterChange() {
    if (this.filterForm.invalid) {
      this.errorMessage = 'Por favor, seleccione un estudiante para filtrar.';
      return;
    }

    this.filterUserId = this.filterForm.value.userId;

    if (!this.filterUserId) {
      this.filteredBookings = this.bookings;
    } else {
      this.filteredBookings = this.bookings.filter(
        (booking) => booking.student_id === this.filterUserId
      );
    }
  }

  clearFilter() {
    this.filterForm.reset();
    this.filteredBookings = this.bookings;
    this.errorMessage = '';
  }

  onRefresh(event: any) {
    this.fetchBookings(event);
    this.fetchStudents(event);
  }
}