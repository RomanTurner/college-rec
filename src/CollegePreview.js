import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    padding: theme.spacing(6),
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  media: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));

export default function CollegePreview({results}) {
  const classes = useStyles();
  const history = useHistory();

  if (!results) {
    return (<div>No Results</div>)
  }

  // const handleClick = (college) => {
  //   const name = college.name.split(" ").join("")
  //   history.push(`/colleges/${name}`)
  // };
//debugger
  const content = results.results.map((college) => 
  {
   const{ admission_rate,
            avg_tuition,
            city,
            schoolname,
            state,
            student_pop,
            url} = college
            
    return (
      <Grid spacing={4} className={classes.grid}>
        <Card className={classes.media}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {schoolname}
            </Typography>
            <Typography variant='body1' color='textSecondary' component='p'>
              College Location State : {state}
            </Typography>
            <Typography variant='body1' color='textSecondary' component='p'>
              College Location City : {city}
            </Typography>
            <Typography variant='body1' color='textSecondary' component='p'>
              College Admision Rate : {admission_rate}
            </Typography>
            <Typography variant='body1' color='textSecondary' component='p'>
              College Average Tuition Cost : {avg_tuition}
            </Typography>
            <Typography variant='body1' color='textSecondary' component='p'>
              College Student Population : {student_pop}
            </Typography>
            <Typography variant='body1' color='textSecondary' component='p'>
              College URL : {url}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
    );

  


  return content;
  
}


  {
    /* <CardActions>
          <Button onClick={() => handleClick(college)} size='small' color='primary'>
            Learn More
          </Button>
        </CardActions> */
  }