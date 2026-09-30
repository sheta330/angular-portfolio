import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Blog } from './components/blog/blog';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'blog', component: Blog },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '/home' }
];
