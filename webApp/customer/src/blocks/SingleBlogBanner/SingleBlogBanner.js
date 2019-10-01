import React from 'react';
import "./SingleBlogBanner.css";



export default class SingleBlogBanner extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			"blogTitle":"",
		};

	}
	componentDidMount(){
		
		this.setState({
			/*"blogTitle":  this.props.blogTitle*/
		
		})
	}

	render() {
		return (
			<div className="col-lg-12 nopadding sbbannerWall" style={{backgroundImage:'url("https://wealthyvia.s3.ap-south-1.amazonaws.com/website/blogBack.jpg")'}}>
				<div className="col-lg-12 sbcentered">
					<div className="col-lg-12 sbbtextcentered">
						<h1 className="fs72">{this.props.blogTitle}</h1>
						<p className="col-lg-6 col-lg-offset-3 fs24"> {/*When you are alone for days or weeks at a time, you eventually become
							drawn to people. Talking to randos is the norm. After a long time I could
							witness the sunrise. I could feel the sun rays falling on my body.*/}{this.props.summary}</p>

					</div>
					

				</div>
			</div>
		);
	}
}
