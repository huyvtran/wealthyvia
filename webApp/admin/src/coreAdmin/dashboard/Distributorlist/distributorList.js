import React, {Component} from 'react';
// import "./distributorList.css";

import Axios  from 'axios';
import Swal   from 'sweetalert2';
import moment from 'moment';
import $      from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class distributerList extends Component{
  constructor(props){
  	super();
     this.state  ={
        DistributorData : [],
      }
  }
  componentDidMount(){
    this.getDistributorFormData();      
  }
  
  handleChange(event){
    var name = event.currentTarget.name;
    this.setState({ [name] : event.currentTarget.value });
  }

  getDistributorFormData(){
    Axios.get("api/distributormaster/get/list")
       .then((response)=>{
         if(response.data){
          this.setState({
             DistributorData : response.data,
           });
        console.log("response.data.DistributorData = ",response.data);
        }
       })
       .catch((error)=>{
        console.log("Error during get Data = ", error);
        Swal.fire("Oops...","Something went wrong! <br/>"+error, "error");
       });    
  }


  setDistributorstatus(event){   
    event.preventDefault(); 
    var id = event.currentTarget.id;
    var firstname = $(event.currentTarget).attr('data-firstname');
    var lastname = $(event.currentTarget).attr('data-lastname');
    var email = $(event.currentTarget).attr('data-email');
    var phone = $(event.currentTarget).attr('data-phone');
    var idnstatusarray = id.split("-");
    var id = idnstatusarray[0];
    var status = idnstatusarray[1];
      console.log("status",status);
      console.log("firstname", firstname);
    
    var formValues = {
      id: id,
      status: status
    }

   Axios
      .patch("api/distributormaster/set/status",formValues)
       .then((response)=>{
          console.log("status .data = ",response.data);
         if(response.data){
          Swal.fire("Distributer Status updated");
          this.getDistributorFormData();      
        }
                
                      
               
        if(status === "Active" ){
            var auth={
              fullName      : firstname + " "+ lastname,
              firstName     : firstname,
              lastName      : lastname,
              email         : email,
              mobNumber     : phone,
              pwd           : "Welcome@123",
              role          : 'users',
              status        : 'Active',
          }
          console.log("auth",auth);
          console.log("auth",auth.role);
          Axios.post("/api/users/post/signup/user",auth)
         .then((res) => {
              console.log('sendDataToUser in result==>>>', res.data);

          Axios.get("/api/users/get/list/role/admin/1")
            .then((adminusers) => {
              console.log('admin data', adminusers.data);
              var adminemaillist = [];
              var admindata = adminusers.data;
              if(admindata && admindata.length > 0){
                for(let i = 0 ; i < admindata.length ; i++){
                  adminemaillist.push(admindata[i].email);
                }
              }
              console.log("admin email list", adminemaillist);
              const formValues2 = {
                "emaillist"     : adminemaillist ,
                "subject"       : "A Distributor Profile has been Approved!",
                "text"          : "", 
                "mail"          : 'Dear Admin,' + '<br/>'+
                                  'You have successfully approved a distributor profile on Wealthyvia! Now the distributor can login to the system & use the Wealthyvia services. Following are the details of the Distributor:'+                          
                                  "<br/>"+
                                  "Name: " + firstname + " "+ lastname + "<br/>" +
                                  "Email:  " + email + "<br/>" +
                                  "Contact:  " + phone + "<br/>" +
                                  "<br/><br/> " +
                                  "Regards<br/> " +
                                  "Team Wealthyvia. " ,
                                  

              };
              console.log("notification",formValues2); 
              
                Axios
                .post('/send-email-admin',formValues2)
                .then((res)=>{
                          if(res.status === 200){
                            console.log("Mail Sent TO ADMIN successfully!")
                          }
                        })
                        .catch((error)=>{
                          console.log("error = ", error);
                          
                        });

              const formValues1 = {
                "email"         : email ,
                "subject"       : "Your Distributor Profile has been Approved!",
                "text"          : "", 
                "mail"          : 'Dear ' + firstname + ' '+lastname+', <br/><br/>'+                          
                                  "Congratulations! Your distributor profile has been approved on Wealthyvia! Now you can login to the system & use the Wealthyvia services. Following are your login credentials: <br/> " + 
                                  "Email: " + email +
                                  "<br/>Default Password: " + "Welcome@123" +
                                  "<br/> <br/> " + 
                                  "Hope you enjoy being a Partner of Wealthyvia! " + 
                                  "<br/><br/> " +
                                  "Regards<br/> " +
                                  "Team Wealthyvia. " ,

              };
              console.log("notification",formValues1); 
              
                Axios
                .post('/send-email',formValues1)
                .then((res)=>{
                           if(res.status === 200){
                             Swal("Thank you for contacting us. We will get back to you shortly.")
                            }
                        })
                        .catch((error)=>{
                          console.log("error = ", error);
                          
                        });        

              
          })
          .catch((error) => { console.log('user error: ',error)})

              if(status === 'Active'){
                 Swal.fire(
                'Congrats!',
                'Distributor information approved successfully!',
                'Login credentials have been created & email has been sent to the Distributor.',
                'success'
              );
              }
          })
          .catch((error) => { console.log('user error: ',error)})
          // console.log("Distributer Master Data inserted successfully!", response.data);
        }
        else if(status === "Rejected" ){
          console.log("reject");
          Axios.get("/api/users/get/list/role/admin/1")
            .then((adminusers) => {
              console.log('admin data', adminusers.data);
              var adminemaillist = [];
              var admindata = adminusers.data;
              if(admindata && admindata.length > 0){
                for(let i = 0 ; i < admindata.length ; i++){
                  adminemaillist.push(admindata[i].email);
                }
              }
              console.log("admin email list", adminemaillist);
              const formValues2 = {
                "emaillist"     : adminemaillist ,
                "subject"       : "A Distributor Profile has been Rejected",
                "text"          : "", 
                "mail"          : 'Dear Admin,' + '<br/>'+
                                  'A distributor profile has been rejected on Wealthyvia. <br/>'+  
                                  'Following are the details of the Distributor: <br/>' +                      
                                  "Name: " + firstname + " "+ lastname + "<br/>" +
                                  "Email:  " + email + "<br/>" +
                                  "Contact:  " + phone + "<br/>" +
                                  "<br/><br/> " +
                                  "Regards<br/> " +
                                  "Team Wealthyvia. " ,
                                  

              };
              console.log("notification",formValues2); 
              
                Axios
                .post('/send-email-admin',formValues2)
                .then((res)=>{
                          if(res.status === 200){
                            console.log("Mail Sent TO ADMIN successfully!")
                          }
                        })
                        .catch((error)=>{
                          console.log("error = ", error);
                          
                        });

              const formValues1 = {
                "email"         : email ,
                "subject"       : "Your Distributor Profile has been Rejected",
                "text"          : "", 
                "mail"          : 'Dear ' + firstname + ' '+lastname+', <br/><br/>'+                          
                                  "Your distributor profile has been rejected on Wealthyvia. Please contact Admin for further details.<br/> <br/> " + 
                                  "<br/><br/> " +
                                  "Regards<br/> " +
                                  "Team Wealthyvia. " ,

              };
              console.log("notification",formValues1); 
              
                Axios
                .post('/send-email',formValues1)
                .then((res)=>{
                           if(res.status === 200){
                             Swal("Thank you for contacting us. We will get back to you shortly.")
                            }
                        })
                        .catch((error)=>{
                          console.log("error = ", error);
                          
                        });  
            })
          .catch((error) => { console.log('user error: ',error)})
                  
          Swal.fire('Distributor information rejected successfully!');
        }
        else{   
                Swal.fire('Oops!','Distributor information rejected successfully!');
              }
    })

       .catch((error)=>{
        console.log("Error during get Status Data = ", error);
        Swal.fire("Oops...","Something went wrong! <br/>"+error, "error");
       });    
  }



  deleteDistributor(event){
    event.preventDefault(); 
    var disid = event.currentTarget.id.substr(2);
    console.log("disid = ",disid);

    Swal.fire({
      title: 'Are you sure, you want to Delete this Data?',
      text: 'You will not be able to recover this record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',     
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Axios.delete("api/distributormaster/delete/"+disid)
          .then((data)=>{
            this.getDistributorFormData();
              Swal.fire(
                'Deleted!',
                'Distributor Record has been deleted successfully',
                'success'
              )
          })
          .catch((err)=>{
            console.log("error while deleting employee = ",err);
              Swal.fire(
                'Some Error Occured!',
                ''+err,
                'error'
              )                     
          });


      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Distributor Record is NOT Deleted :)',
          'error'
        )
      }
    })    
  }


  render(){
    console.log("Distributor Data",this.state.DistributorData)
  	return(

  	   <div className="row">
       <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12  mt70 page">
    		  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 textAlignCenter">
              <h2>Distributor List</h2>
          <hr/>
          </div>			
		      <br/>
       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Sr #</th>
                <th>Distributor Name</th>
                <th>Date Of Application</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>GST Number</th>
                <th>Actions</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
          {
              this.state.DistributorData && this.state.DistributorData.length > 0
              ?
              this.state.DistributorData.map((DistributorData,index)=>{
              return(
              <tr key={index}>
              {console.log("address",DistributorData.address)}
                <td>{index+1}</td>
                <td>{DistributorData.firstname}  {DistributorData.lastname}</td>
                <td>{moment(DistributorData.currentDate).format("Do MMM YYYY")}</td>
                <td>{DistributorData.phone}</td>
                <td>{DistributorData.email}</td>
                <td>{DistributorData.address ? DistributorData.address.adressLine : null}</td>
                <td>{DistributorData.gst}</td>
                <td> 
                  <a href={"/distributor-profile-view/"+ DistributorData._id }><i id={"u-"+DistributorData._id} className="fa fa-user fontSize" title="View Distributor Profile"></i></a> &nbsp;&nbsp;
                  <a href={"/distributorEditForm/"+ DistributorData._id} ><i id={"e-"+DistributorData._id} className="fa fa-edit fontSize" title="Click to Edit"> </i> </a> &nbsp;&nbsp;
                  <a><i id={"d-"+DistributorData._id} className="fa fa-trash fontSize" title="Click to Delete" onClick={this.deleteDistributor.bind(this)}> </i></a>&nbsp;&nbsp;&nbsp;
                    {DistributorData.status==='New' ? 
                  <span><a className="cursor"><i className="fontSize fa fa-thumbs-up cursor"   value="Approve" id={DistributorData._id+"-"+"Active"} title="Approve Distributor Profile" 
                          data-firstname={DistributorData.firstname} data-lastname={DistributorData.lastname} data-email={DistributorData.email} data-phone={DistributorData.phone} onClick={this.setDistributorstatus.bind(this)}  ></i></a> &nbsp;&nbsp;
                    <a className="cursor"><i className="fa fa-thumbs-down fontSize"  value="Reject" id={DistributorData._id+"-"+"Rejected"} title="Reject Distributor Profile" data-firstname={DistributorData.firstname} data-lastname={DistributorData.lastname} data-email={DistributorData.email} data-phone={DistributorData.phone} onClick={this.setDistributorstatus.bind(this)} ></i></a>&nbsp;&nbsp;</span>:null}
               </td>
                <td><div className={DistributorData.status ==='Active' ? 'label label-primary' : 'label label-danger'}>{DistributorData.status}</div></td>

              </tr>
            )
              })
              :
            <tr> 
              <td colSpan="13"> Sorry... No Data available! </td>
            </tr>
          }
            </tbody>
            </table>

      	</div>
        </div>
  		</div>
      </div>

  	);
  }


}