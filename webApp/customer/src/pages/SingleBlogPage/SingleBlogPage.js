import React from 'react';
import SingleBlogBanner      from "../../blocks/SingleBlogBanner/SingleBlogBanner.js";
import BlogContent      from "../../blocks/BlogContent/BlogContent.js";
import RelatedBlogs      from "../../blocks/RelatedBlogs/RelatedBlogs.js";

import BlogComment      from "../../blocks/BlogComment/BlogComment.js";

import axios        from 'axios';
import swal from 'sweetalert2';



export default class SingleBlogPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			  "blogTitle"      	  : "",
		      "summary"   	      : "",
		      "typeOfBlog"   	  : "",
		      "blogContent"       : "",

		};
	}


componentDidMount(){
  var id = this.props.match.params.selectedID;
  

		axios
      .get('/api/blogs/get/'+id)
      .then((response)=>{
      	console.log("response blogs==",response.data);
        this.setState({

        "blogTitle"		:response.data.blogTitle,
        "summary"		:response.data.summary,
        "typeOfBlog"	:response.data.typeOfBlog,
        "blogContent"	:response.data.blogContent

          
        })
      })
      .catch(function(error){
        console.log(error);
          if(error.message === "Request failed with status code 401")
              {
                   swal("Your session is expired! Please login again.","", "error");
              }
      })
	}

	render() {
		return (
          	<div className="container-fluid" style={{padding:"0px"}}>
          		<SingleBlogBanner blogTitle={this.state.blogTitle} summary={this.state.summary} />
          		<BlogContent blogContent={this.state.blogContent}/>
          		<RelatedBlogs/>
          		<BlogComment/>

          		
			</div>
		);
	}
}
