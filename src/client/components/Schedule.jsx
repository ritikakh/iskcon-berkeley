import React from "react";
import Menu from "./menu";
import Carousel from "./Carousel";

export default () =>
  <div className="container-fluid">
    <Menu />
    <Carousel className={"myCarousel"}/>
    <div className="container-fluid"><br/>
      <h4 className="iskcon-h4">TEMPLE PROGRAM</h4>
        <label><b>Mon-Sat Daily Schedule</b></label><br/>
        <table>
          <tr>
            <td width="30%">4.00 - 4.55 AM </td>
            <td width="20%"></td>
            <td width="50%">Deity Door Opens, Mangal Arti</td>
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
            <td>Deity Door Opens, Darshan Arti(Greeting the Deities)</td>
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
            <td>Deity Door Opens, Prat Bhog Arti</td>
          </tr>
          <tr>
            <td>11.50 AM</td>
            <td></td>
            <td>Deity Door Closes</td>
          </tr>
          <tr>
            <td>12.30 PM</td>
            <td></td>
            <td>Deity Door Opens, Raj Bhog Arti</td>
          </tr>
          <tr>
            <td>1.00 PM</td>
            <td></td>
            <td>Deity Door Closes for the afteroon</td>
          </tr>
          <tr>
            <td>4.15 - 4.25 PM</td>
            <td></td>
            <td>Deity Door Opens, Dhupa Arti</td>
          </tr>
          <tr>
            <td>6.00 PM PM</td>
            <td></td>
            <td>Deity Door Closes</td>
          </tr>
          <tr>
            <td>4.15 - 4.25 PM</td>
            <td></td>
            <td>Deity Door Opens, Dhupa Arti</td>
          </tr>
          <tr>
            <td>6.30 - 6.45 PM</td>
            <td></td>
            <td>Deity Door Opens, Gaura Arti</td>
          </tr>
          <tr>
            <td>6.45 PM</td>
            <td></td>
            <td>Deity Door Closes</td>
          </tr>
          <tr>
            <td>8.30 PM</td>
            <td></td>
            <td>Deity Door Opens, Shyana Arti</td>
          </tr>
          <tr>
            <td>9.00 PM</td>
            <td></td>
            <td>Temple Closes</td>
          </tr>
        </table>
        <label><b>Sunday Evening Special Program Schedule</b></label><br/>
        <table>
          <tr>
            <td width="47.5%">4.00 PM </td>
            <td width="60%">Guru Puja</td>
          </tr>
          <tr>
            <td>4.30 PM</td>
            <td>Tulsi Puja</td>
          </tr>
          <tr>
            <td>5.00 PM</td>
            <td>Deity Door Opens, Gaura Arti</td>
          </tr>
          <tr>
            <td>5.45 PM</td>
            <td>Announcements, Sponsor's Recognition, Community News</td>
          </tr>
          <tr>
            <td>6.00 PM</td>
            <td>Vedic Teachings Lecture</td>
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
            <td>Deity Door Opens, Shyana Arti</td>
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