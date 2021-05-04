import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './container/main-layout/main-layout.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PizzaComponent } from './pages/pizza/pizza.component';

const routes: Routes = [  
  { path: 'pizza', component: PizzaComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin-panel', component: AdminPanelComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
