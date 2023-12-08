import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { FakeService } from '../services/fake.service';
import { of } from 'rxjs';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeServiceMock: any;

  beforeEach(() => {
    fakeServiceMock ={
      getDataV1:jest.fn()
    }
    TestBed.configureTestingModule({
      declarations: [DataComponent],
      providers:[
        {provide: FakeService, useValue: fakeServiceMock}]
      
    });
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should getServiceData set serviceData',()=>{
    const expRes={
      name:"Omar Rebai"
    }
  jest.spyOn(fakeServiceMock,'getSataV1').mockReturnValue(of(expRes));
  expect(component.serviceData.name).toBe(expRes.name);
})});
