import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { About1Component } from './about1/about1.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminGetLaptopByIDComponent } from './admin-get-laptop-by-id/admin-get-laptop-by-id.component';
import { AdminGetProfileComponent } from './admin-get-profile/admin-get-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { BankPaymentComponent } from './bank-payment/bank-payment.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { Contact1Component } from './contact1/contact1.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistInfoComponent } from './wishlist-info/wishlist-info.component';
import { FooterComponent } from './footer/footer.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ForgetPassword1Component } from './forget-password1/forget-password1.component';
import { GetLaptopComponent } from './get-laptop/get-laptop.component';
import { GetLaptopByIdComponent } from './get-laptop-by-id/get-laptop-by-id.component';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { GooglePayComponent } from './google-pay/google-pay.component';
import { HeaderComponent } from './header/header.component';
import { Home2Component } from './home2/home2.component';
import { LoginOptionComponent } from './login-option/login-option.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyOrderInfoComponent } from './my-order-info/my-order-info.component';
import { OrderEmptyComponent } from './order-empty/order-empty.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentConfirmComponent } from './payment-confirm/payment-confirm.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { LaptopInfoComponent } from './laptop-info/laptop-info.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterOptionComponent } from './register-option/register-option.component';
import { RegistrationComponent } from './registration/registration.component';
import { Search1Component } from './search1/search1.component';
import { Search2Component } from './search2/search2.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserReciptComponent } from './user-recipt/user-recipt.component';
import { AddlaptopComponent } from './addlaptop/addlaptop.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    About1Component,
    AdminAboutComponent,
    AdminContactComponent,
    AdminGetLaptopByIDComponent,
    AdminGetProfileComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    AdminProfileComponent,
    AdminRegisterComponent,
    AdminSearchComponent,
    BankPaymentComponent,
    OrderComponent,
    ContactComponent,
    Contact1Component,
    DeliveryComponent,
    DeliveryInfoComponent,
    WishlistComponent,
    WishlistInfoComponent,
    FooterComponent,
    ForgetPasswordComponent,
    ForgetPassword1Component,
    GetLaptopComponent,
    GetLaptopByIdComponent,
    GetProfileComponent,
    GooglePayComponent,
    HeaderComponent,
    Home2Component,
    LoginOptionComponent,
    MyOrdersComponent,
    MyOrderInfoComponent,
    OrderEmptyComponent,
    PageNotFoundComponent,
    PaymentComponent,
    PaymentConfirmComponent,
    PaymentMethodComponent,
    LaptopInfoComponent,
    ProfileComponent,
    RegisterOptionComponent,
    RegistrationComponent,
    Search1Component,
    Search2Component,
    UpdateLaptopComponent,
    UpdateProfileComponent,
    UserOrdersComponent,
    UserReciptComponent,
    AddlaptopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
