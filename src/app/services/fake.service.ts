import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  constructor(private http:HttpClie) {}
  getDatav1(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this;
  }
}
