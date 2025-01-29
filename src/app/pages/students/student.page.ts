import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
  standalone: false
})
export class StudentPage implements OnInit {
  users: any[] = [];
  selectedUser: any = null;
  errorMessage: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers(event?: any) {
    this.apiService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.errorMessage = '';
        if (event) {
          event.target.complete();
        }
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.errorMessage = 'Error al obtener los usuarios. Por favor, intente nuevamente.';
        if (event) {
          event.target.complete(); 
        }
      }
    );
  }

  selectUser(user: any) {
    this.selectedUser = user;
  }

  clearSelection() {
    this.selectedUser = null;
  }

  onRefresh(event: any) {
    this.fetchUsers(event); 
  }
}