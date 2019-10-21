import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layout/containers/app-layout/app-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  // { path: "", redirectTo: "auth", pathMatch: "full" },
  { path: '', canActivate: [AuthGuard], component: AppLayoutComponent, children: [
    { path: 'cards', loadChildren: () => import("./cards/cards.module").then(m => m.CardsModule)}
  ]},
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
