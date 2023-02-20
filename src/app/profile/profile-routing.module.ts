import { ProfileEditStep3Component } from './profile-edit-step3/profile-edit-step3.component';
import { ProfileEditStep2Component } from './profile-edit-step2/profile-edit-step2.component';
import { ProfileEditStep1Component } from './profile-edit-step1/profile-edit-step1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileContainerComponent } from './profile-container/profile-container.component';


const routes: Routes = [
  {
    path: 'profile-container',
    component: ProfileContainerComponent,
    children: [
      { path: '', redirectTo: 'profile-edit-step1', pathMatch: 'full' },
      {
        path: 'profile-edit-step1',
        component: ProfileEditStep1Component
      },
      {
        path: 'profile-edit-step2',
        component: ProfileEditStep2Component
      },
      {
        path: 'profile-edit-step3',
        component: ProfileEditStep3Component
      }
    ]
  }];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
