import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingModule } from './shopping/shopping.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { Api1Component } from './api1/api1.component';
import { Api2Component } from './api2/api2.component';
import { Api3Component } from './api3/api3.component';
import { Api4Component } from './api4/api4.component';
import { BookapiComponent } from './bookapi/bookapi.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './company/employee/employee.component';
import { SalaryComponent } from './company/salary/salary.component';
import { LeaveComponent } from './company/leave/leave.component';
import { PayslipComponent } from './company/payslip/payslip.component';
import { ShoppingdashboardComponent } from './shopping/shoppingdashboard/shoppingdashboard.component';
import { ItemComponent } from './shopping/item/item.component';
import { SalesComponent } from './shopping/sales/sales.component';
import { VendorComponent } from './shopping/vendor/vendor.component';
import { InvoiceComponent } from './shopping/invoice/invoice.component';
import { SalesmanComponent } from './shopping/salesman/salesman.component';
import { ContactComponent } from './contact/contact.component';
import { ParentdataComponent } from './parentdata/parentdata.component';
import { ChilddataComponent } from './childdata/childdata.component';
import { MyemailComponent } from './myemail/myemail.component';
import { StringlengthPipe } from './stringlength.pipe';
import { UppercasePipe } from './uppercase.pipe';
import { ValidmobilePipe } from './validmobile.pipe';
import { ValidateemailPipe } from './validateemail.pipe';

const allpages : Routes= [
        {path:"email",component: MyemailComponent},
        {path:"parentdata",component: ParentdataComponent},
        {path:"contact",component: ContactComponent},
        {path:"shopping", component:ShoppingdashboardComponent, children:[
        {path:"itemlist", component:ItemComponent},
        {path:"sales", component:SalesComponent},
        {path:"vendor", component:VendorComponent},
        {path:"invoice", component:InvoiceComponent},
        {path:"salesman", component:SalesmanComponent}
      ]},
      {path:"company",component:CompanyComponent, children:[
      {path:"emp",component:EmployeeComponent},
      {path:"salary",component:SalaryComponent},
      {path:"leave",component:LeaveComponent},
      {path:"payslip",component:PayslipComponent},
      {path:"",component:Api3Component}
    ]},
    {path:"user", component:UserComponent},
    {path:"api1", component:Api1Component},
    {path:"api2", component:Api2Component},
    {path:"api3", component:Api3Component},
    {path:"api4", component:Api4Component},
    {path:"bookapi", component:BookapiComponent}, //http:4200/user
    {path:"product", component:ProductComponent},//http:4200/product
    {path:"customer", component:CustomerComponent},//http:4200/customer
    {path:"", component:UserComponent} //http:4200/
  ];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    CustomerComponent,
    Api1Component,
    Api2Component,
    Api3Component,
    Api4Component,
    BookapiComponent,
    CompanyComponent,
    EmployeeComponent,
    SalaryComponent,
    LeaveComponent,
    PayslipComponent,
    ContactComponent,
    ParentdataComponent,
    ChilddataComponent,
    MyemailComponent,
    StringlengthPipe,
    UppercasePipe,
    ValidmobilePipe,
    ValidateemailPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allpages),
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    ShoppingModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
