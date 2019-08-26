import React, { Component }   from 'react';
import $                      from 'jquery';
import axios                  from 'axios';
import ReactTable             from "react-table";
import moment                 from "moment";
// import IAssureTable           from "../../IAssureTable/IAssureTable.jsx";
import swal                   from 'sweetalert';
import _                      from 'underscore';
import '../css/AdminOrdersList.css';

axios.defaults.baseURL = 'http://gangaexpressapi.iassureit.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

class AdminOrdersList extends Component{
    constructor(props) {
        super(props);

        if(!this.props.loading){
            this.state = {
                "orderData":[],
                // "notificationData" :Meteor.subscribe("notificationTemplate"),
            };
        } else{
            this.state = {
                "orderData":[],
            };
        }
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.getOrders();
        this.getBA();
           
    }
    getOrders(){
      axios.get("/api/orders/get/list")
            .then((response)=>{
              this.setState({
                  orderData : response.data
              })
            })
            .catch((error)=>{
                console.log('error', error);
            })
    }
    getBA(){
      axios.get("/api/businessassociates/get/list")
            .then((response)=>{
              this.setState({
                  baList : response.data
              })
            })
            .catch((error)=>{
                console.log('error', error);
            })  
    }
    componentWillReceiveProps(nextProps){
      console.log(nextProps);
        if(nextProps){
            this.setState({
                "orderData": nextProps.data,
            });
        }
    }
    componentWillUnmount() {
        $("body").find("script[src='/js/adminLte.js']").remove();
        if(this.basicPageTracker)
          this.basicPageTracker.stop();
    }

    changeOrderStatus(event){
        event.preventDefault();
        var status = $(event.currentTarget).attr('data-status');
        console.log(status);
        var id = $(event.currentTarget).attr('data-id');
        
        if(status != "Dispatch"){
            if(status!="Done"){
                swal({
                    title: 'Do you want to change status to '+status+ "?",
                    text: 'Do you want to change status to '+status+ "?",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                  }).then((obj)=> {
                    if(obj==true){
                        var formValues = {
                          "orderID" :  id,  
                          "status"  :  status,
                          "userid"  :  localStorage.getItem('admin_ID')
                        }
                        axios.patch('/api/orders/patch/updateDeliveryStatus', formValues)
                        .then((response)=>{
                          this.getOrders();
                          console.log('response', response);
                          swal({
                            title : response.data.message,
                            text  : response.data.message,
                          });
                        })
                        .catch((error)=>{
                          console.log('error', error);
                        })
                    }
                  });
            }
        }   
    }

    changeToPreviousStatus(event){
        event.preventDefault();
        var status = $(event.currentTarget).attr('data-status');     
        var id = $(event.currentTarget).attr('data-id');
        var currentstatus = $(event.currentTarget).attr('data-currentstatus'); 
        
        if(status!="Nothing"){
            swal({
                title: 'Are you sure you want to change status to '+status+ " ?",
                text: 'Are you sure you want to change status to '+status+ " ?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
              }).then((obj)=> {
                if(obj==true){
                    // Meteor.call("changeAdminOrdersToPreviousStatus",id, currentstatus, (error, result)=>{
                    
                    // });
                    var formValues = {
                          "orderID" :  id,  
                          "status"  :  status,
                          "userid"  :  localStorage.getItem('admin_ID')
                        }
                        axios.patch('/api/orders/patch/updateDeliveryStatus', formValues)
                        .then((response)=>{
                          console.log('response', response);
                          this.getOrders();
                          swal({
                            title : response.data.message,
                            text  : response.data.message,
                          });
                        })
                        .catch((error)=>{
                          console.log('error', error);
                        })
                }
              });          
        }
        
    }

