import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // { path: '', redirectTo: 'unregistered/home', pathMatch: 'full' },
  // { path: 'home-glide', component: HomeGlideSliderComponent },
  // { path: 'unregistered', component: UnregisteredComponent,
  //   children: [
  //     { path: 'home', component: HomeComponent },
  //     { path: 'benefits', component: MyBenefitsComponent },
  //     { path: 'benefits/:cardName', component: MyBenefitsComponent },
  //     { path: 'rewards', component: MyRewardsComponent },
  //     { path: 'login', component: LogInComponent },
  //     { path: 'signup-one', component: SignUpStepOneComponent },
  //     { path: 'signup-two', component: SignUpStepTwoComponent },
  //     { path: 'assistance', component: AssistanceComponent },
  //   ]
  // },
  // { path: 'registered', component: RegisteredComponent,
  //   children: [
  //     { path: 'home', component: HomeRegisteredComponent },
  //     { path: 'benefits', component: MyBenefitsComponent },
  //     { path: 'benefits/:cardName', component: MyBenefitsComponent },
  //     { path: 'rewards', component: MyRewardsComponent },
  //     { path: 'welcome', component: WelcomeComponent },
  //     { path: 'points', component: MyPointsComponent },
  //     { path: 'checkout-two', component: ProceedToCheckoutStepTwoComponent },
  //     { path: 'checkout-three', component: ProceedToCheckoutStepThreeComponent },
  //     { path: 'checkout-four', component: ProceedToCheckoutStepFourComponent },
  //     { path: 'cart', component: CartComponent },
  //     { path: 'assistance', component: AssistanceComponent },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
