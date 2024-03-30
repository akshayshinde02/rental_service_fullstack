import React from 'react'
import './review.css'
import logo from '../user/bucket.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { OrderState } from '../Context';

const Review = () => {
    const { category, subCategory, vendors, setVendors, mainrental, modelType, rentalprice, rentalquantity, subservicename } = OrderState();
    console.log(vendors + "Reviw")
    console.log(subCategory+" "+ mainrental+" "+modelType)


    return (
        <>


                <div>
            <section id='testmonials'>
                    {/* Box Container */}
                    {vendors.map((data, index) => {

                        if ( subCategory === data.services[0].rentalvehical &&
                            mainrental === data.name && modelType === data.services[0].modelType
                        ) {
                            return (
                                <div className='box-container' key={index}>

                                    <div className='test-box'>
                                        <div className='box-top'>
                                            <div className='profile'>
                                                <div className='profile-img'>
                                                    <img src={logo} className='truckimg1' />
                                                </div>
                                                <div className='name'>
                                                    <strong>{data.services[0].reviews[0].personname}</strong>
                                                    <span>@{data.services[0].reviews[0].personname.toLowerCase()}</span>
                                                </div>
                                            </div>
                                            <div className='reviews'>

                                                {data.services[0].rate === 1 && (
                                                    <>
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </>
                                                )}

                                                {data.services[0].rate === 2 && (
                                                    <>
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </>
                                                )}

                                                {data.services[0].rate === 3 && (
                                                    <>
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </>
                                                )}

                                                {data.services[0].rate === 4 && (
                                                    <>
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </>
                                                )}
                                                {data.services[0].rate === 5 && (
                                                    <>
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </>
                                                )}


                                                {/* <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> */}
                                                {/* {data.services[0].reviews[0].rating} */}
                                            </div>
                                        </div>


                                        {/* Commenets */}
                                        <div className='comments'>

                                            {/* <p>Customers like the appearance, performance, value, and weight of the shoes. They mention that it looks good, it's good for workout and running, and is a good shoe for the mid range. Customers are also happy with the quality, and comfort. However, some customers differ on fit.</p> */}
                                            <p>{data.services[0].reviews[0].description}</p>
                                        </div>
                                    </div>

                                    {/* <div className='test-box'>
                <div className='box-top'>
                    <div className='profile'>
                        <div className='profile-img'>
                        <img src={logo} className='truckimg1'/>
                        </div>
                        <div className='name'>
                            <strong>Akshay Shinde</strong>
                            <span>@akshayshinde</span>
                        </div>
                    </div>
                    <div className='reviews'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>



                <div className='comments'>

                    <p>Customers like the appearance, performance, value, and weight of the shoes. They mention that it looks good, it's good for workout and running, and is a good shoe for the mid range. Customers are also happy with the quality, and comfort. However, some customers differ on fit.</p>
                </div>
            </div> */}
                                    {/* <div className='test-box'>
                <div className='box-top'>
                    <div className='profile'>
                        <div className='profile-img'>
                        <img src={logo} className='truckimg1'/>
                        </div>
                        <div className='name'>
                            <strong>Akshay Shinde</strong>
                            <span>@akshayshinde</span>
                        </div>
                    </div>
                    <div className='reviews'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>


              
                <div className='comments'>

                    <p>Customers like the appearance, performance, value, and weight of the shoes. They mention that it looks good, it's good for workout and running, and is a good shoe for the mid range. Customers are also happy with the quality, and comfort. However, some customers differ on fit.</p>
                </div>
            </div> */}
                                    {/* <div className='test-box'>
                <div className='box-top'>
                    <div className='profile'>
                        <div className='profile-img'>
                        <img src={logo} className='truckimg1'/>
                        </div>
                        <div className='name'>
                            <strong>Akshay Shinde</strong>
                            <span>@akshayshinde</span>
                        </div>
                    </div>
                    <div className='reviews'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>


             
                <div className='comments'>

                    <p>Customers like the appearance, performance, value, and weight of the shoes. They mention that it looks good, it's good for workout and running, and is a good shoe for the mid range. Customers are also happy with the quality, and comfort. However, some customers differ on fit.</p>
                </div>
            </div> */}
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
            </section>
                </div>
        </>
    )
}

export default Review