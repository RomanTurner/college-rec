import React from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Link from "@material-ui/core/Link";
import Collapse from "@material-ui/core/Collapse";
import fallbackImg from "./img/placeholder-img.png";
import PublicIcon from "@material-ui/icons/Public";
import SchoolIcon from "@material-ui/icons/School";
import WcIcon from "@material-ui/icons/Wc";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import LanguageIcon from "@material-ui/icons/Language";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "300px",
    width: "100%",
  },
  image: {
    maxWidth: "300px",
    minWidth: "300px",
    width: "100%",
  },
  details: {
    paddingLeft: "10px",
    width: "80vw",
  },
  loading: {
    justifySelf: "center",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function FullscreenCard({
  HBCU,
  MENONLY,
  WOMENONLY,
  control,
  avg_ACT,
  avg_SAT,
  stabbr,
  admission_rate,
  avg_tuition,
  city,
  schoolname,
  student_pop,
  url,
  id,
  image,
  description,
  results,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    
  const preventDefault = (event) => event.preventDefault();
  //formats the average tuition
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  //checks Admission Rate
  let adminRate;
  if (admission_rate !== "No data available") {
    adminRate = Math.floor(admission_rate * 100);
  }

    const yesOrNo = (value) => {
        if (value) {
          return 'Yes.'
        } else {
            return 'No.'
      }
    }
  
  if (image === "No image") image = fallbackImg;
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

    return (
      <Grow
        in={results}
        style={{ transformOrigin: "0 0 0" }}
        {...(results ? { timeout: 1000 } : {})}
      >
        <Grid item xs={12}>
          <Card className={classes.root} key={id}>
            <div className={classes.details}>
              <CardContent key={id}>
                <Typography key={id} gutterBottom variant='h5' component='h2'>
                  {schoolname}
                </Typography>
                <Grid container spacing={1} xs={12}>
                  <Grid container spacing={1} xs={12}>
                    <Grid item>
                      <LocationCityIcon />
                    </Grid>
                    <Grid item>
                      <Typography
                        key={id}
                        variant='body1'
                        color='textSecondary'
                        component='p'
                      >
                        Location: {`${city}, ${stabbr}`}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} xs={12}>
                    <Grid item>
                      <GroupAddIcon />
                    </Grid>
                    <Grid item>
                      <Typography
                        key={id}
                        variant='body1'
                        color='textSecondary'
                        component='p'
                      >
                        Admision Rate : {adminRate}%
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} xs={12}>
                    <Grid item>
                      <MonetizationOnIcon />
                    </Grid>
                    <Grid item>
                      <Typography
                        key={id}
                        variant='body1'
                        color='textSecondary'
                        component='p'
                      >
                        Average Tuition Cost : {formatter.format(avg_tuition)}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} xs={12}>
                    <Grid item={4}>
                      <PeopleOutlineIcon />
                    </Grid>
                    <Grid item={8}>
                      <Typography
                        key={id}
                        variant='body1'
                        color='textSecondary'
                        component='p'
                      >
                        Student Population : {student_pop}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} xs={12}>
                    <Grid item={4}>
                      <LanguageIcon />
                    </Grid>
                    <Grid item={8}>
                      <Typography
                        key={id}
                        variant='body1'
                        color='textSecondary'
                        component='p'
                      >
                        Website:
                        <Link
                          rel='noreferrer'
                          target='_blank'
                          to={`http://${url}`}
                          onClick={preventDefault}
                        >
                          {" "}
                          {url}
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} xs={12}>
                    <Grid item={12}>
                      <Typography
                        key={id}
                        variant='body1'
                        color='textSecondary'
                        component='p'
                      >
                        {description}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label='show more'
                      >
                        <ExpandMoreIcon />{" "}
                      </IconButton>
                    </Grid>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>
                      <CardContent>
                        <Grid container spacing={1}>
                          <Grid item={4}>
                            <PublicIcon />
                          </Grid>
                          <Grid item={8}>
                            <Typography
                              key={id}
                              variant='body1'
                              color='textSecondary'
                              component='p'
                            >
                              {control}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                          <Grid item={4}>
                            <WcIcon />
                          </Grid>
                          <Grid item={8}>
                            <Typography
                              key={id}
                              variant='body1'
                              color='textSecondary'
                              component='p'
                            >
                              Women Only? {yesOrNo(WOMENONLY)}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                          <Grid item={4}>
                            <WcIcon />
                          </Grid>
                          <Grid item={8}>
                            <Typography
                              key={id}
                              variant='body1'
                              color='textSecondary'
                              component='p'
                            >
                              Men Only? {yesOrNo(MENONLY)}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                          <Grid item={4}>
                            <SchoolIcon />
                          </Grid>
                          <Grid item={8}>
                            <Typography
                              key={id}
                              variant='body1'
                              color='textSecondary'
                              component='p'
                            >
                              HBCU: {yesOrNo(HBCU)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Collapse>
                  </Grid>
                </Grid>
              </CardContent>
            </div>
            <CardMedia
              className={classes.image}
              image={image}
              title={`image of ${schoolname} campus`}
            />
          </Card>
        </Grid>
      </Grow>
    );
}
