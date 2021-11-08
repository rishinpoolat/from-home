import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getShops } from '../../actions/shops';
import Shops from '../../components/Shops/Shops';
import SideBar from '../../components/SideBar/SideBar';
import './homepage.css'

export default function HomePage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShops());
    }, [dispatch]);


    const headerImg1 = 'https://images.unsplash.com/photo-1491223111273-505dc52e1cf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FrZSUyMHNob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
    
    const headerImg2 = 'https://images.unsplash.com/photo-1582659042116-63f96b514135?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZSUyMHNob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';


    return (
        <div className='home'>
            <div className='home-main'>
                <header className="home-header">
                    <h1>Trending</h1>
                    <div className='home-trending'>
                        <img src={headerImg1} alt="" className="home-header-img" />
                        <img src={headerImg2} alt="" className="home-header-img" />
                    </div>
                </header>
                <div className="home-shops">
                    <Shops/>
                </div>
            </div>
            <div className="home-sidebar">
                <SideBar/>
            </div>
            <button className='home-right-drag-button'><i className="fas fa-less-than"></i></button>        
        </div>
    )
}
