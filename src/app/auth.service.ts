import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  users: User[] = [{"username":"admin","email":"zakiahajouni@gmailcom"},
  {"username":"user","email":"user@gmail.com"} ];
  public loggedUser!:string;

    public isloggedIn: Boolean = false;
    public roles!:string[];

    logout() {
      this.isloggedIn= false;
      this.loggedUser = undefined!;
      localStorage.removeItem('loggedUser');
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
      this.router.navigate(['/login']);
    }
    login(user :User):Boolean{
      let validUser: Boolean = false;
      this.users.forEach((curUser) => {
        if(user.username== curUser.username && user.email==curUser.email) {
          validUser = true;
          this.loggedUser = curUser.username!;
          this.isloggedIn = true;
          localStorage.setItem('loggedUser',this.loggedUser);
          localStorage.setItem('isloggedIn',String(this.isloggedIn));
        }
      });

       return validUser;
    }

    

}
