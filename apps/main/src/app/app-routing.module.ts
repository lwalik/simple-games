import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { LoginPageModule } from './pages/login.page-module';
import { GamesFlowPageModule } from './pages/games-flow.page-module';
import { LoginUserResolver } from '@users';
import { HomePage } from './pages/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    resolve: {
      email: LoginUserResolver,
    },
  },
  {
    path: 'login',
    loadChildren: () => LoginPageModule,
  },
  {
    path: 'games',
    loadChildren: () => GamesFlowPageModule,
    resolve: [LoginUserResolver],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
