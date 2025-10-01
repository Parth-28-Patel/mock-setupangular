import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { UserList } from '../model/userList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private homeService: HomeService) {}

  displayedColumns: string[] = ['id', 'name', 'email', 'role'];
  dataSource = new MatTableDataSource<UserList>([]);

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.homeService.getUserList(this.dataSource).subscribe({
      next: (requestData) => {
        console.log('User List', requestData);

        // Extract the data array from the response and update the MatTableDataSource
        this.dataSource.data = requestData.data || requestData;
      },
      error: (err) => {
        console.error('Error fetching user list', err);
      },
    });
  }

  LogOut() {
    localStorage.removeItem('UserData');
    this.router.navigate(['/login']);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
