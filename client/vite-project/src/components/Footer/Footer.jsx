import React from "react";
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            velit sunt repellendus architecto voluptatum asperiores vitae ut
            rerum expedita quaerat, quo aspernatur cumque eligendi eius
            doloremque sint magnam ab, fugiat repellat voluptas deleniti
            accusantium commodi error quisquam. Minus perferendis fugiat
            provident! Ipsa ut repudiandae doloremque. Quidem sit exercitationem
            cumque eaque!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            velit sunt repellendus architecto voluptatum asperiores vitae ut
            rerum expedita quaerat, quo aspernatur cumque eligendi eius
            doloremque sint magnam ab, fugiat repellat voluptas deleniti
            accusantium commodi error quisquam. Minus perferendis fugiat
            provident! Ipsa ut repudiandae doloremque. Quidem sit exercitationem
            cumque eaque!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Lamastore</span>
          <span className="copyright">Copyright © 2023 All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/pay.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
