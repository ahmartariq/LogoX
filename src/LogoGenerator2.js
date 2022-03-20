import { React, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Links from "./Links";
import NavLinks from "./navLinks";
import Art from "./images/art.png";
import Logo1 from "./images/logo1.jpg";
import Logo2 from "./images/logo2.jpg";
import Logo3 from "./images/logo3.jpg";
import Logo4 from "./images/logo4.jpg";
import Logo5 from "./images/logo5.jpg";
import Logo6 from "./images/logo6.jpg";
import history from "./history";
import { getAuth, signOut } from "firebase/auth";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D48277",
    },
    secondary: {
      main: "#FFAC7D",
    },
  },
});

const menuTheme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: "#D48277",
          color: "#FFFFFF",
        },
      },
    },
  },
});


const nNav = (val) => {
  return <Links key={val.key} tag={val.tag} pathh={val.pathh} />;
};

export default function LogoGenerator2() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <img src={Logo} alt="logo" width={"7%"} />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon style={{ color: "white" }} />
              </IconButton>
              <ThemeProvider theme={menuTheme}>
                <Menu
                  backgroundColor
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
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {NavLinks.map(nNav)}
                </Menu>
              </ThemeProvider>
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              style={{ marginLeft: "100px", color: "white" }}
            >
              {NavLinks.map(nNav)}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircleIcon
                    style={{ color: "white" }}
                    sx={{ fontSize: 35 }}
                  />
                </IconButton>
              </Tooltip>
              <ThemeProvider theme={menuTheme}>
                <Menu
                  sx={{ mt: "35px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    key={"Profile"}
                    onClick={() => {
                      history.push("./home");
                    }}
                  >
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem
                    key={"Account"}
                    onClick={() => {
                      history.push("./home");
                    }}
                  >
                    <Typography textAlign="center">Account</Typography>
                  </MenuItem>
                  <MenuItem key={"Log out"} onClick={() => {}}>
                    <Typography
                      textAlign="center"
                      onClick={() => signOut(getAuth())}
                    >
                      Log out
                    </Typography>
                  </MenuItem>
                </Menu>
              </ThemeProvider>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={0}>
          <Grid
            lg={12}
            md={12}
            sm={12}
            xs={12}
            container
            marginTop={"100px"}
            rowGap={5}
          >
            <Grid
              lg={12}
              md={12}
              sm={12}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
            >
              <h1>Logo Generator</h1>
              <p>Create stunning logos in one click</p>
            </Grid>
            <Grid
              lg={12}
              md={12}
              sm={12}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
              rowGap={6}
            >
              <Grid
                lg={12}
                md={12}
                sm={12}
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <h2>the logos for you </h2>
              </Grid>
              <Grid
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                justifyContent={"center"}
                alignItems={"center"}
                rowGap={6}
              >
                <Grid
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}                >
                  <img
                    src={Logo1}
                    alt="logo1"
                    width={"50%"}
                    className="Logoimg"
                    onClick={() => {
                      history.push("./Logo-generator-3");
                    }}
                  />
                </Grid>
                <Grid
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img
                    src={Logo2}
                    alt="logo2"
                    width={"50%"}
                    className="Logoimg"
                  />
                </Grid>
                <Grid
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img
                    src={Logo3}
                    alt="logo3"
                    width={"50%"}
                    className="Logoimg"
                  />
                </Grid>
              </Grid>
              <Grid
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                justifyContent={"center"}
                alignItems={"center"}
                rowGap={6}
              >
                <Grid
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img
                    src={Logo4}
                    alt="logo4"
                    width={"50%"}
                    className="Logoimg"
                  />
                </Grid>
                <Grid
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img
                    src={Logo5}
                    alt="logo5"
                    width={"50%"}
                    className="Logoimg"
                  />
                </Grid>
                <Grid
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img
                    src={Logo6}
                    alt="logo6"
                    width={"50%"}
                    className="Logoimg"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
