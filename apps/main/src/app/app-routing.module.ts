import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { LoginPageModule } from './pages/login.page-module';
import { GamesFlowPageModule } from './pages/games-flow.page-module';
import { GamesLibraryPageModule } from './pages/games-library.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'login',
    loadChildren: () => LoginPageModule,
  },
  {
    path: 'games',
    loadChildren: () => GamesFlowPageModule,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
