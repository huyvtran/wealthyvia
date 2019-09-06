import React, { Component } from 'react';
import $ 				 			from 'jquery';
import Invest        				         from "../../blocks/Invest/Invest.js";

import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

import "./ProductPage.css";

export default class ProductPage extends Component {
	constructor(props){
    super(props);
	    this.state = {
	    	productDetailsArray:[]
	    	
	    };
  	}  
  	componentDidMount(){
		
	console.log(this.props.match.params.divId);
	this.setState({
		divID : this.props.match.params.divId,
	})

	}
	  Submit(event){
  	event.preventDefault();
  	$("#myModal").hide();
	$("#myModal").removeClass('in');
	$("#kycModal").show();
	$("#kycModal").addClass('in');
  }
	closeModal(event){
	$("#kycModal").removeClass('in');

	}
  render() {
  		const options = [
  { label: '15% is fine with me but don’t wanna lose at all . Safety first . Long term.', value: 1},
  { label: 'I am ok to take little risk but return should be 25-30%', value: 2},
  { label: 'I am looking for multibagger stocks so that I can multi-fold my portfolio in 3 years', value: 3},
  { label: 'Just strong core portfolio with blue chips or mutual fund but ok to earn something extra.', value: 4},
  { label: 'I wanna allocate some portion to big tech giants like amazon facebook types too.', value: 5},
  { label: 'I am day trader, daily play with markets. I want continuous smart trades.', value: 6},
];
	if(this.state.divID == "safeHevenMoats")
	{
		return (
			<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 productContainer">
						<div className="row">
			  			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 imageContainer">
								<div className="row">
								 	<div className="modal fade in " id="myModal" role="dialog">
			                          <div className="modal-dialog customModalRP" >
		                                <button type="button" className="close" data-dismiss="modal" > <i className="fa fa-times"></i></button>
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  " >
		                                	<form id="riskform">
		                                			<label className="titileName">Please spend just 1 min to answer below . It helps us to serve you better!!</label>
		                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
			                                		<p><b>1) What is the primary goal for the funds invested through WealthVia?</b></p>
		                                			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
														<ReactMultiSelectCheckboxes options={options} />
													</div>
			                                	</div> 
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>2) Any near term need for the funds invested with us ?</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>Yes after two years</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>Yes after 6 -8 months</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>It’s a separate capital to invest apart from my needs. I want to build good portfolio.</i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>3) Your investments % exposure of your investable capital can be best described as</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>FD/bonds/gold 80%, MF /direct equity 20% </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>FD 60% , 30 %Gold, 10% bonds, no direct equity</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>FD 10%, MF 25%, Direct equity 65%.</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>Direct equity 90%, FD 10%. </i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>4) What is number of years you have spent in stock market investments</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>0-2 years </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>3-5 years</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>5 years plus</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="04" name="alphabet"/>
															        <i>12-15 plus years </i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>4) What is your biggest drawdown on your entire portfolio ?</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>0 to -25% </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>-25% to -50%</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>-51% to -75%</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="04" name="alphabet"/>
															        <i>More than -75%</i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20 textAlignCenter">
			                                		<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 pull-right submitButtonRP" onClick={this.Submit.bind(this)}>Submit</div>
				                                		
			                                	</div>
		                                	</form>
		                              	</div>
		                              
			                          </div>
									</div>
									<div className="modal fade in " id="kycModal" role="dialog">
			                          <div className="modal-dialog customModalRP hight400" >
		                                <button type="button" className="close" data-dismiss="modal" onClick={this.closeModal.bind(this)}> <i className="fa fa-times"></i></button>
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		                                	  <form>
								              <div className="col-lg-12   col-md-12 col-sm-12 col-xs-12 textAlignCenter">
								                  <h4 className="formNameTitle "><span className="">KYC Collection Form</span></h4>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Name</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                      <input type="text" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Name" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row"> 
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Mobile Number</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                      <input type="number" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Mobile Number" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Email ID</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="email" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Email ID" ref="unitCost" />

								                    </div>
								                </div>
								              </div>
								               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>PAN </label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="file" className="customInputKF inputBox nameParts" name="unitCost"  ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Adress Proof</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="file" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Name" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP textAlignCenter">
								                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 submitButton pull-right">
								                      Submit
								                    </div>
								                     
								              </div>
								            </form>
		                              	</div>
		                              
			                          </div>
									</div>
								</div>
							</div>
			  		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 titleContainer">
			  			<label>Safe Heaven Moats</label>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
			  			<p>In 2014 , I met an old investor. I had no clue what was his portfolio or profile. We explained him a midcap idea he listened patiently. Asked him what he has.. he didn't say much but said I saw many bull and bear markets but it’s the quality of earnings and quality of management that prevails. Market is like "alawavarach paani" ...water drop on colocasia leaf.</p>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 imageContainer">
			  				<img src="/images/boat.jpg"/>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 imageContainer">
		  				<p>primary motto is to “Capital Protection. Risk Mitigation. Alpha generation. This portfolio is created keeping in mind that – “Protect your downside. Upside will take care of itself”.
							Portfolio consists of well researched large caps, with quality management & strong balance sheet. They are leaders in their respective sectors & are linked to Indian growth story.</p>
			  		</div>
			  		{/*<div className="col-lg-10 col-lg-offset-1 col-md-5 col-sm-5 col-xs-5 specifications">
			  	
			  			<label>CAGR Table</label>

			  		<table className="customTablePP">
						  <tr>
						    <th>Stock Name</th>
						    <th>YTD</th>
						    <th>1-Month</th>
						    <th>3-Month</th>
						    <th>1-Year</th>
						    <th>3-Year</th>
						    <th>5-Year</th>
						    <th>10-Year</th>
						  </tr>	 
						  {this.state.productDetailsArray.map((data,index) =>

						  <tr>
						    <td>Bajaj Finance</td>
						    <td>17.73</td>
						    <td>15.55</td>
						    <td>20.89</td>
						    <td>62.57</td>
						    <td>65.87</td>
						    <td>77.57</td>
						    <td>82.72</td>
						
						  </tr>
						
						    )}
					</table>
					                          

			  		</div>*/}
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 imageContainer">
			  				<p>our Safe heaven portfolio is designed only with such similar stocks where investors can sleep well and enjoy natural growth for next 5-7-10 years. </p>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-10 col-sm-12 col-xs-12 specifications">
			  			<label>Product Description</label>
			  			<ol className="customOl">
			  				<li>
			  				Wealthyvia primary motto is to “Capital Protection. Risk Mitigation. Alpha generation”</li>
							<li>This portfolio is created keeping in mind that – “Protect your downside. Upside will take care of itself”.</li>
							<li>Portfolio consists of well researched large caps, with quality management & strong balance sheet. They are leaders in their respective sectors & are linked to Indian growth story.</li>
							<li>Preferred companies:-
								<ul>
									<li>Large Caps</li>
								     <li>Leaders in the sector</li>
								     <li>Quality Management</li>
								     <li> Strong Balance sheet</li>
								     <li> Decent growth</li>
								     <li>Earnings predictability / Non Cyclical stocks</li>
								     <li> Linked to Indian growth story </li>
								</ul>
							</li>
							<li>Companies we don’t invest in:-
								<ul>
									<li>Micro & Small caps</li>
								     <li>Cyclical stocks</li>
								     <li>No earnings predictability</li>
								     <li> Questionable management</li>
								     <li> One Trick Pony companies</li>
								     <li>High debt / Leverage.</li>
								</ul>
							</li>
							<li>Total number of stocks held in this portfolio at any given point of time will be less than 15.</li>
							<li>Read a detailed blog post about this <span className="colored">here </span></li>
							
			  			</ol>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 specifications lineSpace">
			  			<label>Who is it suitable for?</label>
			  			<ol>
			  				
							<li>  Risk can be crash like 2008 or recession economy</li>
							<li> This is a low risk portfolio created for investors who are having low risk appetite but at the same time want to generate alpha over a period of time vis-à-vis Debt fund returns.</li>
							<li>Suitable for investors who are in their Middle age or closer to retirement who are looking forward to invest a portion portfolio of their savings in Equities.</li>
			  			</ol>
			  		</div>

					
						<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 textAlignCenter">
			  			<div className="buyNowButtonPP col-lg-2 col-lg-offset-8"  data-toggle="modal" data-target="#myModal">Buy Now</div>
			  			<div className="pull-right col-lg-2 enquireNow">Enquire Now</div>
			  		
			  		</div>


				</div>	
			
			</div>
		);
	}
	else if(this.state.divID == "5gcpm"){
		return( 
			<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 productContainer">
						<div className="row">
			  			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 imageContainer">
								<div className="row">
								 	<div className="modal fade in " id="myModal" role="dialog">
			                          <div className="modal-dialog customModalRP" >
		                                <button type="button" className="close" data-dismiss="modal" > <i className="fa fa-times"></i></button>
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  " >
		                                	<form id="riskform">
		                                			<label className="titileName">Please spend just 1 min to answer below . It helps us to serve you better!!</label>
		                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
			                                		<p><b>1) What is the primary goal for the funds invested through WealthVia?</b></p>
		                                			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
														<ReactMultiSelectCheckboxes options={options} />
													</div>
			                                	</div> 
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>2) Any near term need for the funds invested with us ?</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>Yes after two years</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>Yes after 6 -8 months</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>It’s a separate capital to invest apart from my needs. I want to build good portfolio.</i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>3) Your investments % exposure of your investable capital can be best described as</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>FD/bonds/gold 80%, MF /direct equity 20% </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>FD 60% , 30 %Gold, 10% bonds, no direct equity</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>FD 10%, MF 25%, Direct equity 65%.</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>Direct equity 90%, FD 10%. </i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>4) What is number of years you have spent in stock market investments</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>0-2 years </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>3-5 years</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>5 years plus</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="04" name="alphabet"/>
															        <i>12-15 plus years </i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>4) What is your biggest drawdown on your entire portfolio ?</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>0 to -25% </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>-25% to -50%</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>-51% to -75%</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="04" name="alphabet"/>
															        <i>More than -75%</i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20 textAlignCenter">
			                                		<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 pull-right submitButtonRP" onClick={this.Submit.bind(this)}>Submit</div>
				                                		
			                                	</div>
		                                	</form>
		                              	</div>
		                              
			                          </div>
									</div>
									<div className="modal fade in " id="kycModal" role="dialog">
			                          <div className="modal-dialog customModalRP hight400" >
		                                <button type="button" className="close" data-dismiss="modal" onClick={this.closeModal.bind(this)}> <i className="fa fa-times"></i></button>
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		                                	  <form>
								              <div className="col-lg-12   col-md-12 col-sm-12 col-xs-12 textAlignCenter">
								                  <h4 className="formNameTitle "><span className="">KYC Collection Form</span></h4>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Name</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                      <input type="text" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Name" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row"> 
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Mobile Number</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                      <input type="number" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Mobile Number" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Email ID</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="email" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Email ID" ref="unitCost" />

								                    </div>
								                </div>
								              </div>
								               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>PAN </label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="file" className="customInputKF inputBox nameParts" name="unitCost"  ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Adress Proof</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="file" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Name" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP textAlignCenter">
								                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 submitButton pull-right">
								                      Submit
								                    </div>
								                     
								              </div>
								            </form>
		                              	</div>
		                              
			                          </div>
									</div>
								</div>
							</div>
			  		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 titleContainer">
			  			<label>5GCPM</label>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
			  			<p> As Dhirubhai Ambani aptly given the tagline “Growth is Life” for his Reliance Empire – Our framework first looks for growth opportunities. Over the last many years analyzing the companies & closely tracking the up  & down cycles we had observed that there are 5 different types of Growth drivers for any company to make it BIG into the next league.</p>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 ">
			  			<label className="investBlock">5GCPM  – A method based model Portfolio by Wealthyvia</label>
			  			<Invest/>
			  		</div>
			  		
			  		<div className="col-lg-10 col-lg-offset-1 col-md-10 col-sm-12 col-xs-12 specifications" id="5g">
			  			<label>5G : Five types of Growths </label>
			  			<ul className="customOl">
			  				<li>
			  				Sales</li>
							<li>Profits</li>
							<li>Clients/product volume/value addition/branches/territories (micros of business economics)</li>
							<li>Margins :  one should be sure that margin will not decline. Headwinds, sectorial downturns, raw material prices, fierce competition, import duties, tax laws, substitute products , advanced tech makes margin decline.</li>
							<li>Market share/demand/ size of opportunity : this defines leadership position. Always no1 or no2 company having considerable and increasing size of opportunity .</li>
							
							
			  			</ul>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 specifications lineSpace" id="cg">
			  			<label> C : Corporate Governance</label>
			  			<ul>
			  				
							<li> ROE /ROCE /ROIC </li>
							<li> High promoter holding  </li>
							<li> Tax evasions  </li>
							<li> Dividends  </li>
							<li> Free Cash flows  </li>
							<li> Related party transactions   </li>
							<li> Too many subsidiaries  </li>
							<li> Reputation  </li>
						</ul>
			  		</div>
					<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 specifications lineSpace" id="practicability">
			  			<label> P : Practicability</label>
			  			<ul>
			  				
							<li> What is probability of entire investment turning profitable? </li>
							<li> Feasibility : constraints of net blocks-fixed assets, cash in hand, team capability, demand for sales. </li>
							<li> Natural tailwinds  </li>
							<li> Hurdles in achievement ?   </li>
							<li> What can go wrong in plan  </li>
							
						</ul>
			  		</div>
					<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 specifications lineSpace" id="magic">
			  			<label> M : Magic </label>
			  			<ul>
			  				
							<li> A formula based on Free cash flows , constancy of earnings, return ratios, sales and profit growths where no parameters of MCAP size or PE  or EV/EBITDA multiples taken over the period of 5-7-10 years. In 7-10 years business economics are well tested against inflation, government and their policy changes, crude extreme fluctuations, trade wars, real wars, competition, technology changes, market share changes, substitute products. </li>
							<li> We found it results in list of companies having no drag or drawdown of more than 25% from top i.e. new high a stock makes. There are only 170 such companies in market. This MAGIC screen basically gives natural support to stock price and price anchoring in quality growth companies. </li>
							<li> A technical chart of long term not daily or weekly but of months and years which clearly tells whether its long term uptrend is intact or not. We found this has 90% accuracy over long term trend prediction  </li>
							<li> 7 parameters are combined to form one single signal as derivative of them and gives best possible indication that is most useful for True Investors.   </li>
							
						</ul>
			  		</div>

					
						<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 textAlignCenter">
			  			<div className="buyNowButtonPP col-lg-2 col-lg-offset-8"  data-toggle="modal" data-target="#myModal">Buy Now</div>
			  			<div className="pull-right col-lg-2 enquireNow">Enquire Now</div>
			  		
			  		</div>


				</div>	
			
			</div>

		);
	}else if(this.state.divID == "safeHeven"){
		return( 
			<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 productContainer">
						<div className="row">
			  			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 imageContainer">
								<div className="row">
								 	<div className="modal fade in " id="myModal" role="dialog">
			                          <div className="modal-dialog customModalRP" >
		                                <button type="button" className="close" data-dismiss="modal" > <i className="fa fa-times"></i></button>
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  " >
		                                	<form id="riskform">
		                                			<label className="titileName">Please spend just 1 min to answer below . It helps us to serve you better!!</label>
		                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
			                                		<p><b>1) What is the primary goal for the funds invested through WealthVia?</b></p>
		                                			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
														<ReactMultiSelectCheckboxes options={options} />
													</div>
			                                	</div> 
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>2) Any near term need for the funds invested with us ?</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>Yes after two years</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>Yes after 6 -8 months</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>It’s a separate capital to invest apart from my needs. I want to build good portfolio.</i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>3) Your investments % exposure of your investable capital can be best described as</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>FD/bonds/gold 80%, MF /direct equity 20% </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>FD 60% , 30 %Gold, 10% bonds, no direct equity</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>FD 10%, MF 25%, Direct equity 65%.</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>Direct equity 90%, FD 10%. </i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>4) What is number of years you have spent in stock market investments</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>0-2 years </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>3-5 years</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>5 years plus</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="04" name="alphabet"/>
															        <i>12-15 plus years </i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>4) What is your biggest drawdown on your entire portfolio ?</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>0 to -25% </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>-25% to -50%</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>-51% to -75%</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="04" name="alphabet"/>
															        <i>More than -75%</i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20 textAlignCenter">
			                                		<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 pull-right submitButtonRP" onClick={this.Submit.bind(this)}>Submit</div>
				                                		
			                                	</div>
		                                	</form>
		                              	</div>
		                              
			                          </div>
									</div>
									<div className="modal fade in " id="kycModal" role="dialog">
			                          <div className="modal-dialog customModalRP hight400" >
		                                <button type="button" className="close" data-dismiss="modal" onClick={this.closeModal.bind(this)}> <i className="fa fa-times"></i></button>
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		                                	  <form>
								              <div className="col-lg-12   col-md-12 col-sm-12 col-xs-12 textAlignCenter">
								                  <h4 className="formNameTitle "><span className="">KYC Collection Form</span></h4>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Name</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                      <input type="text" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Name" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row"> 
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Mobile Number</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                      <input type="number" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Mobile Number" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Email ID</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="email" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Email ID" ref="unitCost" />

								                    </div>
								                </div>
								              </div>
								               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>PAN </label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="file" className="customInputKF inputBox nameParts" name="unitCost"  ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Adress Proof</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="file" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Name" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP textAlignCenter">
								                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 submitButton pull-right">
								                      Submit
								                    </div>
								                     
								              </div>
								            </form>
		                              	</div>
		                              
			                          </div>
									</div>
								</div>
							</div>
			  		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 titleContainer">
			  			<label>Safe Heaven Stocks + Alpha</label>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
{/*			  			<p> As Dhirubhai Ambani aptly given the tagline “Growth is Life” for his Reliance Empire – Our framework first looks for growth opportunities. Over the last many years analyzing the companies & closely tracking the up  & down cycles we had observed that there are 5 different types of Growth drivers for any company to make it BIG into the next league.</p>
*/}			  		</div>
			  		
			  		<div className="col-lg-10 col-lg-offset-1 col-md-10 col-sm-12 col-xs-12 specifications" id="5g">
			  			<label>Product Description </label>
			  			<ol className="customOl">
			  				<li>
			  				This product is designed to generated Regular income for clients with a limited risk exposure to F&O segment.</li>
							<li>As your existing Mutual Funds or Artha – Safe Heaven Stocks portfolio is doing its job of compounding over a long period of time, Investors have an opportunity to generate alpha by collateralizing the underlying portfolio or Mutual Funds.</li>
							<li>The margin the client receives after collateralizing his portfolio / mutual funds is used to take low risk, limited exposure to Nifty F&O segment.</li>
							<li>Predefined strategies for Entry & Exit signals, Profit booking & Strict stop loss.</li>
							<li>Strategy will only be implement  on:-
								<ol>
									<li>Nifty Future & Options (monthly).</li>
								    
								</ol>
							</li>
							<li>We don’t indulge in:-
								<ol>
									<li>Bank Nifty or Any other indices</li>
									<li>F&O segment of Individual companies.</li>
								    
								</ol>
							</li>
							
							
			  			</ol>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 specifications lineSpace" id="cg">
			  			<label> Risks Involved</label>
			  			<ol>
			  				
							<li> No matter how much we strategize & risk averse we are, they are always risks associated with dealing in F&O markets.  </li>
							<li> As an advisory, it is our responsibility to bring to your notice & inform you about them:
							  <ul>
									<li>Additional Margin (Margin Call) – During some black swan days, where our trades got into losses – you may receive margin calls from your broker for additional capital infusion. 
										 <ul>
											<li>How can we mitigate this? – In order to mitigate such scenarios, we never use full margin amount which was released after hair cut. We only use up to 70% of total margin amount (after hair cut) to trade in F&O segment. The remaining 30% is the buffer for any rainy days or from receiving any margin call. 

											</li>
										    
										</ul>
									</li>
								    
									<li>Capital Risk: - By the nature of F&O, there is a risk of capital loss for the investor.
										 <ul>
											<li>How we can mitigate this? – We understand the risks associated with F&O and hence we never take any aggressive positions. We never deal with other indices except Nifty F&O. We also never deal with individual companies F&O, which always have high risk of violent moves / high volatility involved. 
											</li>
										    
										</ul>
									</li>
								    
								</ul>
							</li>
							
						</ol>
			  		</div>
					<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 specifications lineSpace" id="practicability">
			  			<label> Who is it suitable for?</label>
			  			<ol>
			  				
							<li> Investors who are willing at take additional risk for generating risk adjusted Alpha. </li>
							<li> Investors who have parked their money in Mutual Funds & wanted to generate regular income without additional capital.</li>
							<li> Investors who understand & accept the risks involved in F&O.  </li>
						
							
						</ol>
			  		</div>
					
					
						<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 textAlignCenter">
			  			<div className="buyNowButtonPP col-lg-2 col-lg-offset-8"  data-toggle="modal" data-target="#myModal">Buy Now</div>
			  			<div className="pull-right col-lg-2 enquireNow">Enquire Now</div>
			  		
			  		</div>


				</div>	
			
			</div>

		);
	}else if(this.state.divID == "unlistedPre"){
		return( 
			<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 productContainer">
						<div className="row">
			  			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 imageContainer">
								<div className="row">
								 	<div className="modal fade in " id="myModal" role="dialog">
			                          <div className="modal-dialog customModalRP" >
		                                <button type="button" className="close" data-dismiss="modal" > <i className="fa fa-times"></i></button>
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  " >
		                                	<form id="riskform">
		                                			<label className="titileName">Please spend just 1 min to answer below . It helps us to serve you better!!</label>
		                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
			                                		<p><b>1) What is the primary goal for the funds invested through WealthVia?</b></p>
		                                			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
														<ReactMultiSelectCheckboxes options={options} />
													</div>
			                                	</div> 
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>2) Any near term need for the funds invested with us ?</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>Yes after two years</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>Yes after 6 -8 months</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>It’s a separate capital to invest apart from my needs. I want to build good portfolio.</i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>3) Your investments % exposure of your investable capital can be best described as</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>FD/bonds/gold 80%, MF /direct equity 20% </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>FD 60% , 30 %Gold, 10% bonds, no direct equity</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>FD 10%, MF 25%, Direct equity 65%.</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>Direct equity 90%, FD 10%. </i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>4) What is number of years you have spent in stock market investments</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>0-2 years </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>3-5 years</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>5 years plus</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="04" name="alphabet"/>
															        <i>12-15 plus years </i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>4) What is your biggest drawdown on your entire portfolio ?</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>0 to -25% </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>-25% to -50%</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>-51% to -75%</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="04" name="alphabet"/>
															        <i>More than -75%</i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20 textAlignCenter">
			                                		<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 pull-right submitButtonRP" onClick={this.Submit.bind(this)}>Submit</div>
				                                		
			                                	</div>
		                                	</form>
		                              	</div>
		                              
			                          </div>
									</div>
									<div className="modal fade in " id="kycModal" role="dialog">
			                          <div className="modal-dialog customModalRP hight400" >
		                                <button type="button" className="close" data-dismiss="modal" onClick={this.closeModal.bind(this)}> <i className="fa fa-times"></i></button>
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		                                	  <form>
								              <div className="col-lg-12   col-md-12 col-sm-12 col-xs-12 textAlignCenter">
								                  <h4 className="formNameTitle "><span className="">KYC Collection Form</span></h4>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Name</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                      <input type="text" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Name" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row"> 
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Mobile Number</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                      <input type="number" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Mobile Number" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Email ID</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="email" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Email ID" ref="unitCost" />

								                    </div>
								                </div>
								              </div>
								               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>PAN </label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="file" className="customInputKF inputBox nameParts" name="unitCost"  ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Adress Proof</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="file" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Name" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP textAlignCenter">
								                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 submitButton pull-right">
								                      Submit
								                    </div>
								                     
								              </div>
								            </form>
		                              	</div>
		                              
			                          </div>
									</div>
								</div>
							</div>
			  		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 titleContainer">
			  			<label>US Stocks investing</label>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
			  			<p> As Dhirubhai Ambani aptly given the tagline “Growth is Life” for his Reliance Empire – Our framework first looks for growth opportunities. Over the last many years analyzing the companies & closely tracking the up  & down cycles we had observed that there are 5 different types of Growth drivers for any company to make it BIG into the next league.</p>
			  		</div>
			  		
			  		<div className="col-lg-10 col-lg-offset-1 col-md-10 col-sm-12 col-xs-12 specifications" id="5g">
			  			<label>Few Facts on USA market </label>
			  			<ul className="customOl">
			  				<li>
			  				Total US stock Market makes 40% plus of global equity markets. The U.S. stock market is currently $34 trillion plus. The mighty NYSE, representing $18.5 trillion in market capitalization, or about 27% of the total market for global equities.</li>
							<li>Elite group, with familiar names such as the NYSE, Nasdaq, LSE, Deutsche Borse, TMX Group, and Japan Exchange Group, comprise 87% of the world’s total value of equities</li>
							<li>The value-weighted average capitalization of U.S. companies is $176 billion, whereas the average capitalization of foreign companies is less than a fourth of that at $37 billion. This disparity is most prominent in technology stocks, where relative size has changed over time. U.S. technology stocks were 2.5 times as big as foreign stocks in 2007; U.S. tech stocks had an average capitalization of $138 billion, versus $50 billion for foreign tech.</li>
							<li>All of the world's 10 largest companies as measured by market capitalization are American. Most of these companies are mega-cap companies, or those with market capitalizations above $300 billion</li>
							
							
			  			</ul>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 specifications chartContainer" id="cg">
			  			<label> Since 2010 , US market outperformed Indian Market</label>
			  			<img src="/images/chart1.jpg" className="mt20"/>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 specifications chartContainer mt20" id="cg">
			  			<label> Natural Benefit of USD INR increase over longer time</label>
			  			<img src="/images/usinr.jpg" className="mt20"/>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 specifications chartContainer mt20" id="cg">
			  			<label> Natural Benefit of USD INR increase over longer time</label>
			  			<img src="/images/chart3.jpg" className="mt20"/>
			  		</div>
					<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 specifications lineSpace" id="practicability">
			  			<label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row"> How we can help you invest in US market</label>
			  			<ul className="col-lg-6 col-md-6 col-sm-6 col-xs-6 mt20">
			  				
							<li> Choosing right kind of stocks with research reports  </li>
							<li> Zero brokerage charges and very low maintenance charges unlike few international brokerages offering high charges </li>
							<li> Ease of buy sell and amount transfers to your own accounts. </li>
							<li> Assistance in Liberalized Remittance Scheme </li>
							
						</ul>
						<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 nyscContainer">
			  				<img src="/images/nysc.jpg"/>
						</div>
			  		</div>
				
					
						<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 textAlignCenter">
			  			<div className="buyNowButtonPP col-lg-2 col-lg-offset-8"  data-toggle="modal" data-target="#myModal">Buy Now</div>
			  			<div className="pull-right col-lg-2 enquireNow">Enquire Now</div>
			  		
			  		</div>


				</div>	
			
			</div>

		);
	}else{
		return( 
			<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 productContainer">
						<div className="row">
			  			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 imageContainer">
								<div className="row">
								 	<div className="modal fade in " id="myModal" role="dialog">
			                          <div className="modal-dialog customModalRP" >
		                                <button type="button" className="close" data-dismiss="modal" > <i className="fa fa-times"></i></button>
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  " >
		                                	<form id="riskform">
		                                			<label className="titileName">Please spend just 1 min to answer below . It helps us to serve you better!!</label>
		                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
			                                		<p><b>1) What is the primary goal for the funds invested through WealthVia?</b></p>
		                                			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
														<ReactMultiSelectCheckboxes options={options} />
													</div>
			                                	</div> 
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>2) Any near term need for the funds invested with us ?</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>Yes after two years</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>Yes after 6 -8 months</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>It’s a separate capital to invest apart from my needs. I want to build good portfolio.</i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>3) Your investments % exposure of your investable capital can be best described as</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>FD/bonds/gold 80%, MF /direct equity 20% </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>FD 60% , 30 %Gold, 10% bonds, no direct equity</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>FD 10%, MF 25%, Direct equity 65%.</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>Direct equity 90%, FD 10%. </i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>4) What is number of years you have spent in stock market investments</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>0-2 years </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>3-5 years</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>5 years plus</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="04" name="alphabet"/>
															        <i>12-15 plus years </i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20">
				                                		<p><b>4) What is your biggest drawdown on your entire portfolio ?</b></p>
				                                		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
															 <div className="dropdown">
															    <button type="button" 
															      className="btn customDrop btn-select"
															      data-toggle="dropdown">Select..</button>
															    <ul className="dropdown-menu dropdown-menu-select">
															    <li><label className="dropdown-radio">
															        <input type="radio" value="001" name="alphabet"/>
															        <i>0 to -25% </i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="002" name="alphabet"/>
															        <i>-25% to -50%</i>
															        </label>
															    </li>
															    <li><label className="dropdown-radio">
															        <input type="radio" value="003" name="alphabet"/>
															        <i>-51% to -75%</i>
															        </label>
															    </li>
															      <li><label className="dropdown-radio">
															        <input type="radio" value="04" name="alphabet"/>
															        <i>More than -75%</i>
															        </label>
															    </li>
															    </ul>
															  </div>				                                		
															</div>
				                                		
			                                	</div>
			                                	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt20 textAlignCenter">
			                                		<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 pull-right submitButtonRP" onClick={this.Submit.bind(this)}>Submit</div>
				                                		
			                                	</div>
		                                	</form>
		                              	</div>
		                              
			                          </div>
									</div>
									<div className="modal fade in " id="kycModal" role="dialog">
			                          <div className="modal-dialog customModalRP hight400" >
		                                <button type="button" className="close" data-dismiss="modal" onClick={this.closeModal.bind(this)}> <i className="fa fa-times"></i></button>
		                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		                                	  <form>
								              <div className="col-lg-12   col-md-12 col-sm-12 col-xs-12 textAlignCenter">
								                  <h4 className="formNameTitle "><span className="">KYC Collection Form</span></h4>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Name</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                      <input type="text" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Name" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row"> 
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Mobile Number</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                      <input type="number" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Mobile Number" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Email ID</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="email" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Email ID" ref="unitCost" />

								                    </div>
								                </div>
								              </div>
								               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>PAN </label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="file" className="customInputKF inputBox nameParts" name="unitCost"  ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP">
								                <div className="row">
								                    <div className="col-lg-3 col-md-2 col-sm-2 col-xs-2">
								                      <label>Adress Proof</label>
								                    </div>
								                     <div className="col-lg-9 col-md-8 col-sm-8 col-xs-8">
								                         <input type="file" className="customInputKF inputBox nameParts" name="unitCost" placeholder="Enter Name" ref="unitCost" />
								                    </div>
								                </div>
								              </div>
								               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 inputContainerRP textAlignCenter">
								                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 submitButton pull-right">
								                      Submit
								                    </div>
								                     
								              </div>
								            </form>
		                              	</div>
		                              
			                          </div>
									</div>
								</div>
							</div>
			  		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 titleContainer">
			  			<label>Unlisted shares</label>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
			  			<p>We are a Mumbai based dealer of Unlisted, Pre IPO shares. Our superiority stems robust systems and processes which provide smooth and hassle-free flow of agreement backed transactions by ensuring timely delivery of shares and money to the clients.
							Many young companies grow much faster than mature companies due to their lower base hence they tend to significantly outperform the benchmark returns. However, a lot of this growth happens before the company goes public with an IPO. Hence participating in such companies in the Growth / Pre IPO stage can provide superior returns to the investor. Buyers need a safe mechanism that gives them access to high quality shares at the best price, provides matching of trade and enables even retail purchases.
							While investments in Unlisted/Pre IPO shares have the potential of giving high returns, they are also accompanied by higher risk due to a variety of reasons. Investors need to exercise caution while investing in Unlisted/Pre IPO companies. Generally, they should have a minimum time horizon of 4 years and should not allocate more than 30% of their portfolio in Unlisted/Pre IPO shares.
							We not just sell unlisted shares at arthavruddhi.com; but also first analyse the company and it’s shares liquidity and then only we will put on website to purchase for the investors.</p>
			  		</div>
			  		
			  	{/*	<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 imageContainer">
			  				<p>our Safe heaven portfolio is designed only with such similar stocks where investors can sleep well and enjoy natural growth for next 5-7-10 years. </p>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-10 col-sm-12 col-xs-12 specifications">
			  			<label>Product Description</label>
			  			<ol className="customOl">
			  				<li>
			  				Wealthyvia primary motto is to “Capital Protection. Risk Mitigation. Alpha generation”</li>
							<li>This portfolio is created keeping in mind that – “Protect your downside. Upside will take care of itself”.</li>
							<li>Portfolio consists of well researched large caps, with quality management & strong balance sheet. They are leaders in their respective sectors & are linked to Indian growth story.</li>
							<li>Preferred companies:-
								<ul>
									<li>Large Caps</li>
								     <li>Leaders in the sector</li>
								     <li>Quality Management</li>
								     <li> Strong Balance sheet</li>
								     <li> Decent growth</li>
								     <li>Earnings predictability / Non Cyclical stocks</li>
								     <li> Linked to Indian growth story </li>
								</ul>
							</li>
							<li>Companies we don’t invest in:-
								<ul>
									<li>Micro & Small caps</li>
								     <li>Cyclical stocks</li>
								     <li>No earnings predictability</li>
								     <li> Questionable management</li>
								     <li> One Trick Pony companies</li>
								     <li>High debt / Leverage.</li>
								</ul>
							</li>
							<li>Total number of stocks held in this portfolio at any given point of time will be less than 15.</li>
							<li>Read a detailed blog post about this <span className="colored">here </span></li>
							
			  			</ol>
			  		</div>
			  		<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 specifications lineSpace">
			  			<label>Who is it suitable for?</label>
			  			<ol>
			  				
							<li>  Risk can be crash like 2008 or recession economy</li>
							<li> This is a low risk portfolio created for investors who are having low risk appetite but at the same time want to generate alpha over a period of time vis-à-vis Debt fund returns.</li>
							<li>Suitable for investors who are in their Middle age or closer to retirement who are looking forward to invest a portion portfolio of their savings in Equities.</li>
			  			</ol>
			  		</div>
					*/}
						<div className="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 textAlignCenter">
			  			<div className="buyNowButtonPP col-lg-2 col-lg-offset-8"  data-toggle="modal" data-target="#myModal">Buy Now</div>
			  			<div className="pull-right col-lg-2 enquireNow">Enquire Now</div>
			  		
			  		</div>


				</div>	
			
			</div>

		);
	}
	}
}