import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private http: HttpClient
  ) {

  }

  getDjango(): void {
    this.http.get('http://localhost:8000/polls')
    .subscribe(response => {
      console.log(response);
    });
  }

  getFlask(): void {
    this.http.get('http://localhost:8888/polls')
    .subscribe(response => {
      console.log(response);
    });
  }

  getExpress(): void {
    this.http.get('http://localhost:3000')
    .subscribe(response => {
      console.log(response);
    });
  }

  getNestJs(): void {
    this.http.get('http://localhost:3001')
    .subscribe(response => {
      console.log(response);
    });
  }
}
