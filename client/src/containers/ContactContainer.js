import React from "react";
import {FacebookIcon,TwitterIcon,RedditIcon} from "react-share";

function ContactContainer() {
    
    return (
      <div className="social-container">
          <a
            href="https://www.facebook.com/CheesePageOfficial/"
            className="FB social"
          >
            <FacebookIcon icon={"FacebookIcon"} size="5rem" />
          </a>

          <a href="https://twitter.com/search?q=%23cheese&src=typeahead_click"
            className="TW social"
            >
            <TwitterIcon icon={"TwitterIcon"} size="5rem" />
          </a>

          <a href="https://www.reddit.com/r/Cheese/" className="RD social"
            >
            <RedditIcon icon={"RedditIcon"} size="5rem" />
          </a>

      </div>
    );



}

export default ContactContainer; 
