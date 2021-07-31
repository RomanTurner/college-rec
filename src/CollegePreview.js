import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import FullscreenCard from "./FullscreenCard";
import MobileCard from "./MobileCard";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
export default function CollegePreview({ results }) {
   const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  
  if (!results) {
    return (
      <Grid container justify='center'>
        <CircularProgress />
      </Grid>
    );
  }
  
  const screen = results.results.map((college) => (
    <FullscreenCard {...college} results={results}/>
  ));

  const mobile = results.results.map((college) => (
    <MobileCard {...college} results={results}/>
  ));

  return matches ? screen : mobile;
}

//checks Image
//   if (image !== "No image") {
//     const img = new Image(image);
//     img.src = image
//     console.log({img})
//     if (img.naturalWidth === 0) {
//        image = fallbackImg;
//     }
//   } else {
//     image = fallbackImg;
//   };
