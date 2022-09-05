import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/Netflix" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/Netflix" },
  {
    Social: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCNG0bMYut0wL3C9BS5ffQXw",
  },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
