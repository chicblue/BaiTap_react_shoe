import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {prodInfor,detail} = this.props
    return (
      <div className='card'>
        <img src={prodInfor.image} alt="..." />
        <div className="card-body">
          <h3 className='fs-5'>{prodInfor.name}</h3>
          <p>{prodInfor.price}$</p>
          <button className='btn btn-primary'>
            Add to cart <i className='fa fa-cart-plus'></i>
          </button>
          <button className='btn btn-success ms-2'data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
           detail(prodInfor);
          }}>
            Detail <i className="fa-solid fa-circle-info"></i>
          </button>
        </div>
      </div>
    )
  }
}
