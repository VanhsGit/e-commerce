import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-test-error',
  standalone: true,
  imports: [CommonModule, NzButtonModule],
  templateUrl: './test-error.component.html'
})
export class TestErrorComponent implements OnInit {
  baseUrl = environment.apiUrl;
  validationErrors: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  get404Error() {
    this.http.get(this.baseUrl + 'products/42').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get500Error() {
    this.http.get(this.baseUrl + 'buggy/servererror').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get400Error() {
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get400ValidationError() {
    this.http.get(this.baseUrl + 'products/fortytwo').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.validationErrors = error.errors;
      }
    );
  }
}
