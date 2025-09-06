import { Routes } from '@angular/router';
import { Home } from './components/routing/home/home';
import { Aboutus } from './components/routing/aboutus/aboutus';
import { Careers } from './components/routing/careers/careers';
import { Contactus } from './components/routing/contactus/contactus';
import { Notfound } from './components/routing/notfound/notfound';
import { UserList } from './components/user-list/user-list';
import { ProductList } from './components/product-list/product-list';
import { UserDetails } from './components/user-details/user-details';
import { ProductDetails } from './components/product-details/product-details';
import { UploadVideo } from './components/routing/upload-video/upload-video';
import { trainerGuard } from './guards/trainer-guard';
import { canExitGuard } from './guards/can-exit-guard';
import { ContractJobs } from './components/routing/contract-jobs/contract-jobs';
import { PermanentJobs } from './components/routing/permanent-jobs/permanent-jobs';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  {
    path: 'careers',
    component: Careers,
    children: [
      { path: '', component: PermanentJobs },
      { path: 'permanent', component: PermanentJobs },
      { path: 'contract', component: ContractJobs },
    ]
  },
  {
    path: 'contactus',
    component: Contactus,
    canDeactivate: [canExitGuard]
  },
  { path: 'users', component: UserList },
  { path: 'userdetails/:id', component: UserDetails },
  { path: 'products', component: ProductList },
  { path: 'productdetails', component: ProductDetails },
  {
    path: 'uploadvideo',
    component: UploadVideo,
    canActivate: [trainerGuard]
  },
  { path: '', component: Home },
  { path: '**', component: Notfound },
];