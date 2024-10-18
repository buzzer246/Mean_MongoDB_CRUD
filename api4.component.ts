import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-api4',
  templateUrl: './api4.component.html',
  styleUrls: ['./api4.component.css']
})
export class Api4Component {
  constructor(private httpObj: HttpClient) { }
  ngOnInit() {
    this.getContact();
  }


  contactlist: any[] = [];
  getContact = () => {
    this.httpObj.get('http://localhost:8080/allapi/userlist')
      .subscribe(response => {
        this.contactlist = response as string[];
        //alert(this.contactlist.length);
      });
  }
  name: string = "";
  mobile: string = "";
  email: string = "";
  address: string = "";
  serverRes: any;
  userid: string = "";

  editUser = (userinfo: any) => {
    //console.log(userinfo);
    this.userid = userinfo._id;
    this.name = userinfo.fullname;
    this.mobile = userinfo.mobile;
    this.email = userinfo.email;
    this.address = userinfo.address;

  }
  save = () => {
    if (this.userid == "") {
      let newcontact = {
        "name": this.name,
        "email": this.email,
        "mobile": this.mobile,
        "address": this.address
      }
      let serverRes = {};

      let url = "http://localhost:8080/allapi/saveuser";
      this.httpObj.post(url, newcontact)
        .subscribe(response => {
          this.serverRes = response as string[];
          alert(this.serverRes.message);
          this.getContact();
          this.name = "";
          this.email = "";
          this.mobile = "";
          this.address = "";
        });
    } else {
      let newcontact = {
        "name": this.name,
        "email": this.email,
        "mobile": this.mobile,
        "address": this.address,
        "id": this.userid
      }
      let serverRes = {};

      let url = "http://localhost:8080/allapi/updateuser";
      this.httpObj.put(url, newcontact)
        .subscribe(response => {
          this.serverRes = response as string[];
          alert(this.serverRes.message);
          this.getContact();
          this.name = "";
          this.email = "";
          this.mobile = "";
          this.address = "";
        });
    }

  }

  delUser = (id: any) => {
    let url = "http://localhost:8080/allapi/deleteuser/" + id;
    this.httpObj.delete(url)
      .subscribe(response => {
        this.serverRes = response as string[];
        alert(this.serverRes.message);
        this.getContact();
      });
  }

  //search user
  username: string = "";
  findUser = () => {
    //alert(this.username);
    let url = "http://localhost:8080/allapi/searchuser";
    this.httpObj.post(url, { name: this.username })
      .subscribe(response => {
        this.contactlist = response as string[];

      });
  }

  p: number = 1;
  /*
    sortDesc() {
      this.contactlist = this.contactlist.sort((a, b) => a.fullname - b.fullname);
    }
   sortAsc() {
      this.contactlist = this.contactlist.sort((a, b) => b.fullname - a.fullname);
    }
  */
  sortOrd: string = "asc";
  sortMe = (col: string) => {
    if (this.sortOrd == "asc") {
      switch (col) {
        case "fullname":
          this.contactlist = this.contactlist.sort((a, b) => a.fullname.localeCompare(b.fullname));
          break;
        case "email":
          this.contactlist = this.contactlist.sort((a, b) => a.email.localeCompare(b.email));
          break;
        case "mobile":
          this.contactlist = this.contactlist.sort((a, b) => a.mobile - b.mobile);
          break;
      }
      this.sortOrd = "desc";
    } else {
      switch (col) {
        case "fullname":
          this.contactlist = this.contactlist.sort((a, b) => b.fullname.localeCompare(a.fullname));
          break;
        case "email":
          this.contactlist = this.contactlist.sort((a, b) => b.email.localeCompare(a.email));
          break;
        case "mobile":
          this.contactlist = this.contactlist.sort((a, b) => b.mobile - a.mobile);
          break;
      }
      this.sortOrd = "asc";
    }

  }
}

