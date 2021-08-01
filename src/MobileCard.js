import clsx from "clsx";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import Grow from "@material-ui/core/Grow";
import WcIcon from "@material-ui/icons/Wc";
import { red } from "@material-ui/core/colors";
import Collapse from "@material-ui/core/Collapse";
import PublicIcon from "@material-ui/icons/Public";
import SchoolIcon from "@material-ui/icons/School";
import fallbackImg from "./img/placeholder-img.png";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import LanguageIcon from "@material-ui/icons/Language";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MobileCard({
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

  // checks to see if it is a valid link
  const httpCheck = "https://";
  if (!url.match(httpCheck)) url = `https://${url}`;

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
      return "Yes.";
    } else {
      return "No.";
    }
  };

  if (image === "No image") image = fallbackImg;

  return (
    <Grow
      in={results}
      style={{ transformOrigin: "0 0 0" }}
      {...(results ? { timeout: 1000 } : {})}
    >
      <Grid item xs={12}>
        <Card className={classes.root}>
          <CardHeader
            title={schoolname}
            subheader={
              <Link rel='noreferrer' target='_blank' href={url}>
                {url}
              </Link>
            }
          />
          <CardMedia
            className={classes.media}
            image={image}
            title={`Picture of ${schoolname} campus`}
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              {description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
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
              <Grid spacing={1} container xs={12}>
                <Grid item={4}>
                  <MonetizationOnIcon />
                </Grid>
                <Grid item={8}>
                  <Typography
                    key={id}
                    variant='body1'
                    color='textSecondary'
                    component='p'
                  >
                    Average Tuition: {formatter.format(avg_tuition)}
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
              <Grid spacing={1} container>
                <Grid item={4}>
                  <LanguageIcon />
                </Grid>
                <Grid item={8}>
                  <Typography>
                    <Link rel='noreferrer' target='_blank' href={url}>
                      {url}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
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
                  <LibraryAddCheckIcon />
                </Grid>
                <Grid item={8}>
                  <Typography
                    key={id}
                    variant='body1'
                    color='textSecondary'
                    component='p'
                  >
                    Avg ACT: {avg_ACT}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item={4}>
                  <LibraryAddCheckIcon />
                </Grid>
                <Grid item={8}>
                  <Typography
                    key={id}
                    variant='body1'
                    color='textSecondary'
                    component='p'
                  >
                    Avg SAT: {avg_SAT}
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
        </Card>
      </Grid>
    </Grow>
  );
}
