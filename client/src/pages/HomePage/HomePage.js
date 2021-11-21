import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShops } from '../../actions/shops';
import ShopCard from '../../components/Shops/ShopCard/ShopCard';
import SideBar from '../../components/SideBar/SideBar';
import './homepage.css'

export default function HomePage() {

    const dispatch = useDispatch();
    const shops = useSelector((state) => state.shops);

    console.log(shops);

    useEffect(() => {
        dispatch(getShops());
    }, [dispatch]);


    const headerImg1 = 'https://images.unsplash.com/photo-1491223111273-505dc52e1cf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FrZSUyMHNob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
    
    const headerImg2 = 'https://images.unsplash.com/photo-1582659042116-63f96b514135?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZSUyMHNob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';


    return (
        <div className='df'>
            <div className='home-main df fd-c'>
                <header className="home-header ">
                    <h1>Trending</h1>
                    <div className='homepage-trending df'>
                      <img src={headerImg1} alt="" className="home-header-img" />
                      <img src={headerImg2} alt="" className="home-header-img" />
                      <img src={headerImg2} alt="" className="home-header-img" />
                      <img src={headerImg2} alt="" className="home-header-img" />
                    </div>
                </header>
                    <h1>Cake Shops at Calicut</h1>
                <div className="home-shops df">
                    {!shops.length ? 
                        (<>
                          Loading...
                        </> ) : 
                        ( <>
                            {shops.map((shop) => (
                            <div key={shop._id}>
                                <ShopCard shop={shop}/>
                            </div>
                          ))}
                          </>
                        )
                    }
                </div>
            </div>
            <div className="home-sidebar ai-c fd-c df">
                <SideBar/>
            </div>
            <button className='home-right-drag-button'><i className="fas fa-less-than"></i></button>        
        </div>
    )
}
