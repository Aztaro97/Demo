import React from 'react'
// import {Container} from "react-bootstrap"
import "./sidebar.css"

import img1 from "../../img/sidebar/img1.png"
import img2 from "../../img/sidebar/img2.png"
import img3 from "../../img/sidebar/img3.png"
import img4 from "../../img/sidebar/img4.png"
import img5 from "../../img/sidebar/img5.png"
import img6 from "../../img/sidebar/img6.png"
import img7 from "../../img/sidebar/img7.png"
import img8 from "../../img/sidebar/img8.png"

function Sidebar() {
    return (
        <div className="sidebar" >
            <ul className="sidebar__menu">
                <li>
                    <a href="#/">
                        <img src={img1} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <img src={img2} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <img src={img3} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <img src={img4} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <img src={img5} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <img src={img6} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <img src={img7} alt="" />
                    </a>
                </li>
                <li>
                    <a href="#/">
                        <img src={img8} alt="" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
