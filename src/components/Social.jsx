import React from "react";
import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path:"https://github.com/Duamajeed00"},
    {icon: <FaLinkedinIn />, path:"https://www.linkedin.com/in/dua-majeed-6b99482b4/"},
    // {icon: <FaYoutube />, path:""},
    {icon: <FaTwitter />, path:" https://x.com/majeed_dua91585?t=aJNRaTRviMk3nPtR0ffnoA&s=08"},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
            </div>
    )
}

export default Social;