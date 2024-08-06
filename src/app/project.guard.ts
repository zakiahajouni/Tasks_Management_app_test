import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

export class ProjectGuard implements CanActivate {

  constructor (private authService: AuthService,
               private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {

      if (this.authService.loggedUser)

        return true;
        else
        {
          this.router.navigate(['app-forbidden']);
           return false;
        }
  }}
