 import React, { Component } from 'react';
import "./BottomDiv.css";

export default class BottomDiv extends Component {
	constructor(props){
    super(props);
	    this.state = {
	    	
	    };
  	}  
  render() {
		return (
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 backColorWhite">
			  	<div className="row">
			  		<div className="blogHeading hidden-lg col-md-12 col-sm-12 col-xs-12"> Products </div>

			  		<a href="#5gcpm" className="scroll"><div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 miniDiv1Filter ht162">
						<div className="row">
			  			<img src="/images/ab4.jpg"/>
						 <div className="miniFilterTextDiv col-lg-12 col-md-12 col-sm-12 col-xs-12">
				          <label className="pad20">5GCPM</label><br/><br/>
				          <span className="shopNowButtonFilters">Read More</span><br/>
				        </div>
				          <div className="miniFilterTextDiv1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
				          <label className="margins">5GCPM</label><br/>
				      	</div>

			  		</div>
				</div></a>

					<a href="#safeHeavenMoats"><div className="col-lg-2 col-md-12 col-sm-12 col-xs-12 miniDiv1Filterother height170 ">
						<div className="row">
			  			<img src="https://wealthyvia.s3.ap-south-1.amazonaws.com/website/ab3.jpg"/>
						 <div className="miniFilterTextDivother col-lg-12 col-md-12 col-sm-12 col-xs-12">
				          <label className="pad20">Safe Heaven Moats</label><br/><br/>
				          <span className="shopNowButtonFilters">Read More</span><br/>
				        </div>
				        <div className="miniFilterTextDiv2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
				          <label className="margins">Safe Heaven Moats</label><br/>
				      	</div>

			  		</div>
				</div></a>
				<a href="#safeHeavenAlpha"><div className="col-lg-2 col-md-12 col-sm-12 col-xs-12 miniDiv1Filterother height170 ">
						<div className="row">
			  			<img src="https://wealthyvia.s3.ap-south-1.amazonaws.com/website/ab1.jpg"/>
						 <div className="miniFilterTextDivother col-lg-12 col-md-12 col-sm-12 col-xs-12">
				          <label className="pad20">SHM and MF alpha</label><br/><br/>
				          <span className="shopNowButtonFilters">Read More</span><br/>
				        </div>
				        <div className="miniFilterTextDiv2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
				          <label className="margins">SHM and MF alpha</label><br/>
				      	</div>

			  		</div>
				</div></a>
				<a href="#unlistedStocks"><div className="col-lg-2 col-md-12 col-sm-12 col-xs-12 miniDiv1Filterother height170 ">
						<div className="row">
			  			<img src="https://wealthyvia.s3.ap-south-1.amazonaws.com/website/ab2.jpg"/>
						 <div className="miniFilterTextDivother col-lg-12 col-md-12 col-sm-12 col-xs-12">
				          <label className="pad20">Unlisted Stocks</label><br/><br/>
				          <span className="shopNowButtonFilters">Read More</span><br/>
				        </div>
				        <div className="miniFilterTextDiv2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
				          <label className="margins">Unlisted Stocks</label><br/>
				      	</div>

			  		</div>
				</div></a>
					
				<a href="#USAStocks"><div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 miniDiv1Filter ht162">
						<div className="row">
			  			<img src="/images/ab4.jpg"/>
						 <div className="miniFilterTextDiv col-lg-12 col-md-12 col-sm-12 col-xs-12">
				          <label className="pad20">USA Stocks</label><br/><br/>
				          <span className="shopNowButtonFilters">Read More</span><br/>
				        </div>
				        <div className="miniFilterTextDiv1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
				          <label className="margins">USA Stocks</label><br/>
				      	</div>

			  		</div>
				</div></a>
			
				
			</div>		
		</div>
		);
	}
}
