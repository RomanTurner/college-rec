import React from "react";
import { LinkedinShareButton } from "react-share";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function LinkedInShare() {
  const shareURL = "http://collegereco.com";
  return (
    <IconButton
      aria-label='account of current user'
      aria-controls='primary-search-account-menu'
      aria-haspopup='true'
      color='inherit'
    >
      <LinkedinShareButton
        url={shareURL}
      >
        <LinkedInIcon />
      </LinkedinShareButton>
    </IconButton>
  );
}

export default LinkedInShare;
