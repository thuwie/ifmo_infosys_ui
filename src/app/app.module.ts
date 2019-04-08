import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatTableModule } from '@angular/material/table';
import {
  MatTabsModule, MatSidenavModule, MatDividerModule, MatListModule, MatMenuModule,
  MatIconModule, MatGridListModule, MatProgressSpinnerModule, MatToolbarModule, MatButtonModule, MatCardModule,
  MatInputModule, MatDialogModule, MatBadgeModule, MatSortModule, MatStepperModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VacationsComponent } from './dashboard/pages/vacations/vacations.component';
import { ModerateComponent } from './dashboard/pages/moderate/moderate.component';
import { AdminComponent } from './dashboard/pages/admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/pages/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { UserService } from './_services/user.service';
import { VacationService } from './_services/vacation.service';
import { AuthGuard } from './_guards/auth.guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { TasksComponent } from './dashboard/pages/tasks/tasks.component';
import { TaskService } from './_services/task.service';
import { AdminEditUserDialogComponent } from './dashboard/pages/admin/user-tab/edit-dialog/admin-edit-user-dialog.component';
import { AdminAddUserDialogComponent } from './dashboard/pages/admin/user-tab/add-dialog/admin-add-user-dialog.component';
import { AdminUserComponent } from './dashboard/pages/admin/user-tab/admin-user.component';
import { AdminEmployeeComponent } from './dashboard/pages/admin/employee-tab/admin-employee.component';
import { AdminEditEmployeeDialogComponent } from './dashboard/pages/admin/employee-tab/edit-dialog/admin-edit-employee-dialog.component';
import { AdminAddEmployeeDialogComponent } from './dashboard/pages/admin/employee-tab/add-dialog/admin-add-employee-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VacationsComponent,
    ModerateComponent,
    TasksComponent,
    AdminComponent,
    AdminUserComponent,
    AdminEditUserDialogComponent,
    AdminAddUserDialogComponent,
    AdminEmployeeComponent,
    AdminEditEmployeeDialogComponent,
    AdminAddEmployeeDialogComponent,
    DashboardComponent,
    HeaderComponent,
    TasksComponent
  ],
  entryComponents: [
    AdminEditUserDialogComponent,
    AdminAddUserDialogComponent,
    AdminEditEmployeeDialogComponent,
    AdminAddEmployeeDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    CdkTableModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatBadgeModule,
    MatSortModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  exports: [
    CdkTableModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    VacationService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
