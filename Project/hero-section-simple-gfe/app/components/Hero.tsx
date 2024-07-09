import React, { FC } from "react";
import '../hero.css';
import Image from "next/image";
import prism from '../assets/prism.png'

type Props = {};

const Hero: FC<Props> = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="wrapper-inner">
                <div className="wrapper-inner-1">
                <div className="wrapper-inner-1-1">
                    <h1>Well Crafted Abstract Images</h1>
                    <p>High quality abstract images for your projects, wallpaper and presentations.</p>
                </div>
                <div className="wrapper-inner-1-2">
                    <button className="button-1">Learn more</button>
                    <button className="button-2">See pricing</button>
                </div>
                </div>
                <div className="wrapper-inner-2">
                    <Image className="image" src={prism} alt=""/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
