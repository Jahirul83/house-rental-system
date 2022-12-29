import React from 'react';
import { AiOutlinePhone, AiOutlineSafety } from 'react-icons/ai'
import { GiCampCookingPot, GiElectric } from 'react-icons/gi'

const Features = () => {
    return (
        <div className='row row-cols-6 gap-2 my-5 ms-5'>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <AiOutlinePhone style={{fontSize:'50px'}} />
                </div>
                <div>
                    <h3>Intercom</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <GiElectric style={{fontSize:'50px'}}/>
                </div>
                <div>
                    <h3>Electricity</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <AiOutlineSafety style={{fontSize:'50px'}}/>
                </div>
                <div>
                    <h3>Safety</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <GiCampCookingPot style={{fontSize:'50px'}} />
                </div>
                <div>
                    <h3>GAS</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <GiCampCookingPot style={{fontSize:'50px'}}/>
                </div>
                <div>
                    <h3>GAS</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <GiCampCookingPot style={{fontSize:'50px'}}/>
                </div>
                <div>
                    <h3>GAS</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <GiCampCookingPot style={{fontSize:'50px'}}/>
                </div>
                <div>
                    <h3>GAS</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <GiCampCookingPot style={{fontSize:'50px'}}/>
                </div>
                <div>
                    <h3>GAS</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <GiCampCookingPot style={{fontSize:'50px'}} />
                </div>
                <div>
                    <h3>GAS</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <GiCampCookingPot style={{fontSize:'50px'}} />
                </div>
                <div>
                    <h3>GAS</h3>
                </div>
            </div>


        </div>
    );
};

export default Features;