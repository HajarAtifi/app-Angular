import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule , RoutingComponent} from './app-routing.module'; 
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HerosListComponent } from './heros-list/heros-list.component';
import { SettingComponent } from './setting/setting.component';




@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HerosListComponent,
    SettingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: CrisisListComponent},
      {path: 'table', component: HerosListComponent},
      {path: 'setting', component: SettingComponent},

      {path: '', redirectTo: '/home', pathMatch: 'full'},
     
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
