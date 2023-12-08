import { FakeService } from './../services/fake.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  errorMessage:any;
  serviceData:any;
  constructor(private FakeService:FakeService) { }
  
  ngOnInit(): void {
    this.getServiceData();}
    getServiceData() {
    this.FakeService.getDataV1().subscribe(
      {
    next: data =>{this.serviceData=data;},
    error: err => {this.errorMessage=err.statusText;},
    complete: () => {
      console.log("Finished");
    }});
}}
