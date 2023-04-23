import React, { Component } from 'react'
import '../../assets/css/modal.css'
export default class ModalDetail extends Component {
    
    
   

    render() {
        let {content} = this.props;
        return (
            <div className="modal fade " id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm modal-width" role="document">
                    <div className="modal-content " >
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="modalTitleId">Chi Tiết Sản Phẩm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className='col-4'>
                                    <h3 className='text-center fs-5'>{content.name}</h3>
                                    <img src={content.image} alt="..." className='w-100'/>
                                </div>
                                <div className='col-8'>
                                    <h3 className=' text-center fs-5'></h3>
                                    <table className='table fs-6'>
                                        <thead>
                                            <tr>
                                                <th>Giá Sản Phẩm</th>
                                                <td>{content.price}$</td>
                                            </tr>
                                            <tr>
                                                <th>Mô Tả</th>
                                                <td>{content.description}</td>
                                            </tr>
                                            <tr>
                                                <th>Số Lượng</th>
                                                <td>{content.quantity}</td>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
