import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

import logoCropped from "../../assets/srblackpngcropped.png";

const pages = ["Contact Us", "Shop", "Sign In"];

function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={logoCropped}
                  alt="Spin Republic Logo"
                  style={{ height: 40, marginRight: 40 }}
                />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    component={Link}
                    onClick={handleCloseNavMenu}
                    to={
                      page === "Contact Us"
                        ? "/contactus"
                        : page === "Sign In"
                        ? "/auth"
                        : "/shop"
                    }
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
              flexGrow={1}
            >
              <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={logoCropped}
                  alt="Spin Republic Logo"
                  style={{ height: 40 }}
                />
              </Link>
            </Box>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              justifyContent="flex-end"
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={
                    page === "Contact Us"
                      ? "/contactus"
                      : page === "Sign In"
                      ? "/auth"
                      : "/shop"
                  }
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    "&:hover": { backgroundColor: "rgba(0,0,0, 0.04)" },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </React.Fragment>
  );
}
export default Navigation;
