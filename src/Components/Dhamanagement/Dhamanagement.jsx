import React from 'react'
import {Navbar} from './Navbar';
import Footer from './Footer';
import './Dhamanagement.css';
import { Link } from "react-router-dom";

export const Dhamanagement = () => {
  return (
    
    <div>
    <div className='management'><Navbar/></div>
        <div className='middle_section'>
            <div className='heading'>
                <div className='heading_content'>
                <h2>DHA Management</h2>
                </div>
                <button className='btn_1'>
                <Link to={"/dharequest"} className="Link">
                DHA Request
              </Link></button>
                <button className='btn_2'>Add DHA</button>
            </div>
            <div className='option'>
                <table className='table'>
                    <thead>
                        <tr className='table_heading_row'>
                            <th className='table_heading_data'>DHA Name</th>
                            <th className='table_heading_data'>Email</th>
                            <th className='table_heading_data'>Contact</th>
                            <th className='table_heading_data'>Total Booking</th>
                            <th className='table_heading_data'>Total Earnings</th>
                            <th className='table_heading_data'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='table_body'>
                        <tr className='table_row'>
                            <td className='table_data'>Jacob Jones</td>
                            <td className='table_data'>email@email.com</td>
                            <td className='table_data'>+91 123 456 7890</td>
                            <td className='table_data'>12</td>
                            <td className='table_data'>Rs. 5000</td>
                            <td className='table_data'><button className='table_btn_1'>offline</button></td>
                        </tr>
                        <tr className='table_row'>
                            <td className='table_data'>Darrell Steward</td>
                            <td className='table_data'>email@email.com</td>
                            <td className='table_data'>+91 123 456 7890</td>
                            <td className='table_data'>12</td>
                            <td className='table_data'>Rs. 5000</td>
                            <td className='table_data'><button className='table_btn_2'>online</button></td>
                        </tr>
                        <tr className='table_row'>
                            <td className='table_data'>Esther Howard</td>
                            <td className='table_data'>email@email.com</td>
                            <td className='table_data'>+91 123 456 7890</td>
                            <td className='table_data'>12</td>
                            <td className='table_data'>Rs. 5000</td>
                            <td className='table_data'><button className='table_btn_1'>offline</button></td>
                        </tr>
                        <tr className='table_row'>
                            <td className='table_data'>Arlene McCoy</td>
                            <td className='table_data'>email@email.com</td>
                            <td className='table_data'>+91 123 456 7890</td>
                            <td className='table_data'>12</td>
                            <td className='table_data'>Rs. 5000</td>
                            <td className='table_data'><button className='table_btn_2'>online</button></td>
                        </tr>
                        <tr className='table_row'>
                            <td className='table_data'>jane Cooper</td>
                            <td className='table_data'>email@email.com</td>
                            <td className='table_data'>+91 123 456 7890</td>
                            <td className='table_data'>12</td>
                            <td className='table_data'>Rs. 5000</td>
                            <td className='table_data'><button className='table_btn_2'>Online</button></td>
                        </tr>
                        <tr className='table_row'>
                            <td className='table_data'>Ralph Edwards</td>
                            <td className='table_data'>email@email.com</td>
                            <td className='table_data'>+91 123 456 7890</td>
                            <td className='table_data'>12</td>
                            <td className='table_data'>Rs. 5000</td>
                            <td className='table_data'><button className='table_btn_2'>Online</button></td>
                        </tr>
                    </tbody>
                </table>

                <div className='pagination'>
                    <a href=''className='active'>1</a>
                    <a href=''>2</a>
                    <a href=''>3</a>
                    <a href=''>...</a>
                    <a href=''>10</a>

                </div>
            </div>
        </div>
        <div className='footer_dha'><Footer/></div>
    </div>

  )
}

export default Dhamanagement
