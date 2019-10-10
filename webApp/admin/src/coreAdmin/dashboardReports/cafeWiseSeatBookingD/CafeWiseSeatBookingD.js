import React,{Component}        from 'react';
import { render }               from 'react-dom';
import { BrowserRouter,Route }  from 'react-router-dom';
import { Switch,Link,location } from 'react-router-dom';
import moment                   from "moment";
import axios                    from "axios";
import IAssureTable             from './IAssureTable.js'
import $                        from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './../dashboardReport.css';

class CafeWiseSeatBookingD extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
     menu : "",
     cafe_Name : "Searching...",
     activity : "checkIn",
     startDate : moment().format("YYYY-MM-DD"),
     endDate : moment().format("YYYY-MM-DD"),

     "tableHeading" :{
        userName       : "User Name",                                              
        checkInTime    : "Check-In time",
        checkOutTime   : "Check-Out time",
        menuOrder      : "Menu Order"
     },
      "tableObjects"              : {
              // deleteMethod              : 'delete',
              // apiLink                   : '/api/category/',
              paginationApply           : true,
              searchApply               : true,
              // editUrl                   : '/category-management/'
            },
      "startRange"     : 0,
      "limitRange"     : 10,
      "twolevelHeader":{
                        apply:false,
                        },
     tableData : [],
     completeDataCount : 10,
    }
  }

  componentDidMount(){
    this.getData(this.state.startRange, this.state.limitRange);
    var workspace_ID = this.props.match.params.workspace_ID;
    axios
        .get('/api/report/get/cafewisebooking/0/100000')
        .then((response)=>{
            console.log("100000............>",response.data);
            var cafe_Name = "No cafe Found";
            for (var i = 0; i < response.data.length; i++) {
              if (response.data[i]._id===workspace_ID) {
                cafe_Name = response.data[i].cafeName
              }
            }
      
            this.setState({
               cafe_Name:cafe_Name          
              },()=>{
              console.log('cafe_Name', this.state.cafe_Name);
              })

        })
        .catch(function (error) {
          console.log(error);
        })  
  } 

  handleChange(event){
    const target = event.target;
    const name = target.name;
    console.log("D.....",event.target.value)
    this.setState({
      [name]:event.target.value,
    },()=>{
      this.getData(this.state.startRange, this.state.limitRange);
    });
  }

  getData(startRange, limitRange){   
  console.log('getData Mani', startRange, limitRange);
    var workspace_ID = this.props.match.params.workspace_ID;
    var type = this.state.activity;
    var startDate = this.state.endDate /*moment("2019-09-27T12:05:33+05:30").format("YYYY-MM-DD")*/;
    var endDate = this.state.endDate /*moment("2019-09-28T12:05:33+05:30").format("YYYY-MM-DD")*/;
    console.log("selectDate............workspace_ID>",type,startDate,endDate,workspace_ID);
      axios
        .get('/api/report/get/checkInOut/'+type+'/'+startDate+'/'+endDate+'/'+workspace_ID+'/'+startRange+'/'+limitRange)
        // .get('/api/report/get/vendordailycheckins/'+workspace_ID+'/'+selectDate+'/'+startRange+'/'+limitRange)
        .then((response)=>{
            console.log("vendordailycheckins............>",response.data);
            var tableData = response.data.map((a, i)=>{
              // var x = a.accountNumber.toString();
              // console.log('x',x);
              return {
                // "_id" : a._id ? a._id : 1,
                userName       : a.userName ? a.userName : '-',                                             
                checkInTime    : a.checkInTime ? moment(a.checkInTime).format("h:mm a") : '-',
                checkOutTime   : a.checkOutTime!=="Ongoing" ? moment(a.checkOutTime).format("h:mm a") : 'Ongoing...',
                menuOrder      : a.menuOrder ? a.menuOrder : '-',
              }
            })
      
            this.setState({
                completeDataCount : response.data.length>0?response.data.length:10,
                tableData : tableData,          
              },()=>{
              console.log('tableData', this.state.tableData);
              })

        })
        .catch(function (error) {
          console.log(error);
        }) 
}
  
  render(){
    return(
    <div>
      {this.state.menu==""?
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center custTableHead">CafeWise Seat Booking</div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center custTableHead noPad">({this.state.cafe_Name})</div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 NOpadding">
              <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 marginTop17 NOpadding">Activity</label>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
                <select onChange={this.handleChange.bind(this)} value={this.state.activity} id="activity" ref="activity" name="activity" className="col-lg-12 col-md-12 col-sm-6 col-xs-12  noPadding  form-control">
                  <option value="Not Selected" disabled>--Select--</option>
                  <option value="checkIn">Check-In</option>
                  <option value="checkOut">Check-Out</option>
                  <option value="both">Both (Check-In & Check-Out)</option>
                </select>
              </div>
            </div> 
            {/*<div className="col-lg-1 col-md-4 col-sm-12 col-xs-12 NOpadding">
            </div> 
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 NOpadding">
              <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 marginTop17 NOpadding">Start Date</label>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
                <input type="date" className="col-lg-6 col-md-6 col-sm-6 col-xs-6 noPadding  form-control"
                   name="startDate" ref="startDate" value={this.state.startDate} style={{fontFamily:'Montserrat-Regular'}} 
                   onChange={this.handleChange.bind(this)}/>
              </div>
            </div>*/}
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 NOpadding">
            </div> 
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 NOpadding">
              <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 marginTop17 NOpadding">End Date</label>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
                 <input type="date" className="col-lg-6 col-md-6 col-sm-6 col-xs-6 noPadding  form-control"
                   name="endDate" ref="endDate" value={this.state.endDate} style={{fontFamily:'Montserrat-Regular'}} 
                   onChange={this.handleChange.bind(this)}/>
              </div>
            </div> 

          </div>  

        {console.log("daily tabledata",this.state.tableData)}
                              <IAssureTable 
                                tableHeading={this.state.tableHeading}
                                twoLevelHeader={this.state.twoLevelHeader} 
                                dataCount={this.state.completeDataCount}
                                tableData={this.state.tableData}
                                getData={this.getData.bind(this)}
                                tableObjects={this.state.tableObjects}
                              />
                            </div>
          <div rowSpan="4" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center custTableFoot">
          </div>
      </div>
      :
      <div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center bgImgWt">
            <img src="/images/cofficLoader.gif" alt="Logo_img" height="15%" width="15%" className="imgHt"/>
          </div>
      </div>
    }
    </div>
    );
  }
}
export default CafeWiseSeatBookingD;