import React from 'react'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsSuitHeart } from "react-icons/bs";
import { GiShare } from "react-icons/gi";
import { Carousel } from "react-carousel-minimal";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "./ProductDetails.css"

const ProductDetails = () => {
  const details = JSON.parse(localStorage.getItem("samyak")) || [];

  const data =[
    {
      image: details[0].heroImage,
    },
    {
      image: details[0].altImage || details[0].heroImage,
    },
  ];

  const nippu = JSON.parse(localStorage.getItem("ishika")) || [];
  const handleStorage =() =>{
    alert('added to cart');

    nippu.push(details[0]);
    localStorage.setItem("ishika",JSON.stringify(nippu));
  };
  return (
    <>
    <Header />
    <Navbar />
    <div className="pddiv1">
      SEPHORA / Hugo Boss / Women / Beauty /{" "}
      <span id="pdspan">
        {details[0].background == "hair"
        ? "Face Serum & Treatments" 
        : "Eyeliner & Lip Stick"}{" "}
      </span>
    </div>
    <div id="maindiv">
      <div id="miandivsubdiv1">
        <div id="car1">
          <p>
            <IoIosArrowUp />
          </p>
          <div><img src={details[0].heroImage} alt="" />
          </div>
          <div>
            {" "}
            <img src={details[0].altImage  || details[0].heroImage} alt="" />
          </div>
          <p>
            {" "}
            <IoIosArrowDown />
          </p>
        </div>
        <div id="car2">
          <Carousel
          data={data}
          time={1000}
          width="600px"
          height="500px"
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconSize="60px"
          slideBackgroundColor="aqua"
          slideImageFit="cover"
          />
        </div>
      </div>
      <div id="miandivsubdiv2">
        {details.map((e) => (
          <div>
            <p id="miandivsubdiv2p1">{e.brandName}</p>
            <p id="miandivsubdiv2p2">{e.displayName}</p>
            <p id="miandivsubdiv2p3"><span>★★★★★</span>(
              {Math.floor(Math.random() * (100 -1 + 1)) + 1 } ratings)
              </p>
            <p id="miandivsubdiv2b">{e.currentSku.listPrice} <AiOutlineInfoCircle /></p>
            <p id="miandivsubdiv2p4">SIZE</p>
            <p id="miandivsubdiv2p5">{details[0].background == "hair" ? "3.5 g" : "30 ML"}

            </p>
            <div id="miandiver1">
              <div id="miandiver2">
                <AiOutLineInfoCircle />
              </div>
              <div id="miandiver3">
                <p id="z">IMPORTANT</p>
                <p>
                  All products that will be shipped will have a <br />
                  shelf-life more than 8 months to 3 years.
                </p>
                </div>
            </div>
            <p id="miandivsubdiv2p6">
              COLOR: <span>Available in {e.moreColors} more colors</span>
            </p>
            <button id="maindivbtn1" onClick={handleStorage}>ADD TO BAG</button>
            <div id="miandiver4">
              <div id="miandiver5">
                <p id="zqp1">
                  <BsSuitHeart />
                  </p>
                  <p id="zqp2">FAVORITE</p>
                  </div>
                  <div id="miandiver5"><p id="zqp3">
                    <GiShare />
                    </p>
                    <p id="zqp2">SHARE</p>
                    </div>
            </div>
            <div id="miandiver6">
              <div id="miandiver7">
                <img src="https://static.nnnow.com/client/assets/images/pdp/pdp_non_returnable_logo.png" alt="" />
              </div>
              <div id="miandiver8">
                <p id="iqoop1">RETURN POLICY ON THIS ITEM</p>
                <p id="iqoop2">This item is non-returnable.</p>
              </div>
            </div>
            <img src="https://static.nnnow.com/client/assets/images/pdp/pdp_desktop_1.jpg" alt="" />
         <p id='iqooa1'>DELIVERY/STORE OPTIONS :</p>
         <p id="iqooa2">Enter your pincode to view delivery & store options</p>
         <div id="laster">
          <input type="text" />
          <button>CHECK</button>
         </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    
    </>
    
  )
}

export default ProductDetails
