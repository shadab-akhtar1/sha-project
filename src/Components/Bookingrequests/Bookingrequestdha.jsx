import React,{useState} from 'react';
import './Bookingrequestdha.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import pharimg from '../Assets/Ellipse 2 (1).jpg';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {Footer} from '../Dhamanagement/Footer';


export const Bookingrequestdha = () => {
    const[toggleButton,setToggleButton]=useState(false);
    const handleClick=()=>{
        setToggleButton(!toggleButton)
    }
  return (
    <>
    <nav className='bookingrequests_pharmabooking_navbar_doctorcase'>
        <div className='bookingrequests_pharmabooking_navbar_logo_doctorcase'>
        <img src={Weblogo} alt="logo_doctorcase" />
        </div>

        <ul className='bookingrequests_pharmabooking_nav_links_doctorcase'>
            <li className='bookingrequests_pharmabooking_list_item_doctorcase'>Dooper At Home</li>
            <li className='bookingrequests_pharmabooking_list_item_doctorcase'>Lab Tesst </li>
            <li className='bookingrequests_pharmabooking_list_item_doctorcase'>Our Network < FaCaretDown/></li>
            <li className='bookingrequests_pharmabooking_list_item_doctorcase'>About Us</li>
            <li className='bookingrequests_pharmabooking_list_item_doctorcase'>Contact Us</li>
            <li className='bookingrequests_pharmabooking_list_item_doctorcase'>Join Us With <FaCaretDown/></li>
            <li className='bookingrequests_pharmabooking_list_item_1_dhacase'><img src={profile} alt="" className='bookingrequests_pharmabooking_jaydoctor_profile'/>Jaydeep Sakhiya <FaCaretDown/></li>
            <li className='bookingrequests_pharmabooking_list_item_1_doctorcase'><FaBell className='bookingrequests_pharmabooking_icons_bell_doctorcase'/></li>
            <li className='bookingrequests_pharmabooking_list_item_1_doctorcase_2'>< BsTelephone className='bookingrequests_pharmabooking_phone_icon_doctorcase'/></li>
        </ul>

    </nav>

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
            <div className='bookingrequest_pharmacy_management_container_4_urgent'>Urgent Case <FaCaretDown className='bookingrequest_pharmacy_management_container_4_icon'/></div>

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
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequest_phar_vaac_1'>Symptom 1</div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequest_phar_vaac_2'>Symptom 2 </div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequest_phar_vaac_3'>Symptom 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_down_3'>
                        Earning : 4400
                        </div>

                    </div>
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
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
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequest_phar_vaac_1'>Vaccine 1</div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequest_phar_vaac_2'>Vaccine 2 </div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequest_phar_vaac_3'>Vaccine 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_down_3'>
                        Earning : 4400
                        </div>

                    </div>
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
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
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequest_phar_vaac_1'>Vaccine 1</div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequest_phar_vaac_2'>Vaccine 2 </div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequest_phar_vaac_3'>Vaccine 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_down_3'>
                        Earning : 4400
                        </div>

                    </div>
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
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
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequest_phar_vaac_1'>Vaccine 1</div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequest_phar_vaac_2'>Vaccine 2 </div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequest_phar_vaac_3'>Vaccine 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_down_3'>
                        Earning : 4400
                        </div>

                    </div>
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
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
export default Bookingrequestdha