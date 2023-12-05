import React,{useState} from 'react';
import './Bookingdhastandalone.css';
import {Navbars} from '../Dhamanagement/Navbars';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import pharimg from '../Assets/Ellipse 2 (1).jpg';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {Footer} from '../Dhamanagement/Footer';


export const Bookingdhastandalone = () => {
    const[toggleButton,setToggleButton]=useState(false);
    const handleClick=()=>{
        setToggleButton(!toggleButton)
    }
  return (
    <>
    <div><Navbars/></div>
    <div className='bookingrequest_pharmacy_management_container'>
        <div className='bookingrequest_pharmacy_management_container_1'>
            <div className='bookingrequest_pharmacy_management_heading_box_1'><h2>Dashboard</h2></div>
            <div className='bookingrequest_pharmacy_management_heading_box_3'>
                <div className='bookingrequest_pharmacy_management_heading_box_2'><p>Availability</p>
            
                </div>
                <div className='toggle_booking_div'>
                    <div  className='toggle_booking'></div>
                    {toggleButton?<div onClick={handleClick} className='toggle_booking_left'></div>:
                    <div onClick={handleClick}className='toggle_booking_right'></div>}
                
                </div>
            </div>
        </div>
        <div className='bookingrequest_pharmacy_management_container_2'>
            <div className='bookingrequest_pharmacy_management_container_2_1'>
            <Link to={"/pharmamedicine"} className='bookingrequest_medicine_link'>
            <div className='bookingrequest_pharmacy_management_container_2_p_1'>DHA</div>
            </Link>
            <div className='bookingrequest_pharmacy_management_container_2_p_2'>Doctor</div>
            <div className='bookingrequest_pharmacy_management_container_2_p_2'>Pharmacy</div>
            <div className='bookingrequest_pharmacy_management_container_2_p_2'>Lab</div>
            </div>
            <div className='bookingrequest_pharmacy_management_container_2_2'>
                Sort by <FaCaretDown className='bookingrequest_pharmacy_management_icon'/>
            </div>
        </div>
        <div className='bookingrequest_pharmacy_management_container_4'>
            <div className='bookingrequest_pharmacy_management_container_4_urgent_pendingdha_standalone'>Standalone<FaCaretDown className='bookingrequest_pharmacy_management_container_4_icon'/></div>

        </div>
        
        <div className='bookingrequest_pharmacy_management_container_3'>
            <Link to={"/pharmabooking"} className='pahrma_boking_link'>
            <div className='bookingrequest_pharmacy_management_container_3_1'>
                <div className='bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    
                    <div className='pendingdha_standalone_card_upper_2'>
                        <div className='pendingdha_standalone_card_upper_2_left'>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div>
                        <div className='pendingdha_standalone_card_upper_2_right'><button>Nursing</button></div>
                    </div>
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='pendingdha_card_2_up_standalone'><button>Pending</button></div>
                        </div>
                        
                        <div className='pendingdha_bookingrequest_lab_card_2_left_standalone'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        
                        <div className='pendingdha_bookingrequest_lab_card_2_right_standalone'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                

            </div>
            </Link>
            <Link to={"/pharmabooking"} className='bookingrequest_pahrma_boking_link'>
            <div className='bookingrequest_pharmacy_management_container_3_2'>
                <div className='bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    
                        <div className='pendingdha_standalone_card_upper_2'>
                            <div className='pendingdha_standalone_card_upper_2_left'>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div>
                            <div className='pendingdha_standalone_card_upper_2_right'><button>Nursing</button></div>
                        </div>
                        
                    
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='pendingdha_card_2_up_standalone'><button>Pending</button></div>
                        </div>
                        <div className='pendingdha_bookingrequest_lab_card_2_left_standalone'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        
                        <div className='pendingdha_bookingrequest_lab_card_2_right_standalone'>
                        Height : 6” 3 inches | Weight : 76
                        </div>

                    </div>
                </div>
                

            </div>
            </Link>
            <Link to={"/pharmabooking"} className='bookingrequest_pahrma_boking_link'>
            <div className='bookingrequest_pharmacy_management_container_3_3'>
                <div className='bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    
                        <div className='pendingdha_standalone_card_upper_2'>
                            <div className='pendingdha_standalone_card_upper_2_left'>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div>
                            <div className='pendingdha_standalone_card_upper_2_right'><button>Nursing</button></div>
                        </div>
                        
                    
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='pendingdha_card_2_up_standalone'><button>Pending</button></div>
                        </div>
                        <div className='pendingdha_bookingrequest_lab_card_2_left_standalone'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        
                        <div className='pendingdha_bookingrequest_lab_card_2_right_standalone'>
                        Height : 6” 3 inches | Weight : 76
                        </div>

                    </div>
                </div>
                

            </div>
            </Link>
            <Link to={"/pharmabooking"} className='bookingrequest_pahrma_boking_link'>
            <div className='bookingrequest_pharmacy_management_container_3_4'>
                <div className='bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    
                        
                        <div className='pendingdha_standalone_card_upper_2'>
                            <div className='pendingdha_standalone_card_upper_2_left'>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div>
                            <div className='pendingdha_standalone_card_upper_2_right'><button>Nursing</button></div>
                        </div>
                        
                    
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='pendingdha_card_2_up_standalone'><button>Pending</button></div>
                            
                        </div>
                        
                        <div className='pendingdha_bookingrequest_lab_card_2_left_standalone'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        
                        <div className='pendingdha_bookingrequest_lab_card_2_right_standalone'>
                        Height : 6” 3 inches | Weight : 76
                        </div>

                    </div>
                </div>
                

            </div>
            </Link>

        </div>


        <div className='bookingrequest_pharmacy_pagination'>
                    <a href='' className='bookingrequest_anchi'><PiCaretDoubleLeftBold className='bookingrequest_pharma_less_1'/></a>
                    <a href='' className='bookingrequest_anchi'><PiCaretLeftBold className='bookingrequest_pharma_less_doctor'/></a>
                    <a href=''className='bookingrequest_anch_active'>1</a>
                    <a href='' className='bookingrequest_anchi'>2</a>
                    <a href='' className='bookingrequest_anchi'>3</a>
                    <a href='' className='bookingrequest_anchi'>...</a>
                    <a href='' className='bookingrequest_anchi'>10</a>
                    <a href='' className='bookingrequest_anchi'><PiCaretRightBold className='bookingrequest_pharma_less_doctor'/></a>
                    <a href='' className='bookingrequest_anchi'><PiCaretDoubleRightBold className='bookingrequest_pharma_less_doctor'/></a>

                </div>

    </div>
    <div className='bookingrequest_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Bookingdhastandalone