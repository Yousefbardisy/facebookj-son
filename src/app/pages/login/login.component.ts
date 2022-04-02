import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegsterComponent } from 'src/app/component/regster/regster.component';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private matDialog: MatDialog,
    private apiService: ApiService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  login(form: NgForm): void {
    console.log(form.value);

    const { email, password } = form.value;
    let id = '';

    if (!form.valid) {
      alert('plase enter vailed email or password');
      return;
    }
    this.http.get<any>('http://localhost:3000/profile').subscribe((res) => {
      console.log(res);

      const user = res.find((acc: any) => {
        console.log(acc);

        id = acc.id;
        return acc.email === email && acc.password === password;
      });
      if (user) {
        this.apiService.isLoggedIn = true;
        this.router.navigate([`home/${id}`]);
      } else {
        alert('enter correct email or password');
      }
    });
    form.resetForm();
  }

  openRegister(): void {
    const dialogRef = this.matDialog.open(RegsterComponent, {
      role: 'dialog',
      height: '480px',
      width: '480px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      let { fname, lname, email, password, avatar } = result;
      if (!result.avatar) {
        result.avatar =
          'https://img2.thejournal.ie/inline/1881369/original/?width=630&version=1881369';
      }

      if (result !== undefined) {
        this.apiService.postNewAccount(result).subscribe(
          (res) => {
            console.log(res);
            alert('account created successfully');
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        alert('please fill all required fields');
      }

      return;
    });
  }
}
