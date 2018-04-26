import React from "react";
import Menu from "./menu";

export default () =>
  <div className="container-fluid">
    <Menu />
    <div className="container iskcon-contact">
      <h3 className="iskcon-contribute">CONTACT US</h3>
      Temple Address:<br/>
      &nbsp; ISKCON Berkeley<br/>
      &nbsp; 2334 Stuart St<br/>
      &nbsp; Berkeley, CA 94705<br/>
      <br/>
      &nbsp; Telephone : +1 (510) 540-9215<br/>
      <form>
        <label>
          Name:<br/>
          <input type="text" name="name" size="45" /><br/>
        </label>
        <br/>
        <label>
          Email Address:<br/>
          <input type="text" email="email" size="45"/><br/>
        </label>
        <br/>
        <label>
          Subject:<br/>
          <input type="text" subject="subject" size="45"/><br/>
        </label>
        <br/>
        <label>
          Message:<br/>
          <textarea type="text" message="message" rows="4" cols="50"/><br/>
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
