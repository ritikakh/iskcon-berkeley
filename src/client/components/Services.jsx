import React from "react";
import Menu from "./Menu";
import Carousel from "./Carousel";
import {SERVICES} from "../enums/menu.enum";

export default () =>
  <div className="container-fluid">
    <Menu page={SERVICES}/>
    <Carousel className={"myCarousel"}/>
    <div className="container-fluid"><br/>
      <h4 className="iskcon-h4">Services We Offer</h4>
      <p>Hare Krishna! Our temple is a perfect place for celebrating your weddings, birthdays, marriage
        anniversaries, punya tithis (anniversary dates of forefathers), Shraddha (memorial services), etc.
        We have available a 42 feet x 35 feet hall that can accommodate up to 100 guests depending
        upon your needs. Our kitchen can cater prasad free of  onion and garlic, sanctified vegetarian/vegan
        food preparations to your guests. Adjacent bathrooms, separate for men and women, are on
        the premises and so are our 26 parking spots.
      </p>
      <div>
        <label className = " iskcon-label">Please contact Shri Jagannath Swami Das at +1 510-540-9215 for a booking.</label><br/>
        {/*<label></label><br/>*/}
        {/*<label><b>Dr. Goel:</b> +1 650-713-1812</label><br/>*/}
        {/*<label><b>Shri Prem Chaudhary:</b> +1 415-810-0801</label><br/>*/}

      </div>
    </div>
  </div>
