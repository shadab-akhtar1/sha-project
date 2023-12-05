import React from 'react';
import './Bookingdoctorcase.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import userpic from "../Assets/Ellipse 3.jpg";
import elipse from "../Assets/Ellipse 2.jpg";
import dhaimage from "../Assets/Image.jpg";
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import vid from "../Assets/Frame 12431.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import {Footer} from '../Dhamanagement/Footer';

export const Bookingdoctorcase = () => {
  return (
    <>
    <nav className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_navbar_doctorcase'>
        <div className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_navbar_logo_doctorcase'>
        <img src={Weblogo} alt="logo_doctorcase" />
        </div>

        <ul className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_nav_links_doctorcase'>
            <li className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Dooper At Home</li>
            <li className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Lab Tesst </li>
            <li className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Our Network < FaCaretDown/></li>
            <li className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>About Us</li>
            <li className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Contact Us</li>
            <li className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Join Us With <FaCaretDown/></li>
            <li className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_list_item_1_dhacase'><img src={profile} alt="" className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_jaydoctor_profile'/>Jaydeep Sakhiya <FaCaretDown/></li>
            <li className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_list_item_1_doctorcase'><FaBell className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_icons_bell_doctorcase'/></li>
            <li className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_list_item_1_doctorcase_2'>< BsTelephone className='bookingdoctorcase_dhaassign_bookingrequests_pharmabooking_phone_icon_doctorcase'/></li>
        </ul>

    </nav>

    <div className='bookingdoctorcase_middle_container_dha_case_details'>
      <div className='bookingdoctorcase_middle_container_heading_dha_case_details'>
        <div className='bookingdoctorcase_middle_container_heading_1_dha_case_details'>
            <Link to={"/"}>
            <div className='arr_div'>< PiArrowLeftFill className='bookingdoctorcase_details_arrow_case_dha'/></div>
            </Link>
          <h2>Case #123456</h2>
        </div>
       </div>

            <div className='bookingdoctorcase_third_container_dha_case_details'>
                <div className='bookingdoctorcase_third_container_left_dha_case_details'>
                    <div className='bookingdoctorcase_dha_case_details_userprofile'>
                        <div className='bookingdoctorcase_dha_case_details_userprofile_left'>
                        <div className='bookingdoctorcase_dha_case_details_userprofile_profile'>
                            <img src={userpic} alt="userimage" />
                        </div>
                        <div className='bookingdoctorcase_dha_case_details_userprofile_info'>
                            <ul>
                                <li className='bookingdoctorcase_dha_li_1_case'>Patient Name</li>
                                <li className='bookingdoctorcase_dha_li_2_case'>xyz,street name</li>
                                <li className='bookingdoctorcase_dha_li_3_case'>Age:32|Gender:Male|Blood Group:O+</li>
                                <li className='bookingdoctorcase_dha_li_4_case'>Height:6"3inches|Weight:76</li>
                            </ul>
                        </div>
                        </div>
                        <div className='bookingdoctorcase_dha_case_details_userprofile_info_2'>
                            <div className='bookingdoctorcase_dha_case_details_userprofile_info_2_1'><FaPhoneAlt className='bookingdoctorcase_dha_case_details_userprofile_info_2_1_icon'/></div>
                            <div className='bookingdoctorcase_dha_case_details_userprofile_info_2_2'><HiLocationMarker className='bookingdoctorcase_dha_case_details_userprofile_info_2_1_icon1'/></div>

                        </div>
                        
                    </div>
                    <div className='bookingdoctorcase_dha_case_detail_service_type'>
                        <div className='bookingdoctorcase_dha_case_detail_service_name'>
                            <h3>Service Type:</h3>
                            <p>Non Urgent case</p>

                        </div>
                    </div>
                    <div className='bookingdoctorcase_dha_case_detail_symptom'>
                        <div className='bookingdoctorcase_dha_case_deatil_symptom_1'>
                            <div className='bookingdoctorcase_dha_case_detail_symptom_left'>
                                <div className='bookingdoctorcase_dha_case_detail_symptom_left_1'>Symptom 1</div>
                                <div className='bookingdoctorcase_dha_case_detail_symptom_left_1'>Symptom 2</div>
                                <div className='bookingdoctorcase_dha_case_detail_symptom_left_1'>Symptom 3</div>
                            </div>
                            <div className='bookingdoctorcase_dha_case_detail_symptom_right'>
                                <button>View Prescription</button>
                            </div>
                        </div>

                    </div>
                    <div className='bookingdoctorcase_dha_case_detail_complet'>
                        <div className='bookingdoctorcase_dha_case_detail_completion'><p>Completed</p></div>
                        <div className='bookingdoctorcase_dha_case_detail_time'>
                
                            <p className='bookingdoctorcase_dha_case_detail_time_1'><PiCalendarBlankLight className='bookingdoctorcase_calen'/>13 june,2023</p>
                            <p className='bookingdoctorcase_dha_case_detail_time_2'><CiClock2 className='bookingdoctorcase_dha_case_detail_clock'/>09:00AM</p>
                        </div>
                    </div>

                    <div className='bookingdoctorcase_dha_case_detail_para'>
                        <div className='bookingdoctorcase_dha_case_detail_para_main'>
                            <div className='bookingdoctorcase_dha_case_detail_para_main_left'>
                                <h4>Patient's Note</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className='bookingdoctorcase_dha_case_detail_para_main_right'>
                                <h4>Patient's Video</h4>
                                <img src={vid} alt="" />
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className='bookingdoctorcase_dha_case_detail_para_bottom'>
                            <div className='bookingdoctorcase_dha_case_detail_para_bottom_head'><h3>Vitals Recorded by DHA</h3></div>
                            <div className='bookingdoctorcase_dha_case_detail_para_bottom_mid'>
                                <div className='bookingdoctorcase_dha_case_detail_para_bottom_mid_left'>
                                <img src={elipse} alt="" />
                                    <div className='bookingdoctorcase_dha_case_detail_para_bottom_mid_left_list'>
                                    
                                        <ul>
                                            <li className='bookingdoctorcase_dha_case_detail_list'>DHA Name</li>
                                            <li className='bookingdoctorcase_dha_case_detail_list_item'>Degree</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='bookingdoctorcase_dha_case_detail_para_bottom_mid_right'>
                                    <p>< MdCall className='bookingdoctorcase_dha_case_detail_call'/>+91 123 456 7890</p>
                                </div>
                            </div>
                            <div className='bookingdoctorcase_dha_case_detail_para_bottom_bot'>
                                <button>View Vitals Report</button>
                            </div>

                        </div>

                    <div className='bookingdoctor_dha_case'>
                        
                        <div className='bookingdoctor_dha_case_2'><button>Assign Doctor</button></div>

                    </div>
                
                </div>
                <div className='bookingdoctorcase_third_container_right_dha_case_details'>
                    <div className='bookingdoctorcase_third_container_right_case_details_first'>
                        <div className='bookingdoctorcase_third_container_right_case_details_first_1'>
                            <h2>Order details</h2>
                        </div>
                        <div className='bookingdoctorcase_third_container_right_case_details_first_2'>
                            <ul>
                                <li className='bookingdoctorcase_third_container_right_case_details_first_list'>Service 1</li>
                                <li className='bookingdoctorcase_third_container_right_case_details_first_item'>Rs 546</li>
                            </ul>
                        </div>
                        <div className='bookingdoctorcase_third_container_right_case_details_first_3'>
                            <ul>
                                <li className='bookingdoctorcase_third_container_right_case_details_first_list'>GST</li>
                                <li className='bookingdoctorcase_third_container_right_case_details_first_item'>Rs 78</li>
                            </ul>
                        </div>
                        <div className='bookingdoctorcase_third_container_right_case_details_first_4'>
                            <ul>
                                <li className='bookingdoctorcase_third_container_right_case_details_first_list'>Other Charges</li>
                                <li className='bookingdoctorcase_third_container_right_case_details_first_item'>Rs 78</li>
                                
                            </ul>
                        </div>

                        <div className='bookingdoctorcase_third_container_right_case_details_first_5'>
                            <ul>
                                <li className='bookingdoctorcase_third_container_right_case_details_first_list'>Sub Total</li>
                                <li className='bookingdoctorcase_third_container_right_case_details_first_item'> Rs 600</li>
                            </ul>
                        </div>
                        <div className='bookingdoctorcase_third_container_right_case_details_first_6'>
                            <ul>
                                <li className='bookingdoctorcase_third_container_right_case_details_first_list'>Discount</li>
                                <li className='bookingdoctorcase_third_container_right_case_details_first_item'>Rs 100</li>
                            </ul>
                        </div>

                        <div className='bookingdoctorcase_third_container_right_case_details_first_7'>
                            <ul>
                                <li className='bookingdoctorcase_third_container_right_case_details_first_list'>Total</li>
                                <li className='bookingdoctorcase_third_container_right_case_details_first_item'>Rs 500</li>
                            </ul>
                        </div>

                    </div>
                    
                    
                    

                    
                </div>

            </div>
    </div>
    <div className='bookingdoctordhacase_footer_pharmacy'><Footer/></div>
    
    </>
  )
}
export default Bookingdoctorcase