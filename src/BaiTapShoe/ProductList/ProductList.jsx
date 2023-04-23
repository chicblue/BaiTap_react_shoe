import React, { Component } from 'react'
import { arrProduct } from '../../assets/data/data'
import ProductItem from './ProductItem'
import ModalDetail from './ModalDetail'
export default class ProductList extends Component {

  state = {
    detailProduct:{
    "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "https://svcy3.myclass.vn/images/adidas-prophere.png"
    }
}
 


    renderProductItem=()=>{
        return arrProduct.map((item)=>{
            return <div className='col-4 mt-2' key={item.id}>
            <ProductItem prodInfor = {item} detail ={this.setStateDetail}/>
            </div>
        });

    }
    setStateDetail = (prodClick)=>{
      console.log(prodClick);
      this.setState({
        detailProduct : prodClick
      })
    }
  
  
    render() {
    return (
      <div className='container'>
        <h3 className=' text-center '>Danh Sách Sản Phẩm</h3>
       
        <div className='row'>
            {this.renderProductItem()}  
            
        </div>
        <ModalDetail content={this.state.detailProduct}/>
      </div>
    )
  }
}
