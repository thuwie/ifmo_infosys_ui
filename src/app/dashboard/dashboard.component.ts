import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private authService: AuthService,
              private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
