import React,{Component}                          from 'react';
import { render }                                 from 'react-dom';
import { BrowserRouter as Router, Route,Switch }  from 'react-router-dom';
import $                                          from "jquery";

import Header                                     from '../common/header/Header.js';
import Footer                                     from '../common/footer/Footer.js'
import Dashboard                                  from '../dashboard/Dashboard.js'
import Leftsidebar                                from '../common/leftSidebar/Leftsidebar.js'
import Rightsidebar                               from '../common/rightSidebar/Rightsidebar.js'

import UMListOfUsers                              from '../userManagement/UM/UMListOfUsers.js';
import EditUserProfile                            from '../userManagement/UM/EditUserProfile.js';
import UMRolesList                                from '../userManagement/Roles/UMRolesList.js';
import CompanySetting                             from '../companysetting/Components/CompanySetting.js';
import ViewTemplates                              from '../NotificationManagement/ViewTemplates.jsx';



//============== Product Management ==============//
import AddNewShopProduct                          from '../../storeAdmin/product/addNewProduct/AddNewShopProduct/AddNewShopProduct.js';
import AddNewProductImages                        from '../../storeAdmin/product/addNewProduct/AddNewProductImages/AddNewProductImages.js';
import CategoryManagement                         from '../../storeAdmin/product/categoryManagement/component/CategoryManagement.js';
import AddNewBulkProduct                          from '../../storeAdmin/product/productBulkUpload/component/ProductBulkUpload.js';
import ProductList                                from '../../StoreManagement/product/productList/component/ProductList.js';
import BulkProductImageUpload                     from '../../StoreManagement/bulkimageUpload/BulkProductImageUpload.js'
import FileWiseProductList                        from '../../StoreManagement/product/fileproductList/component/fileproductList.js';
import AdminOrdersList                            from '../../StoreManagement/orders/component/AdminOrdersList.js';
import BaList                                     from '../../storeAdmin/baManagement/listOfBAs/components/BusinessAssociateList.js';

import AddNewBA                                   from '../../storeAdmin/baManagement/BAOnboarding/basicInfo/basicInfo.js';


import ProductDetails                             from '../../StoreManagement/product/ProductDetails/ProductDetails.js';

//================== Reports ===============//
import Reports                                    from '../../admin/Reports/Reports.js';

import ImageUpload from '../../ImageUpload/ImageUpload.js';


// Section: 1 - SystemSecurity ******************************************************
import Login            from '../systemSecurity/Login.js';
import ConfirmOtp       from '../systemSecurity/ConfirmOtp.js';
import ForgotPassword   from '../systemSecurity/ForgotPassword.js';
import ResetPassword    from '../systemSecurity/ResetPassword.js';
import SignUp           from '../systemSecurity/SignUp.js';
import VerifyAccount    from '../systemSecurity/VerifyAccount.js';

