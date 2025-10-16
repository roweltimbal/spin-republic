import { Typography, Box, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import heroImg from "../../assets/heroimg.jpg";
import heroImgTwo from '../../assets/spinRepublicTeamsTwo.jpg'
import logo from "../../assets/srblackandwhitepngcropped.png";
import logoBlack from "../../assets/srblackpngcropped.png";
import Ctabutton from "../../components/button/button-cta.component";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <Outlet />
      <Box
        sx={{
          height: "90vh",
          width: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImgTwo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="Spin Republic Logo"
          style={{ width: "600px", height: "auto", marginBottom: "10px" }}
        />
         <Typography variant="h4" sx={{ fontWeight: 400, color: "#fff", mb: 2 }}>
          See you at the tables.
        </Typography>

        <Typography variant="subtitle1" sx={{ fontWeight: 300, color: "#fff", mb: 3 }}>
          Please sign in or create an account to view and post your open play schedule.
        </Typography>

        <Ctabutton variant="contained" color="primary" message="Sign in" />

        <Typography
         variant="subtitle2"
         sx={{
          fontWeight: 300,
          color: "#fff",
          mt: "10px",
          mb: 3,
         }}
        >
          Don't have an account?
           <MuiLink
    component={Link}
    to="/signup" // 👈 change this route to your signup page
    sx={{
      color: "#fff",
      fontWeight: 300,
      textDecoration: "underline",
      ml: "10px",
      "&:hover": {
        color: "#CE0D0D", // 👈 your brand red on hover
        textDecoration: "none",
      },
    }}
  >
    Create an account here.
  </MuiLink>
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Home;
