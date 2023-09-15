import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'daycounter',
    loadChildren: () => import('./pages/daycounter/daycounter.module').then( m => m.DaycounterPageModule)
  },
  {
    path: 'term',
    loadChildren: () => import('./pages/term/term.module').then( m => m.TermPageModule)
  },
  {
    path: 'challenge',
    loadChildren: () => import('./pages/challenge/challenge.module').then( m => m.ChallengePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
