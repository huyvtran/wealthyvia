import React, { Component } 		from 'react';
import Header 						from "../../blocks/common/Header/Header.js";
import Banner        				from "../../blocks/Banner/Banner.js";
import Invest        				from "../../blocks/Invest/Invest.js";
import NoFees        				from "../../blocks/NoFees/NoFees.js";
import OneAdvice        				from "../../blocks/OneAdvice/OneAdvice.js";
import StartTrading        				from "../../blocks/StartTrading/StartTrading.js";
import HandFreeInvesting        				from "../../blocks/HandFreeInvesting/HandFreeInvesting.js";

export default class Homepage extends Component {
	constructor(props){
    super(props);
	    this.state = {
	    };
  	}  
  	componentDidMount() {
  	
  	}  
	
  render() {
  	
		return (
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 backColorWhite mb50">
					<div className="row">
					
					{/*<Header/>*/}            			
						<Banner/>
          				<Invest/>
          				<NoFees/>
          				<OneAdvice/>
          				<StartTrading/>
          				<HandFreeInvesting/>
					</div>
        		</div>
		);
	}
}
