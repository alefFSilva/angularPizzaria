import { LoginComponent } from "../AppComponents/Login/login.component";
import { HomeComponent } from "../AppComponents/Home/home.component";
import { DashBoardComponent } from "../AppComponents/DashBoard/dashboard.component";
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path: 'dashBoard', component: DashBoardComponent},
    {
        path: '', component: DashBoardComponent,
        children: [
            {
               path: 'home', component: HomeComponent
            },
        ]
    },
];

