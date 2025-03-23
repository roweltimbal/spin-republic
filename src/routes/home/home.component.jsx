import Box from "@mui/material/Box";
import heroImg from "../../assets/heroimg.jpg";
import logo from "../../assets/srblackandwhitepngcropped.png";
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
          backgroundImage: `url(${heroImg})`,
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
          style={{ width: "600px", height: "auto", marginBottom: "30px" }}
        />
        <Ctabutton variant="contained" color="primary" message="Buy Day Pass" />
      </Box>
    </Fragment>
  );
};

export default Home;
