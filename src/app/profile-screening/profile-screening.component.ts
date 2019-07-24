import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-profile-screening',
  templateUrl: './profile-screening.component.html',
  styleUrls: ['./profile-screening.component.css']
})
export class ProfileScreeningComponent implements OnInit {
  public listitem;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getEmployeeGroups();
  }
  public getEmployeeGroups() {
    this.apiService.getEmployeeData().subscribe(res => {
      this.listitem = res.results;
      console.log('res', res.results);
    });
  }

}
