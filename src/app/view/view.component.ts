import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Vacation } from '../entity/Vacation';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  private vacations: Vacation[];
  private isLoading: boolean;

  constructor(private apiService: ApiService) {
    this.isLoading = false;
  }

  ngOnInit() {
    this.getAllVacations();
  }

  async getAllVacations() {
    try {
      this.vacations = await this.apiService.getAllVacations();
      console.log(this.vacations);
    } catch (error) {
      console.error(error.message);
    }
  }

}
