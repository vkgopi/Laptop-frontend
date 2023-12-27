import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrderInfoComponent } from './my-order-info/my-order-info.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';
import { OrderComponent } from './order/order.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistInfoComponent } from './wishlist-info/wishlist-info.component';
import { AboutComponent } from './about/about.component';
import { About1Component } from './about1/about1.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminGetProfileComponent } from './admin-get-profile/admin-get-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { BankPaymentComponent } from './bank-payment/bank-payment.component';
import { ContactComponent } from './contact/contact.component';
import { Contact1Component } from './contact1/contact1.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { GetLaptopByIdComponent } from './get-laptop-by-id/get-laptop-by-id.component';
import { GetLaptopComponent } from './get-laptop/get-laptop.component';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { GooglePayComponent } from './google-pay/google-pay.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { LaptopInfoComponent } from './laptop-info/laptop-info.component';
import { LoginOptionComponent } from './login-option/login-option.component';
import { LoginComponent } from './login/login.component';
import { OrderEmptyComponent } from './order-empty/order-empty.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentConfirmComponent } from './payment-confirm/payment-confirm.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterOptionComponent } from './register-option/register-option.component';
import { RegistrationComponent } from './registration/registration.component';
import { Search1Component } from './search1/search1.component';
import { Search2Component } from './search2/search2.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserReciptComponent } from './user-recipt/user-recipt.component';
import { AdminGetLaptopByIDComponent } from './admin-get-laptop-by-id/admin-get-laptop-by-id.component';

import { ForgetPassword1Component } from './forget-password1/forget-password1.component';
import { AddlaptopComponent } from './addlaptop/addlaptop.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegistrationComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home2',component:Home2Component},
  {path:'profile',component:ProfileComponent},
  {path:'getProfile',component:GetProfileComponent},
  {path:'product',component:LaptopInfoComponent},
  {path:'getProduct',component:GetLaptopComponent},
  {path:'adminHome',component:AdminHomeComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'adminRegister',component:AdminRegisterComponent},
  {path:'registerOption',component:RegisterOptionComponent},
  {path:'loginOption',component:LoginOptionComponent},
  {path:'adminProfile/:id',component:AdminProfileComponent},
  {path:'adminGetProfile',component:AdminGetProfileComponent},
  {path:'getProductById/:id',component:GetLaptopByIdComponent},
  {path:'myOrders',component:OrderComponent},
  {path:'orderEmpty',component:OrderEmptyComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'updateProfile/:id',component:UpdateProfileComponent},
  {path:'deliveries',component:DeliveryComponent},
  {path:'deliveryInfo/:id',component:DeliveryInfoComponent},
  {path:'adminContact',component:AdminContactComponent},
  {path:'adminAbout',component:AdminAboutComponent},
  {path:'myOrdersInfo/:id',component:MyOrderInfoComponent},
  {path:'adminGetProductById/:id',component:AdminGetLaptopByIDComponent},
  {path:'about1',component:About1Component},
  {path:'contact1',component:Contact1Component},
  {path:'updateProduct/:id',component:UpdateLaptopComponent},
  {path:'search1/:name',component:Search1Component},
  {path:'search2/:name',component:Search2Component},
  {path:'adminSearch/:name',component:AdminSearchComponent},
  {path:'payment/:id',component:PaymentComponent},
  {path:'paymentMethod/:id',component:PaymentMethodComponent},
  {path:'buyProduct/:id',component:OrderComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'wishlistInfo/:id',component:WishlistInfoComponent},
  {path:'paymentConfirm',component:PaymentConfirmComponent},
  {path:'bankPayment/:id',component:BankPaymentComponent},
  {path:'googlePay/:id',component:GooglePayComponent},
  {path:'userRecipt/:id',component:UserReciptComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'forgetPassword2',component:ForgetPassword1Component},
  {path:'addlaptop',component:AddlaptopComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
