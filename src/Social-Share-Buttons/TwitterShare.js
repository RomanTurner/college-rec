import React from 'react'
import { TwitterShareButton } from "react-share";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";

function TwitterShare() {
  const shareUrl = "http://collegereco.com";
  const title = "College Recommendations from Collegereco.com";
    
    return (
      <IconButton
        aria-label='account of current user'
        aria-controls='primary-search-account-menu'
        aria-haspopup='true'
        color='inherit'
      >
        <TwitterShareButton
          url={shareUrl}
          title={title}
        >
          <TwitterIcon />
        </TwitterShareButton>
      </IconButton>
    );
}

export default TwitterShare;
