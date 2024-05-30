// get-all-trains.component.ts
import { Component, OnInit } from '@angular/core';
import { WebApiServiceService } from '../service/web-api-service.service';

@Component({
  selector: 'app-get-all-trains',
  templateUrl: './get-all-trains.component.html',
  styleUrls: ['./get-all-trains.component.css']
})
export class GetAllTrainsComponent implements OnInit {
  responseData: any;
  error: any;
  showData: boolean = true; // Initially hide the data

  constructor(private myservice: WebApiServiceService) { }
  
  ngOnInit(): void {
    console.log('lazy Routing');
  }
  
  toggleData(): void {
    // Toggle the boolean value to show or hide the data
    this.showData = !this.showData;
    
    // Fetch data here if needed when the button is clicked
    if (this.showData) {
      this.myservice.getData().subscribe(
        data => {
          this.responseData = data.map((train: any) => {
            
            return {
              ...train,
              fullDeparture: new Date(`${train.departureDate.split('T')[0]}T${train.departureTime}`),
              fullDestination: new Date(`${train.destinationDate.split('T')[0]}T${train.destinationTime}`)
                
            };
          });
          console.log(this.responseData);
        },
        
        error => {
          this.error = error;
          console.error('There was an error!', error);
        }
      );
    }
  }
}
