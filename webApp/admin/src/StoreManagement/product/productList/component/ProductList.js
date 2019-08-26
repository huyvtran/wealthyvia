import React, { Component }   from 'react';
import $                      from 'jquery';
import axios                  from 'axios';
import ReactTable             from "react-table";
import IAssureTable           from "../../ProductTable/IAssureTable.jsx";
import swal                   from 'sweetalert';
import _                      from 'underscore';
import '../css/productList.css';

axios.defaults.baseURL = 'http://gangaexpressapi.iassureit.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

class ProductList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tableHeading :{
                "productCode" : 'Product Code',
                "productName" : 'Product Name',
            },
            tableObjects : {
                paginationApply : true,
                searchApply     : false,
                deleteMethod    : 'delete',
                apiLink         : '/api/products',
                editUrl         : '/add-product/'
            },
            startRange : 0,
            limitRange : 10
        };
        window.scrollTo(0, 0);
    }


    componentWillReceiveProps(nextProps) {
        
    }


    handleChange(event){
        const target = event.target;
        const name   = target.name;
        this.setState({
            [name]: event.target.value,
        });
    }


    componentDidMount() {
        this.getCount();
        this.getData(this.state.startRange, this.state.limitRange);

        // var a =[{key: 'a'},{key: 'v'}, {key: 'b'}]
        var a = [1,1,2,2,'a','a','b'];
        var b = a.filter((v, i, array)=>{ 
            console.log(v , array.indexOf(v) +'==='+ i);
            return array.indexOf(v) === i
        });
        console.log('b', b);
        // var c= a.sort((a, b)=>{
        //     console.log(a, b);
        //     if(a.key > b.key){
        //         return -1
        //     }else{
        //         return 1
        //     }
        //     return 0
        // })
        // console.log('c', c, a.reverse());

        // let user = { 
        //     name: "GFG", 
        //     gfg1:() => { 
        //         console.log("hello " + this.name); // no 'this' binding here 
        //     }, 
        //     gfg2(){        
        //         console.log("Welcome to " + this.name); // 'this' binding works here 
        //     }   
        // }; 
        // user.gfg1(); 
        // user.gfg2(); 
    }
    getCount(){
        axios.get('/api/products/get/count')
        .then((response)=>{
            console.log('dataCount', response.data.dataCount);
            this.setState({
                dataCount : response.data.dataCount
            })
        })
        .catch((error)=>{
            console.log('error', error);
        })
    }
    getData(startRange, limitRange){
        var data = {
            startRange : startRange,
            limitRange : limitRange
        }
        axios.post('/api/products/get/list', data)
        .then((response)=>{
            console.log('response', response.data)
            this.setState({
                tableData : response.data
            })
        })
        .catch((error)=>{
            console.log('error', error);
        })
    }

    publishAllProducts(event){
        event.preventDefault();        
        

        var data ={
            publishData:  _.pluck(this.state.tableData, '_id')
        };
        console.log('tableData', data)
        axios.put('/api/products/multiple', data)
        .then((response)=>{
            
            swal({
                text: 'Product ed Successfully',
                title: 'Product ed Successfully',
            });
        })
        .catch((error)=>{

        });
        this.getData(this.state.startRange, this.state.limitRange);
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
                                            Product List                  
                                        </div>
                                        <hr className="hr-head container-fluid row"/>
                                    </div>
                                    <div className="addRolesInWrap col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="searchProductFromList row">
                                            <div className="col-lg-4 pull-left">
                                                <div className="publishAllProductsClient" aria-hidden="true" data-toggle="modal" data-target={"#publishProduct"}>
                                                    Publish All Products
                                                </div>
                                                <div className="modal fade col-lg-12 col-md-12 col-sm-12 col-xs-12" id={"publishProduct"} role="dialog">
                                                    <div className=" modal-dialog adminModal adminModal-dialog col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="modal-content adminModal-content col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 noPadding">
                                                            <div className="modal-header adminModal-header col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <h4 className="WightFont textAlignCenter col-lg-11 col-md-11 col-sm-11 col-xs-11">publish All Product</h4>
                                                                <div className="adminCloseCircleDiv pull-right  col-lg-1 col-md-1 col-sm-1 col-xs-12 NOpadding-left NOpadding-right">
                                                                    <button type="button" className="adminCloseButton" data-dismiss="modal" data-target={"publishProduct"}>&times;</button>
                                                                </div>
                                                            </div>
                                                            <div className="modal-body adminModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <h4 className="blackLightFont textAlignCenter col-lg-12 col-md-12 col-sm-12 col-xs-12">Are you sure you want to publish all products?</h4>
                                                            </div>

                                                            <div className="modal-footer adminModal-footer col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                                    <button type="button" className="btn adminCancel-btn col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-8 col-sm-offset-1 col-xs-10 col-xs-offset-1" data-dismiss="modal">CANCEL</button>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                                    <button onClick={this.publishAllProducts.bind(this)} type="button" className="btn adminFinish-btn col-lg-4 col-lg-offset-7 col-md-4 col-md-offset-7 col-sm-8 col-sm-offset-3 col-xs-10 col-xs-offset-1" data-dismiss="modal">PUBLISH</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <IAssureTable 
                                        tableHeading={this.state.tableHeading}
                                        twoLevelHeader={this.state.twoLevelHeader} 
                                        dataCount={this.state.dataCount}
                                        tableData={this.state.tableData}
                                        getData={this.getData.bind(this)}
                                        tableObjects={this.state.tableObjects}
                                        />
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
export default ProductList ;

// ShopProductList = withTracker(props => {
//     var userId = Meteor.userId();
//     var productData = [];
//     const vendorHandle = Meteor.subscribe("allSupplierList");
//     const VendorData = Suppliers.findOne({"OwnerId":userId});
//     console.log('VendorData',VendorData);
//     const loading = !vendorHandle.ready();

//     var VendorId = VendorData ? VendorData._id : '';
//     console.log('VendorId',VendorId);
//     const productHandle     = Meteor.subscribe("productShopPublish");
//     if(Roles.userIsInRole(Meteor.userId(), ['Vendor'])){
//         productData       = ProductShop.find({vendorId:VendorId}).fetch();
//     }else{
//         productData       = ProductShop.find({}).fetch();
//     }
//     const loading1          = !productHandle.ready();
//     console.log('productData',productData);
//     return {
//         loading,
//         productData
//     };    
// })(ShopProductList);