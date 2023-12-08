import { Component } from '@angular/core';

@Component({
  selector: 'app-matchers',
  templateUrl: './matchers.component.html',
  styleUrls: ['./matchers.component.css'],
})
export class MatchersComponent {
  compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
  }
}
