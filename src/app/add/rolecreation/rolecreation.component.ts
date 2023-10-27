import { Component } from '@angular/core';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-rolecreation',
  templateUrl: './rolecreation.component.html',
  styleUrls: ['./rolecreation.component.css']
})
export class RolecreationComponent {
  selectedValue: string;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}
