import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl,} from '@angular/forms';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,) { 
    this.formInit()
  }

  ngOnInit() {}
  formInit() {
    this.form = this.formBuilder.group({
      firstValue: ['', [Validators.required, this.null_check()]],
      secondValue: ['', [Validators.required, this.null_check()]],
      thirdValue: ['', [Validators.required, this.null_check()]],
      fourthValue: ['', [Validators.required, this.null_check()]],
      fifthValue: ['', [Validators.required, this.null_check()]],
      sixthValue: ['', [Validators.required, this.null_check()]],
     });
  }


  null_check(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      var re = "null";
      let input = control.value;
      let isValid = re == input;
      if (isValid) {
        return { 'null_check': { isValid } }
      }
      else {
        return null;
      }
    };
  }

  moveFocus($event, nextElement, previousElement) {
    if ($event.keyCode == 8 && previousElement) {
      previousElement.setFocus();
    } else if ($event.keyCode >= 48 && $event.keyCode <= 57) {
      if (nextElement) {
        nextElement.setFocus();
      }
    } else {
      
      $event.path[0].value = '';
    }
   }
}
