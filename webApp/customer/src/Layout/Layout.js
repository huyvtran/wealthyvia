import React,{Component}                         from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Header                           from "../blocks/common/Header/Header.js";
import Homepage                                  from "../pages/Homepage/Homepage.js";
import AboutUs                                  from "../pages/AboutUs/AboutUs.js";
import ContactUs                                  from "../pages/ContactUs/ContactUs.js";
import Footer                        from "../blocks/common/Footer/Footer.js";
import ProductPage                               from "../pages/ProductPage/ProductPage.js";
import RiskProfilePage                               from "../pages/RiskProfilePage/RiskProfilePage.js";
import KycForm                               from "../pages/KycForm/KycForm.js";
import BlogViewPage                               from "../pages/BlogViewPage/BlogViewPage.js";
import AllBlogs                               from "../pages/AllBlogs/AllBlogs.js";

/*
import EcommerceHomepage                         from "../pages/EcommerceHomepage/EcommerceHomepage.js";
import EcommerceFooter                           from "../blocks/common/EcommerceFooter/EcommerceFooter.js";
import EcommerceBlogView                         from "../pages/EcommerceBlogView/EcommerceBlogView.js";
import ContactUs                                 from "../pages/ContactUs/ContactUs.js";
import ReturnPolicy                              from "../pages/ReturnPolicy/ReturnPolicy.js";
import CancellationPolicy                        from "../pages/CancellationPolicy/CancellationPolicy.js";
import AboutUs                                   from "../pages/AboutUs/AboutUs.js";
import TermsAndCondition                         from "../pages/TermsAndCondition/TermsAndCondition.js";
import PrivacyPolicy                             from "../pages/PrivacyPolicy/PrivacyPolicy.js";
import ProductDetails                            from "../pages/ProductDetails/ProductDetails.js";
import ProductDetailsEcommerce                   from "../pages/ProductDetailsEcommerce/ProductDetailsEcommerce.js";
import ProductPageEcommerce                      from "../pages/ProductPageEcommerce/ProductPageEcommerce.js";
import AllBlogs                                  from "../pages/AllBlogs/AllBlogs.js";
import AllBlogsGrocery                           from "../pages/AllBlogs/AllBlogsGrocery.js";
import BlogView                                  from "../pages/BlogView/BlogView.js";
import SearchProducts                            from "../pages/SearchProducts/SearchProducts.js";
import ViewCart                                  from "../pages/CartAndPayment/cart.jsx";
import Address                                   from "../pages/address/Address.jsx";
import BillingDetails                            from "../pages/BillingDetails/BillingDetails.js";
import MyOrders                                  from "../blocks/MyOrders/MyOrders.js";
import Useraccountpage                           from "../pages/Useraccountpage/Useraccountpage.js";
import WhistlistPage                             from "../blocks/WhistlistPage/WhistlistPage.js";
import ShipmentTracking                          from "../blocks/ShipmentTracking/ShipmentTracking.js";
import OrderPlaceSuccessfully                    from '../pages/BillingDetails/OrderPlaceSuccessfully.js';
*/
// Section: 1 - SystemSecurity ******************************************************
import Login            from '../systemSecurity/Login.js';
import ConfirmOtp       from '../systemSecurity/ConfirmOtp.js'; 
import ForgotPassword   from '../systemSecurity/ForgotPassword.js';
import ResetPassword    from '../systemSecurity/ResetPassword.js';
import SignUp           from '../systemSecurity/SignUp.js';
import VerifyAccount    from '../systemSecurity/VerifyAccount.js';

const WebLayout = () => (
  <div>
         
              <Route path="/"                         exact strict component={Homepage}  />
              <Route path="/about-us"                         exact strict component={AboutUs}  />
              <Route path="/contact-us"                         exact strict component={ContactUs}  />
              <Route path="/ProductPage"              exact strict component={ProductPage}  />
              <Route path="/RiskProfilePage"              exact strict component={RiskProfilePage}  />
              <Route path="/KycForm"              exact strict component={KycForm}  />
              <Route path="/AllBlogs"              exact strict component={AllBlogs}  />
              <Route path="/BlogViewPage"              exact strict component={BlogViewPage}  />
              <Route path="/ProductPage/:divId"              exact strict component={ProductPage}  />
            {/*  <Route path="/Grocery"          exact strict component={HomePage}  />
              <Route path="/contact-us"               exact strict component={ContactUs}  />
              <Route path="/about-us"                 exact strict component={AboutUs}  />
              <Route path="/ReturnPolicy"             exact strict component={ReturnPolicy}  />
              <Route path="/CancellationPolicy"       exact strict component={CancellationPolicy}  />

              <Route path="/termsandconditions"        exact strict component={TermsAndCondition}  />
              <Route path="/PrivacyPolicy"             exact strict component={PrivacyPolicy}  />
              
              <Route path="/ProductDetails"           exact strict component={ProductDetails}  />
              <Route path="/ProductDetailsEcommerce/:productID"           exact strict component={ProductDetailsEcommerce}  />
              <Route path="/main-site/:categoryID"    exact strict component={ProductPageEcommerce}  />
              <Route path="/Grocery/:categoryID"    exact strict component={ProductPage}  />
              <Route path="/SearchProducts/:categoryName"    exact strict component={SearchProducts}  />
              
              <Route path="/SearchProducts"          exact strict component={SearchProducts}  />
              <Route path="/AllBlogsGrocery"          exact strict component={AllBlogsGrocery}  />
              <Route path="/EcommerceBlogView"        exact strict component={EcommerceBlogView}  />
              <Route path="/AllBlogs"                 exact strict component={AllBlogs}  />
              <Route path="/BlogView"                 exact strict component={BlogView}  />

              <Route path="/confirm-order"                 exact strict component={BillingDetails}  />
              <Route path="/payment/:order_ID"                 exact strict component={OrderPlaceSuccessfully}  />
              <Route path="/wishlist"                 exact strict component={WhistlistPage}  />
              <Route path="/useraccount"                 exact strict component={Useraccountpage}  />


              <Route path="/cart"                 exact strict component={ViewCart}  />
              <Route path="/address"                 exact strict component={Address}  />
              <Route path="/MyOrders"                 exact strict component={MyOrders}  />
              <Route path="/ShipmentTracking"                 exact strict component={ShipmentTracking}  />
              
*/}
              <Route path="/login"          exact strict component={ Login } />
              <Route path="/signup"         exact strict component={ SignUp } />
              <Route path="/forgot-pwd"     exact strict component={ ForgotPassword } />
              <Route path="/reset-pwd"      exact strict component={ ResetPassword } />
              <Route path="/verify-account" exact strict component={ VerifyAccount } />
              <Route path="/confirm-otp/:user_ID"    exact strict component={ ConfirmOtp } />
        </div>
);

 function Layout() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={ WebLayout } />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default Layout;