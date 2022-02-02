import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ContactUSComponent } from './modules/contact-us/contact-us.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ServicesComponent } from './modules/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact-us', component: ContactUSComponent },
  { path: 'services', component: ServicesComponent },
  // {path: '**', component: PageNotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
