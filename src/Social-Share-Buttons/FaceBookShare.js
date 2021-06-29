import React from 'react'
import { FacebookShareButton,} from "react-share";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";

function FaceBookShare() {
  const shareURL = "http://collegereco.com";
  const shareHashTag = "#collegeRecommendation";
  const shareTitle = "College Recommendations from Collegereco.com";
    
    return (
      <IconButton
        aria-label='account of current user'
        aria-controls='primary-search-account-menu'
        aria-haspopup='true'
        color='inherit'
      >
        <FacebookShareButton
          url={shareURL}
          quote={shareTitle}
          hashtag={shareHashTag}
        >
          <FacebookIcon />
        </FacebookShareButton>
      </IconButton>
    );
}

export default FaceBookShare
