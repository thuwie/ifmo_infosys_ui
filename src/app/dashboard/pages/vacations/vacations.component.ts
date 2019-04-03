import { Component, OnInit } from '@angular/core';
import { VacationService } from '../../../_services/vacation.service';
import { Vacation } from '../../../_models/Vacation';

@Component({
  selector: 'app-view',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.scss']
})
export class VacationsComponent implements OnInit {

  private vacations: Vacation[];
  private isLoading: boolean;

  constructor(private vacationService: VacationService) {
    this.isLoading = false;
  }

  ngOnInit() {
    this.getAllVacations();
  }

  async getAllVacations() {
    try {
      this.vacations = await this.vacationService.getAll();
      console.log(this.vacations);
    } catch (error) {
      console.error(error.message);
    }
  }

}
