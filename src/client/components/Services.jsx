import React from "react";
import Menu from "./menu";
import Carousel from "./Carousel";

export default () =>
  <div className="container-fluid">
    <Menu />
    <Carousel className={"myCarousel"}/>
    <div className="container-fluid"><br/>
      <h4 className="iskcon-h4">Services we offer</h4>
      <p>Hare Krishna! Our temple is a perfect place for celebrating your weddings, birthdays, marriage
        anniversaries, punya tithis (anniversary dates of forefathers), Sraddha (memorial services), etc.
        We have available a 42 feet x 35 feet hall that can accommodate up to 100 guests depending
        upon your needs. Our kitchen can cater onion and garlic free prasad, sanctified vegetarian/vegan
        food preparations to your guests. Adjacent bathrooms, separate for men and women, are on
        the premises and so are our 26 parking spots.
      </p>
      <div>
        <label className = " iskcon-label">Please contact us for a booking:</label><br/>
        <label><b>Shri Jagannath Swami Das:</b> +1 510-540-9215</label><br/>
        {/*<label><b>Dr. Goel:</b> +1 650-713-1812</label><br/>*/}
        {/*<label><b>Shri Prem Chaudhary:</b> +1 415-810-0801</label><br/>*/}

      </div>
    </div>
  </div>
