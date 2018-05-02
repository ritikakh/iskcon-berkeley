import React from "react";
import Menu from "./menu";

export default () =>
  <div className="container-fluid">
    <Menu />
    <div className="container iskcon-contact">
      <h3 className="iskcon-contribute">CONTACT US</h3>
      <b>Temple Address:</b><br/>
      &nbsp; ISKCON Berkeley<br/>
      &nbsp; 2334 Stuart St<br/>
      &nbsp; Berkeley, CA 94705<br/>
      <br/>
      <b>Telephone :</b> +1 (510) 540-9215<br/>
      <b>Email:</b> iskconbayarea@gmail.com<br/>
      <b>Parking Information:</b> There are 26 parking spots on the temple property. Street parking is also available.
      On festival days, you may have to park in nearby commercial garages.<br/>
      <form>
        <br/>
        <label>
          Name:<br/>
          <input type="text" name="name" size="45" /><br/>
        </label>
        <br/>
        <label>
          Email Address:<br/>
          <input type="text" size="45"/><br/>
        </label>
        <br/>
        <label>
          Subject:<br/>
          <input type="text" size="45"/><br/>
        </label>
        <br/>
        <label>
          Message:<br/>
          <textarea type="text" rows="4" cols="50"/><br/>
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