    addDispatchDetails(event){
        event.preventDefault();
        
        var id = $(event.currentTarget).attr('data-id');
        var businessAssociate = $('#businessAssociate').val();
        var expDeliveryDate = $('.expDeliveryDate').val();
        console.log(expDeliveryDate);
        if(businessAssociate != '' ){
          var formValues = {
                          "orderID"             :  id,
                          "userid"              :  localStorage.getItem('admin_ID'),
                          "businessAssociateId" : businessAssociate
                          }
          console.log(formValues);

          axios.patch('/api/orders/patch/dispatchOrder', formValues)
          .then((response)=>{
            console.log('response', response);
            swal({
              title : response.data.message,
              text  : response.data.message,
            });
             if(response.status == 200){
                //$('#dispatchDetails'+id).modal('hide');
                this.getOrders();
                    swal({
                        title: 'Order is dispatched Successflly',
                        type: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                    $('#businessAssociate').val('');
                    $('.expDeliveryDate').val('');
                }
          })
          .catch((error)=>{
            console.log('error', error);
          })
            
        }else{
            swal({
                title: 'Please fill all fields',
                text: "Please fill all fields",
                type: 'error',
                showConfirmButton: false,
                timer: 1500
            });
        } 
  
    }
    
    closeModal(event){
        // console.log('event',event);
        event.preventDefault();
        $('.dispatchCompanyName').val('');
        $('.deliveryPersonName').val('');
        $('.deliveryPersonContact').val('');
    }
    render(){
        return(         
            <div className="container-fluid">
              <div className="row">
                <div className="formWrapper">
                  <section className="content">
                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 pageContent">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 titleaddcontact">
                          <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 contactdeilsmg pageHeader">
                            Shipment Tracking                      
                          </div>
                          <hr className="hr-head container-fluid row"/>
                        </div>
                        <div className="row">
                          <div className="col-md-12">

                              <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 marginTop">
                                   <div className="admin-orders-SubTitleRow  row">
                                      <div className="col-lg-12">
                                          <div className="admin-orders-listofColors">
                                          
                                              <span className="">
                                                  <span className="admin-orders-stat-NewOrder comm-status-of-order"></span>
                                                  New Order
                                              </span>
                                              <span className="">
                                                  <span className="admin-orders-stat-Verified comm-status-of-order"></span>
                                                  Verified
                                              </span>
                                              <span className="">
                                                  <span className="admin-orders-stat-Packed comm-status-of-order"></span>
                                                  Packed
                                              </span>
                                              <span className="">
                                                  <span className="admin-orders-stat-Inspection comm-status-of-order"></span>
                                                  Inspection
                                              </span>
                                              <span className="">
                                                  <span className="admin-orders-stat-OrderVerified comm-status-of-order"></span>
                                                  Order Verified
                                              </span>
                                              <span className="">
                                                  <span className="admin-orders-stat-Dispatched comm-status-of-order"></span>
                                                  Dispatch
                                              </span>
                                              <span className="">
                                                  <span className="admin-orders-stat-Delivered comm-status-of-order"></span>
                                                  Delivered
                                              </span>
                                              <span className="">
                                                  <span className="admin-orders-stat-Deliveredpaid comm-status-of-order"></span>
                                                  Delivered & Paid
                                              </span>
                                             
                                          </div>
                                      </div>
                                  </div>
                                  <div className="admin-orders-SubTitleTable marginTop11">
                                      <table className="table iAssureITtable-bordered table-striped table-hover">
                                          <thead className="tempTableHeader">
                                              <tr>
                                                  <th className="col-lg-1 whiteSpace">Order ID</th>
                                                  <th className="col-lg-2">Customer</th>
                                                  <th className="col-lg-2">No. of Products</th>
                                                  <th className="col-lg-1">Quantity</th>
                                                  <th className="col-lg-1">Total Price</th>
                                                  <th className="col-lg-1 whiteSpace">Order Date</th>
                                                  <th className="col-lg-2">Status</th>
                                                  <th className="col-lg-2">Action</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              {
                                                  this.state.orderData.map((listData, index)=>{
                                                      return(
                                                          <tr key={index}>
                                                              <td className="col-lg-1">
                                                                  {listData._id}
                                                              </td>
                                                              <td className="col-lg-2">
                                                                  {listData.userFullName }
                                                              </td>
                                                             
                                                              <td className="col-lg-2 textAlignRight">
                                                                  {listData.productLength }
                                                              </td>
                                                              <td className="col-lg-1 textAlignRight">
                                                                  {listData.totalQuantity }
                                                              </td>
                                                              <td className="col-lg-1 textAlignRight">
                                                                 {/* R &nbsp;{listData.totalAmount } */}
                                                                 {(parseInt(listData.totalAmount)).toFixed(2)}
                                                              </td>
                                                              <td className="col-lg-1 textAlignCenter">
                                                                  { moment(listData.createdAt).format("MMM Do YY") }
                                                                  
                                                              </td>
                                                              <td className="col-lg-2">
                                                                  <div className="admin-orders-stat1">
                                                                      {listData.status}
                                                                  </div>
                                                                  <div className={ 
                                                                        listData.deliveryStatus[0].status == "New Order" ?
                                                                         "admin-orders-stat-NewOrder" : ( listData.deliveryStatus[0].status == "Packed" ? "admin-orders-stat-Packed" : 
                                                                            listData.deliveryStatus[0].status == "Verified"    ? "admin-orders-stat-Verified"   : 
                                                                            listData.deliveryStatus[0].status == "Inspection"  ? "admin-orders-stat-Inspection" :
                                                                            listData.deliveryStatus[0].status == "Order Verified"  ? "admin-orders-stat-OrderVerified" :
                                                                            listData.deliveryStatus[0].status == "Dispatch"    ? "admin-orders-stat-Dispatched" :
                                                                            listData.deliveryStatus[0].status == "Delivered"    ? "admin-orders-stat-Delivered" :
                                                                            listData.deliveryStatus[0].status == "Delivered & Paid"   ? "admin-orders-stat-Deliveredpaid" : ""
                                                                                ) 
                                                                                                                                    
                                                                      }>
                                                                      {
                                                                         listData.deliveryStatus[0].status
                                                                      }
                                                                  </div>
                                                                  <div className="dispatchdetails col-lg-12">
                                                                                                                                                           
                                                                   <div className="modal fade col-lg-12 col-md-12 col-sm-12 col-xs-12" id={"dispatchDetails"+listData._id} role="dialog">
                                                                          <div className="modal-dialog adminModal addressModal-dialog">
                                                                          <div className="modal-content adminModal-content col-lg-12 col-md-12  col-sm-12 col-xs-12 noPadding">
                                                                              <div className="modal-header adminModal-header col-lg-12 col-md-12 col-sm-12 col-xs-12">                                                                              
                                                                              <h4 className="WightFont textAlignCenter col-lg-11 col-md-11 col-sm-11 col-xs-11">DISPATCH ORDER</h4>
                                                                              <div className="adminCloseCircleDiv pull-right  col-lg-1 col-md-1 col-sm-1 col-xs-12 NOpadding-left NOpadding-right">
                                                                                <button type="button" className="adminCloseButton" data-dismiss="modal" onClick={this.closeModal.bind(this)} data-target={"openSubCatgModal"}>&times;</button>
                                                                              </div>
                                                                              </div>
                                                                              <div className="modal-body addressModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
                                                                              <form className="dispatchForm" onSubmit={this.addDispatchDetails.bind(this)} id={listData._id} data-id={listData._id}>
                                                                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                  
                                                                                  <div className="row inputrow">
                                                                                      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                                                      <div className="form-group">
                                                                                          <br/>
                                                                                          <label>Business Associate</label><span className="astrick">*</span>
                                                                                          <div className="input-group">
                                                                                          <span className="input-group-addon" id="basic-addon1"><i className="fa fa-gg" aria-hidden="true"></i></span>
                                                                                            <select className="form-control" id="businessAssociate">
                                                                                            { this.state.baList && this.state.baList.length > 0 ?
                                                                                                this.state.baList.map( (data, index)=>{
                                                                                                    return (
                                                                                                      <option key={index} value={data.userID}>{data.companyName}{ data.locationDetails.length > 0 ?  ' ( '+ data.locationDetails[0].area +''+'-'+  data.locationDetails[0].pincode +' )' : ''}</option>
                                                                                                    );
                                                                                                  })
                                                                                                  :
                                                                                                  null
                                                                                            }
                                                                                            </select>
                                                                                          
                                                                                          </div>
                                                                                      </div>
                                                                                      </div>
                                                                                  </div>
                                                                                  <div className="row inputrow">
                                                                                      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                                                      <div className="form-group">
                                                                                          <label>Expected Delivery Date</label><span className="astrick">*</span>
                                                                                          <input name="expDeliveryDate" type="date" className="expDeliveryDate form-control" placeholder="" aria-label="Brand" aria-describedby="basic-addon1" ref="expDeliveryDate"  />
                                                                                      </div>
                                                                                      </div>
                                                                                  </div>
                                                                                  </div>
                                                                                  <div className="modal-footer adminModal-footer col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                                                        <button type="button" className="btn adminCancel-btn col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1" onClick={this.closeModal.bind(this)} data-dismiss="modal">CANCEL</button>
                                                                                      </div>
                                                                                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                                                          <input  type="submit" className="btn adminFinish-btn col-lg-6 col-lg-offset-6 col-md-6 col-md-offset-6 col-sm-8 col-sm-offset-3 col-xs-10 col-xs-offset-1" value="DISPATCH" />
                                                                                      </div>
                                                                                  </div>
                                                                              </form>
                                                                              </div>
                                                                          </div>
                                                                          
                                                                          </div>
                                                                      </div>
                                                                  
                                                                  </div>

                                                              </td>
                                                              <td className="col-lg-2 textAlignCenter">

                                                              {listData.deliveryStatus[0].status == "Dispatch" || listData.deliveryStatus[0].status == "Delivered & Paid" || listData.deliveryStatus[0].status == "New Order"? 
                                                                      ""
                                                                      :
                                                                  <div className="admin-order-view"  onClick={this.changeToPreviousStatus.bind(this)} data-id={listData._id} data-status={
                                                                              listData.deliveryStatus[0].status == "New Order"         ? "Nothing" :  
                                                                              listData.deliveryStatus[0].status == "Verified"          ? "New Order" :  
                                                                              listData.deliveryStatus[0].status == "Packed"            ? "Verified" :  
                                                                              listData.deliveryStatus[0].status == "Inspection"        ? "Packed" :  
                                                                              listData.deliveryStatus[0].status == "Order Verified"    ? "Inspection" :  
                                                                              listData.deliveryStatus[0].status == "Dispatch"          ? "Order Verified" :  
                                                                              listData.deliveryStatus[0].status == "Delivered"         ? "Dispatch" :
                                                                              listData.deliveryStatus[0].status == "Delivered & Paid"  ? "Delivered" : "Nothing"
                                                                          } 
                                                                          title={
                                                                              listData.deliveryStatus[0].status == "New Order"         ? "" :  
                                                                              listData.deliveryStatus[0].status == "Verified"          ? "Change Status to New Order" :  
                                                                              listData.deliveryStatus[0].status == "Packed"            ? "Change Status to Verified" :  
                                                                              listData.deliveryStatus[0].status == "Inspection"        ? "Change Status to Packed" :  
                                                                              listData.deliveryStatus[0].status == "Order Verified"    ? "Change Status to Inspection" :  
                                                                              listData.deliveryStatus[0].status == "Dispatch"          ? "Change Status to Order Verified" :  
                                                                              listData.deliveryStatus[0].status == "Delivered"         ? "Change Status to Dispatch" : 
                                                                              listData.deliveryStatus[0].status == "Delivered & Paid"  ? "Delivered" : ""
                                                                          } 
                                                                          data-currentstatus={
                                                                              listData.deliveryStatus[0].status == "New Order"          ? listData.deliveryStatus[0].status :  
                                                                              listData.deliveryStatus[0].status == "Verified"           ? listData.deliveryStatus[0].status :  
                                                                              listData.deliveryStatus[0].status == "Packed"             ? listData.deliveryStatus[0].status :  
                                                                              listData.deliveryStatus[0].status == "Inspection"         ? listData.deliveryStatus[0].status :  
                                                                              listData.deliveryStatus[0].status == "Order Verified"     ? listData.deliveryStatus[0].status :  
                                                                              listData.deliveryStatus[0].status == "Dispatch"           ? listData.deliveryStatus[0].status :  
                                                                              listData.deliveryStatus[0].status == "Delivered"          ? listData.deliveryStatus[0].status : 
                                                                              listData.deliveryStatus[0].status == "Delivered & Paid"   ? listData.deliveryStatus[0].status : ""
                                                                          }
                                                                          >
                                                                      <i className="fa fa-undo" aria-hidden="true"></i>
                                                                  </div>
                                                              }

                                                                  <a href={"/orderPlaced/"+listData._id} target="_blank" title="View Invoice" className="admin-order-view">
                                                                      <i className="fa fa-eye" aria-hidden="true"></i>
                                                                  </a>    

                                                                  {listData.deliveryStatus[0].status == "Dispatch" || listData.deliveryStatus[0].status == "Delivered & Paid" ? 
                                                                      ""
                                                                      :
                                                                      <div className="admin-order-changeStatus " onClick={this.changeOrderStatus.bind(this)} data-id={listData._id} data-status={
                                                                              listData.deliveryStatus[0].status == "New Order"         ? "Verified" :  
                                                                              listData.deliveryStatus[0].status == "Verified"          ? "Packed" :  
                                                                              listData.deliveryStatus[0].status == "Packed"            ? "Inspection" :  
                                                                              listData.deliveryStatus[0].status == "Inspection"        ? "Order Verified" :  
                                                                              listData.deliveryStatus[0].status == "Order Verified"    ? "Dispatch" :  
                                                                              listData.deliveryStatus[0].status == "Dispatch"          ? "Delivered" :  
                                                                              listData.deliveryStatus[0].status == "Delivered"         ? "Delivered & Paid" :
                                                                              listData.deliveryStatus[0].status == "Delivered & Paid"  ? "Done" : "Done"
                                                                          } 
                                                                          title={
                                                                              listData.deliveryStatus[0].status == "New Order"          ? "Change Status to Verified" :  
                                                                              listData.deliveryStatus[0].status == "Verified"           ? "Change Status to Packed" :  
                                                                              listData.deliveryStatus[0].status == "Packed"             ? "Change Status to Inspection" :  
                                                                              listData.deliveryStatus[0].status == "Inspection"         ? "Change Status to Order Verified" :  
                                                                              listData.deliveryStatus[0].status == "Order Verified"     ? "Change Status to Dispatch" :  
                                                                              listData.deliveryStatus[0].status == "Dispatch"           ? "Change Status to Delivered" :  
                                                                              listData.deliveryStatus[0].status == "Delivered"          ? "Change Status to Delivered & Paid" :  
                                                                              listData.deliveryStatus[0].status == "Delivered & Paid"   ? "Done" : "Done"
                                                                          }
                                                                          data-target={
                                                                              listData.deliveryStatus[0].status == "New Order"         ? "" :  
                                                                              listData.deliveryStatus[0].status == "Verified"          ? "" :  
                                                                              listData.deliveryStatus[0].status == "Packed"            ? "" :  
                                                                              listData.deliveryStatus[0].status == "Inspection"        ? "" :  
                                                                              listData.deliveryStatus[0].status == "Order Verified"    ? "#dispatchDetails"+listData._id :  
                                                                              listData.deliveryStatus[0].status == "Dispatch"          ? "" :  
                                                                              listData.deliveryStatus[0].status == "Delivered"         ? "" :  
                                                                              listData.deliveryStatus[0].status == "Delivered & Paid"  ? "" : ""
                                                                          } 
                                                                          data-toggle="modal"
                                                                          >
                                                                          <i className={  
                                                                         listData.deliveryStatus[0].status == "New Order"          ? "fa fa-product-hunt admin-orders-stat-NewOrdericon" :  
                                                                         listData.deliveryStatus[0].status == "Verified"           ? "fa fa-check-square admin-orders-stat-Verifiedicon" :  
                                                                         listData.deliveryStatus[0].status == "Packed"             ? "fa fa-archive admin-orders-stat-Packedicon" :  
                                                                         listData.deliveryStatus[0].status == "Inspection"         ? "fa fa-info-circle admin-orders-stat-Inspectionicon" :  
                                                                         listData.deliveryStatus[0].status == "Order Verified"     ? "fa fa-angellist admin-orders-stat-OrderVerifiedicon" :  
                                                                         listData.deliveryStatus[0].status == "Dispatch"           ? "fa fa-truck admin-orders-stat-Dispatchedicon" :  
                                                                         listData.deliveryStatus[0].status == "Delivered"          ? "fa fa-check-circle admin-orders-stat-Deliveredicon" :  
                                                                         listData.deliveryStatus[0].status == "Delivered & Paid"   ? "fa fa-check-circle" : ""
                                                                      }
                                                                         aria-hidden="true"></i>
                                                                      </div>
                                                                  }


                                                                  
                                                              </td>
                                                          </tr>
                                                      );
                                                  })
                                              }


                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                          </div>
                      </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div> 
        );
    }
}

export default AdminOrdersList
