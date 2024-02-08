import { Component } from '@angular/core';
import { MedicDate } from 'src/app/interfaces/IMedicDate';
import { MedicDateAPIService } from 'src/app/services/clinique/medic-date-api.service';

@Component({
  selector: 'app-medic-date',
  templateUrl: './medic-date.component.html',
  styleUrls: ['./medic-date.component.css'],
})
export class MedicDateComponent {
  public medic_dates: MedicDate[] = [];
  constructor(private httpRequest: MedicDateAPIService) {}

  ngOnInit() {
    this.httpRequest.getRequest().subscribe(
      (res) => {
        console.log(res);
        this.medic_dates = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
