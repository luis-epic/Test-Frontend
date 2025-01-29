import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
  standalone: false
})
export class TutorsPage implements OnInit {
  tutors: any[] = [];
  filteredTutors: any[] = [];
  filterForm: FormGroup; 
  errorMessage: string = '';

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      speciality: [''], // Campo de filtro
    });
  }

  ngOnInit() {
    this.apiService.getTutors().subscribe(
      (data) => {
        this.tutors = data;
        this.filteredTutors = data;
      },
      (error) => {
        this.errorMessage = 'Hubo un error al obtener los tutores. Intente nuevamente más tarde.';
        console.error('Error fetching tutors:', error);
      }
    );

    this.filterForm.get('speciality')?.valueChanges.subscribe(() => {
      this.onFilterChange();
    });

    this.loadTutors();
  }

  loadTutors(event?: any) {
    this.apiService.getTutors().subscribe(
      (data) => {
        this.tutors = data;
        this.filteredTutors = data;

        if (event) {
          event.target.complete();
        }
      },
      (error) => {
        this.errorMessage = 'Hubo un error al obtener los tutores. Intente nuevamente más tarde.';
        console.error('Error fetching tutors:', error);

        if (event) {
          event.target.complete();
        }
      }
    );
  }

  onFilterChange() {
    const speciality = this.filterForm.get('speciality')?.value;

    if (!speciality) {
      this.filteredTutors = this.tutors;
    } else {
      this.filteredTutors = this.tutors.filter((tutor) =>
        tutor.speciality.toLowerCase().includes(speciality.toLowerCase())
      );
    }
  }
}
