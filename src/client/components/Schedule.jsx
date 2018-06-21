import React from "react";
import Menu from "./Menu";
import Carousel from "./Carousel";
import {
  SCHEDULE
} from "../enums/menu.enum"

export default () =>
  <div className="container-fluid">
    <Menu page={SCHEDULE}/>
    <Carousel className={"myCarousel"}/>
    <div className="container-fluid"><br/>
      <h4 className="iskcon-h4">TEMPLE PROGRAM</h4>
        <label><b>Monday - Saturday Daily Schedule</b></label><br/>
        <table>
          <tr>
            <td width="30%">4.30 AM </td>
            <td width="20%"></td>
            <td width="50%">Mangal Arti</td>
          </tr>
          <tr>
            <td>5.00 AM</td>
            <td></td>
            <td>Deity Door Closes</td>
          </tr>
          <tr>
            <td>5.15 AM</td>
            <td></td>
            <td>Tulsi Puja</td>
          </tr>
          <tr>
            <td>7.00 - 7.15 AM</td>
            <td></td>
            <td>Guru Puja</td>
          </tr>
          <tr>
            <td>8.00 AM</td>
            <td></td>
            <td>Darshan Arti (Greeting the Deities)</td>
          </tr>
          <tr>
            <td>8.15 AM</td>
            <td></td>
            <td>Deity Door Closes</td>
          </tr>
          <tr>
            <td>8.15 - 8.45 AM</td>
            <td></td>
            <td>Listening to Shrila Praphupad's Vani</td>
          </tr>
          <tr>
            <td>8.45 - 8.55 AM</td>
            <td></td>
            <td>Prat Bhog Arti</td>
          </tr>
          <tr>
            <td>11.50 AM</td>
            <td></td>
            <td>Deity Door Closes</td>
          </tr>
          <tr>
            <td>12.30 PM</td>
            <td></td>
            <td>Raj Bhog Arti</td>
          </tr>
          <tr>
            <td>1.00 PM</td>
            <td></td>
            <td>Deity Door Closes for the Afternoon</td>
          </tr>
          <tr>
            <td>4.15 - 4.25 PM</td>
            <td></td>
            <td>Dhupa Arti</td>
          </tr>
          <tr>
            <td>6.00 PM</td>
            <td></td>
            <td>Deity Door Closes</td>
          </tr>
          <tr>
            <td>6.30 - 6.45 PM</td>
            <td></td>
            <td>Gaura Arti</td>
          </tr>
          <tr>
            <td>6.45 PM</td>
            <td></td>
            <td>Deity Door Closes</td>
          </tr>
          <tr>
            <td>8.30 PM</td>
            <td></td>
            <td>Shyana Arti</td>
          </tr>
          <tr>
            <td>9.00 PM</td>
            <td></td>
            <td>Temple Closes</td>
          </tr>
        </table>
      <br/>
        <label><b>Sunday Evening Special Schedule</b></label><br/>
        <table>
          <tr>
            <td width="38%">4.00 PM </td>
            <td width="62%">Guru Puja</td>
          </tr>
          <tr>
            <td>4.30 PM</td>
            <td>Tulsi Puja</td>
          </tr>
          <tr>
            <td>5.00 PM</td>
            <td>Gaura Arti</td>
          </tr>
          <tr>
            <td>5.45 PM</td>
            <td>Announcements, Sponsor's Recognition, Community News</td>
          </tr>
          <tr>
            <td>6.00 PM</td>
            <td>Lecture on Vedic Teachings</td>
          </tr>
          <tr>
            <td>6.45 PM</td>
            <td>Deity Door Closes</td>
          </tr>
          <tr>
            <td>7.00 PM</td>
            <td>Sunday Feast</td>
          </tr>
          <tr>
            <td>8.00 PM</td>
            <td>Shyana Arti</td>
          </tr>
          <tr>
            <td>9.00 PM</td>
            <td>Temple Closes</td>
          </tr>
        </table>
      <br/>
      <p className = "iskcon-label">Please Note: Subject to change to accomodate events and circumstances. Please call ahead if you need
      to confirm the schedule for a specific day/time.</p>
    </div>
  </div>
