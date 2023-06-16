import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { SharedModule } from './shared/shared.module';
import { CreateDepartmentModalComponent } from './modals/create-department-modal/create-department-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersDashComponent } from './components/orders-dash/orders-dash.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  // {path: 'crear-portal', component: CreateDepartmentComponent},
  {path: 'orders-dash', component: OrdersDashComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    UserNavComponent,
    HomeComponent,
    CreateDepartmentComponent,
    CreateDepartmentModalComponent,
    OrdersDashComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
