import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-ngo-registration',
  templateUrl: './ngo-registration.component.html',
  styleUrls: ['./ngo-registration.component.scss'],
})
export class NgoRegistrationComponent implements OnInit {

  constructor(private FormBuild: FormBuilder) {
    this.venderDetails = new FormGroup({
      NameofVendor: new FormControl('', [Validators.required]),
      //  District: new FormControl('', [Validators.required]),
      PinCode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      RepresentativeName: new FormControl('', [Validators.required]),
      MobileNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      VendorSSOId: new FormControl('', [Validators.required]),
      PurposeforRegistration: new FormControl('', [Validators.required]),
      Circle_Code: new FormControl('', [Validators.required]),
      Division_Code: new FormControl('', [Validators.required]),
      Range_Code: new FormControl('', [Validators.required]),
      Village_Code: new FormControl('', [Validators.required]),
      WaterSource_Code: new FormControl('', [Validators.required]),
      WaterHoles_Code: new FormControl('', [Validators.required]),
      InsertedBy: new FormControl('', [Validators.required]),
      isActive: new FormControl('', [Validators.required]),
      UsedFor: new FormControl('', [Validators.required]),
      // ngoName:new FormControl('', [Validators.required]),
      animalid: new FormControl('', [Validators.required]),
      ChildAnimalId: new FormControl('', [Validators.required]),
      OtherAnimalName: new FormControl('', [Validators.required]),
      StaffList: this.FormBuild.array([
        //this.initUserDetail()
      ])
    });
   }
  venderDetails: FormGroup;
  ngOnInit() {}
  initUserDetail(): FormGroup {
    return this.FormBuild.group({
      ID: ['0'],
      Name: ['', Validators.required],
      Mobile: ['', Validators.required],
      Age: ['', Validators.required],
      PhotoURL: [''],
      DisplayPhotoURL: ['']
    });
  }
}
