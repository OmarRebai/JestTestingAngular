import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { FakeService } from '../services/fake.service';
import { of, throwError } from 'rxjs';

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
  fixture.detectChanges();
  expect(component.serviceData.name).toBe(expRes.name);
});
it('should getServiceData set errorMessage',()=>{
  const errorRes={
    error:'test 404 error',
    status:404,statusText:'Not Found'
  }
  jest.spyOn(fakeServiceMock,'getSataV1').mockReturnValue(throwError(()=>errorRes));
component.getServiceData();
expect(component.errorMessage).toBe('Not Found')
})
it('should getServiceData set serviceData',()=>{
  const expRes={
    name:"Omar Rebai",
    time:12
  }
jest.spyOn(fakeServiceMock,'getSataV1').mockReturnValue(of(expRes));
fixture.detectChanges();
expect(component.greeting).toBe("Good day");
});
it('should getServiceData set serviceData',()=>{
  const expRes={
    name:"Omar Rebai",
    time:9
  }
jest.spyOn(fakeServiceMock,'getSataV1').mockReturnValue(of(expRes));
fixture.detectChanges();
expect(component.greeting).toBe("Good morning");
});
it('should getServiceData set serviceData',()=>{
  const expRes={
    name:"Omar Rebai",
    time:22
  }
jest.spyOn(fakeServiceMock,'getSataV1').mockReturnValue(of(expRes));
fixture.detectChanges();
expect(component.greeting).toBe("Good evening");
});
});
