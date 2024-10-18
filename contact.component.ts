import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private formBuilder: FormBuilder, private httpObj: HttpClient) { }
  formGroup: any;
  formsubmitted: boolean = false;

  contactform = this.formBuilder.group({
    name: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.pattern(/^[0]?[6789]\d{9}$/)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(200)]]
  })

  serverRes: any;
  save = () => {
    this.formsubmitted = true;
    if (this.contactform.invalid) {
      // alert('Invalid Input!');
    } else {
      // alert("Validation Success..!");
      let url = "http://localhost:8080/allapi/saveuser";
      let mydata = this.contactform.value;
      this.httpObj.post(url, mydata)
        .subscribe(response => {
          this.serverRes = response as string[];
          alert(this.serverRes.message);
          this.contactform.reset();
          this.formsubmitted = false;
          // console.log(this.contactform.value);
        })
    }
  }
}