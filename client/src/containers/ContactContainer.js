import React, { Fragment } from "react";
import {FacebookIcon, TwitterIcon,RedditIcon} from "react-share";

function ContactContainer() {
    
    return (
      <div className="styles">
        <a>
          <FacebookIcon icon={FacebookIcon} />
        </a>
        <a>
          <TwitterIcon icon={TwitterIcon} />
        </a>
        <a
          href="https://www.reddit.com/r/Cheese/"
          >
          <RedditIcon icon={RedditIcon} />
        </a>
      </div>
    );

}

export default ContactContainer; 
