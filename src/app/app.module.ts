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
import { AdminEditDialogComponent } from './dashboard/pages/admin/edit-dialog/admin-edit-dialog.component';
import { AdminAddDialogComponent } from './dashboard/pages/admin/add-dialog/admin-add-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VacationsComponent,
    ModerateComponent,
    TasksComponent,
    AdminComponent,
    AdminEditDialogComponent,
    AdminAddDialogComponent,
    DashboardComponent,
    HeaderComponent,
    TasksComponent
  ],
  entryComponents: [
    AdminEditDialogComponent,
    AdminAddDialogComponent
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
