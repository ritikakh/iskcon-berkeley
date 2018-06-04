import React from "react";
import Menu from "./Menu";
import { DONATE } from "../enums/menu.enum";

export default () =>
  <div className="container-fluid">
    <Menu page={DONATE}/>
    <div className="container">
      <h2 className="iskcon-contribute">CONTRIBUTE</h2>
      <h6 className="iskcon-donate"> Donate By Check</h6>
      <p> Please mail your donation check, made out to "ISKCON Berkeley", to</p>

      ISKCON Berkeley<br />
      2334 Stuart St<br />
      Berkeley, CA 94705<br />
      <br />
      You can also drop your check at the temple at any time. Make sure to request a receipt from the office or gift shop assistant.<br />
      <br />
      <h5 className="iskcon-donate">Donation By Venmo</h5>
      <p>Please find us on Venmo @iskconberkeley</p>

      <h5 className="iskcon-donate">Donation By Paypal</h5>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="hosted_button_id" value="4F59HMQJDPL6Y"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
      </form>
      <br/>


      <h5 className="iskcon-donate"> Major Temple Expenses</h5>
      <h6 className="iskconH6">Festival Deity Worship</h6>
      Deity outfits - $1001<br/>
      Janmastami Flower Outfit(Midnight Aarti) - $251<br/>
      Jewelry - $151<br/>
      Festival Garlands - $151<br/>
      Festival Flower Arrangements - $201<br/>
      Prasadam feast - $201<br/>
      Deity Bathing (Abhisheka) - $108<br/><br/>
      <h6 className="iskconH6">Sunday Worship Service</h6>
      Prasadam feast - $151<br/>
      Deity Worship - $171<br/>
      Sunday Feast Deity Garlands - $71<br/><br/>
      <h6 className="iskconH6">Daily Deity Worship</h6>
      Full Day Deity Worship - $101<br/>
      Daily Deity Garlands - $51<br/>
      Morning Sweets and Aratika - $11<br/>
      Breakfast Offering and Aratika - $31<br/>
      Morning fruits and Aratika - $21<br/>
      Lunch Offering and Aratika - $51<br/>
      Afternoon fruits and Aratika - $21<br/>
      Dinner Offerings and Aratika - $31<br/>
      Evening Sweets and Aratika - $11<br/>
      Bedtime Milk and Sweets Offering - $11<br/>
    </div>
  </div>;

