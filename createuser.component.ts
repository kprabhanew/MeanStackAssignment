import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { User } from '../models/User.model';
import { Country } from '../models/country.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  sex: any = 'male';
  public selectionModel: string = '';
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto : boolean = false;
  //dateOfBirth: Date = new Date(2018, 0, 30);
  //department = 2;

  fullnamePattern = "^[a-zA-Z]{5}$";
  emailPattern = "^[a-zA-Z0-9_.+-]+\@((gmail|hotmail)).com$";

  countrys: Array<Country> = [
    { code: 1, name: 'India' },
    { code: 2, name: 'USA' },
    { code: 3, name: 'UK' },
    { code: 4, name: 'Dubai' }
  ];

  User: User = {
    name: null,
    sex: null,
    email: null,
    dateOfBirth: null,
    age: null,
    country: null,
    code: null
  }

  constructor(private _Userservice: UserService) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        // showWeekNumbers: true,
        // minDate: new Date(2018, 0, 1),
        // maxDate: new Date(2018, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  ngOnInit() {
  }

  saveUser(empForm){
    console.log("User Form Value : ", empForm);
    this._Userservice.save(empForm);
    //console.log("User Form Value : ", empForm)
  }
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }
  onValueChange(event:any){
    console.log('event : ', event);
    console.log('Date : ', this.User.dateOfBirth);
  }

  showValueInCode(countryCode:any, event:any){
    console.log('Selected Country : ', countryCode);
    this.User.code = countryCode;
    // switch (country) {
    //   case 0:
    //       this.User.code = country;
    //       this.User.country="India"
    //       break;
    //   case 1:
    //     this.User.code = country;
    //     this.User.country="US"
    //       break;
    //   case 2:
    //   this.User.code = country;
    //   this.User.country="UK"
    //     break;
    //   case 3:
    //   this.User.code = country;
    //   this.User.country="Dubai"
    //     break;
    // }       
  }
}
