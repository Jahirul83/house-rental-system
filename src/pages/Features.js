import React from 'react';
import { AiOutlinePhone, AiOutlineSafety } from 'react-icons/ai'
import { GiCampCookingPot, GiElectric, GiGuards, GiCctvCamera, GiSecurityGate } from 'react-icons/gi'
import {BiWater} from 'react-icons/bi'
import {FaChild} from 'react-icons/fa'
import {MdRoofing} from 'react-icons/md'

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
                    <GiGuards style={{fontSize:'50px'}}/>
                </div>
                <div>
                    <h3>Security Guard</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <GiCctvCamera style={{fontSize:'50px'}}/>
                </div>
                <div>
                    <h3>CCTV</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <BiWater style={{fontSize:'50px'}}/>
                </div>
                <div>
                    <h3>WASA</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <GiSecurityGate style={{fontSize:'50px'}}/>
                </div>
                <div>
                    <h3>Guard Room</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <FaChild style={{fontSize:'50px'}} />
                </div>
                <div>
                    <h3>Child Allowed</h3>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center border border-4 rounded py-4'>
                <div>
                    <MdRoofing style={{fontSize:'50px'}} />
                </div>
                <div>
                    <h3>Roof Facility</h3>
                </div>
            </div>


        </div>
    );
};

export default Features;