//============ Vendor Management =============
import VendorOnboardingForm   from '../../storeAdmin/vendorManagement/VendorOnboarding/VendorOnboardingForm/VendorOnboardingForm.jsx';
import BasicInfo              from '../../storeAdmin/vendorManagement/VendorOnboarding/basicInfo/BasicInfo.jsx';
import LocationDetails        from '../../storeAdmin/vendorManagement/VendorOnboarding/locationDetails/LocationDetails.jsx';
import ContactDetails         from '../../storeAdmin/vendorManagement/VendorOnboarding/contactDetails/ContactDetails.jsx';
import ListOfAllVendors       from '../../storeAdmin/vendorManagement/listOfVendors/components/ListOfAllVendors.jsx';
import ListOfVendor           from '../../storeAdmin/vendorManagement/listOfVendors/components/ListOfVendor.jsx';
import VendorCategory         from '../../storeAdmin/vendorManagement/MasterData/VendorCategory/VendorCategory.jsx';
import VendorLocationType     from '../../storeAdmin/vendorManagement/MasterData/VendorLocationType/VendorLocationType.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class Layout extends Component{
  
  constructor(props) {
   super(props);
    this.state = {
      loggedIn : false,
    }
  }
   
  componentDidMount(){
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });

    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#headerid').toggleClass('headereffect');
       });
    });
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#dashbordid').toggleClass('dashboardeffect');
      });
    });


    const token = localStorage.getItem("token");
     // console.log("Dashboard Token = ",token);
    if(token!==null){
    // console.log("*********===***********imin ",token);
      this.setState({
        loggedIn : true
      })
    }else{
      // console.log("token is not available");
    }

  }

    logout(){
    var token = localStorage.removeItem("token");
      if(token!==null){
      // console.log("Header Token = ",token);
      this.setState({
        loggedIn : false
      })
      // browserHistory.push("/login");
      // this.props.history.push("/login");
    }
  }



  render(){
    if(this.state.loggedIn===true){
      // console.log('if');
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if( document.getElementById("mySidenav"))
        {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
              document.getElementById("mySidenav").style.top = "0";
            } else {
              document.getElementById("mySidenav").style.top = "50px";
            }

        }
        
      }

    return(
      <div className="App container-fluid">
          <div className="row">
            <div id="headerid" className="headerbackgroundcolor ">
              <Header />
            </div>
            <div className="">
              <div id="dashbordid" className="">
                <Router>
                  <Switch>
                    {/*<Route path="/" component={Dashboard} exact />*/}
                  {/*Admin Routes*/}
                    <Route path="/umlistofusers"        component={UMListOfUsers}   exact />
                    <Route path="/umroleslist"          component={UMRolesList}     exact />
                    <Route path="/edituserprofile/:userID"      component={EditUserProfile} exact />
                    <Route path="/ViewTemplates"        component={ViewTemplates}   exact />
                    <Route path="/companysetting"       component={CompanySetting}  exact />
                 

                   {/* Product Management */}
                    <Route path="/product-details/:productID"                                   exact strict component={ ProductDetails } />
                    <Route path="/add-product"                                                  exact strict component={ AddNewShopProduct } />
                    <Route path="/add-product/:productID"                                       exact strict component={ AddNewShopProduct } />
                    <Route path="/add-product/image/:productID"                                 exact strict component={ AddNewProductImages } />
                    <Route path="/category-management"                                          exact strict component={ CategoryManagement } />
                    <Route path="/category-management/:categoryID"                              exact strict component={ CategoryManagement } />
                    <Route path="/product-upload"                                               exact strict component={ AddNewBulkProduct } />
                    <Route path="/product-list"                                                 exact strict component={ ProductList } />
                    <Route path="/product-image-bulk-upload"                                    exact strict component={ BulkProductImageUpload } />
                    <Route path="/file-wise-product-list"                                       exact strict component={ FileWiseProductList } />
                    <Route path="/image"                                                        exact strict component={ ImageUpload } />
                    
                    {/* Vendor Management */}
                    <Route path="/vendor-onboarding"                                            exact strict component={ BasicInfo } />
                    <Route path="/location-details/:vendor_ID"                                  exact strict component={ LocationDetails } />
                    <Route path="/contact-details/:vendor_ID"                                   exact strict component={ ContactDetails } />
                    <Route path="/vendor-list"                                                  exact strict component={ ListOfVendor } />
                    <Route path="/vendor-category"                                              exact strict component={ VendorCategory } />
                    <Route path="/vendor-location-type"                                                  exact strict component={ VendorLocationType } />

                    { /*Order List*/}
                    <Route path="/orders-list"                                                  exact strict component={ AdminOrdersList } />
                    { /*Ba List*/ }
                    <Route path="/ba-list"                                                      exact strict component={ BaList } />
                    
                    <Route path="/editBA/:BaId"                                                 exact strict component={ AddNewBA } />
                    <Route path="/BA/locationDetails/:locationEdit/:BaId"                       exact strict component={ AddNewBA } />
                    <Route path="/BA/contactDetails/:contactEdit/:BaId"                         exact strict component={ AddNewBA } />
                    
                    <Route path="/addNewBA"                                                     exact strict component={ AddNewBA } />
                    

                    {/*Report*/}
                    <Route path="/report"                                                       exact strict component={ Reports } />
                  </Switch>        
                </Router>
              </div>
            </div>
            <div className="leftsidebarbackgroundcolor">
              <div className="row">
                 <Leftsidebar />
              </div>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-2">
     
            </div>
          </div>
        </div>
    );
    }else{
      console.log('else');
       return(
        <div>
          <Router>
            <Switch>
            
                    <Route path="/dashboard" component={Dashboard} exact />
              <Route path="/"               exact strict component={ Login } />
              <Route path="/login"          exact strict component={ Login } />
              <Route path="/signup"         exact strict component={ SignUp } />
              <Route path="/forgot-pwd"     exact strict component={ ForgotPassword } />
              <Route path="/reset-pwd"      exact strict component={ ResetPassword } />
              <Route path="/verify-account" exact strict component={ VerifyAccount } />
              <Route path="/confirm-otp"    exact strict component={ ConfirmOtp } />
            </Switch>        
          </Router>
        </div>
      );
    }
  
  }
}
export default Layout;