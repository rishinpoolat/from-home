import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';

import { createNewShop } from '../../actions/shops';

import './shopRegister.css'

export default function ShopRegister() {
  const [shopData, setShopData] = useState({ shopName: '', district: '', ownerName: '', email: '', shopPhone: '', address: '', logo: '',  banner: '', description: ''});
  const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createNewShop(shopData));
        
    }

    const clear = () => {

    }

    return (
        <div className='shopregister'>
            <h3>Tell Us about your shop</h3>
            <form className='shopregister-form' onSubmit={handleSubmit}>
                <input className='shopregister-input' placeholder='Name of Shop' type='text' value={shopData.shopName} onChange={(e) => setShopData({ ...shopData, shopName: e.target.value})} name="shopName"/>
                <input className='shopregister-input' placeholder='District' value={shopData.district} onChange={(e) => setShopData({ ...shopData, district: e.target.value})} name="district"/>
                <input className='shopregister-input' placeholder='Owner Name' type='text' value={shopData.ownerName} onChange={(e) => setShopData({ ...shopData, ownerName: e.target.value})} name="ownerName"/>
                <input className='shopregister-input' placeholder='Email' type='email' value={shopData.email} onChange={(e) => setShopData({ ...shopData, email: e.target.value})} name="email"/>
                <input className='shopregister-input' placeholder='Phone' type='tel' value={shopData.shopPhone} onChange={(e) => setShopData({ ...shopData, shopPhone: e.target.value})} name="phone"/>
                <input className='shopregister-input' placeholder='Address' value={shopData.address} onChange={(e) => setShopData({ ...shopData, address: e.target.value})} name="address"/>
                <div className='shopregister-img-icons'>
                    <div>
                        <label>logo</label>
                        {/* <label htmlFor="fileInput">
                            <i className="shopregister-icon fas fa-plus"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            // style={{ display: "none" }}
                            onChange={(e) => setShopData({ ...shopData, logo: e.target.files[0]})}/> */}
                            <FileBase
                                type='file'
                                multiple={false}
                                onDone={({ base64 }) => setShopData({ ...shopData, logo: base64 })}
                            />
                    </div>

                    <div>
                        <label>banner</label>
                        {/* <label htmlFor="fileInput">
                            <i className="shopregister-icon fas fa-plus"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            // style={{ display: "none" }}
                            onChange={(e) => setShopData({ ...shopData, banner: e.target.files[1]})}/> */}
                        <FileBase
                                type='file'
                                multiple={false}
                                onDone={({ base64 }) => setShopData({ ...shopData, banner: base64 })}
                            />
                    </div>
                </div>
                <textarea className='shopregister-textarea' name="description" rows="2" cols="35" placeholder='Description' value={shopData.description} onChange={(e) => setShopData({ ...shopData, description: e.target.value})}></textarea>
                <button className='shopregister-submit-btn' type='submit'>Submit</button>
                <button className='shopregister-clear-btn' onClick={clear}>Clear</button>
            </form> 
        </div>
    )
    }
