import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: 'tickets', loadChildren: () => import('./modules/tickets/tickets.module').then(m => m.TicketsModule) },
  { path: '**', redirectTo: 'tickets' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
