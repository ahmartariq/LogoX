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
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Links from "./Links";
import NavLinks from "./navLinks";
import Art from "./images/art.png";
import { getAuth, signOut } from "firebase/auth";
import history from "./history";

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

export default function DesignSuggestion() {
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
              lg={6}
              md={6}
              sm={12}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img src={Art} alt="" width={"80%"} />
            </Grid>
            <Grid
              lg={6}
              md={6}
              sm={12}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
              rowGap={6}
            >
              <h1>Color Palette</h1>
              <Grid
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                justifyContent={"center"}
                alignItems={"center"}
                direction={"row"}
                columnGap={7}
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
                  <Paper elevation={4}>
                    <Box
                      style={{
                        width: "150px",
                        height: "100px",
                        backgroundColor: "#8D4C8C",
                      }}
                    ></Box>
                    <center>
                      <h4>Primary</h4>
                      <p>#8D4C8C</p>
                    </center>
                  </Paper>
                </Grid>
                <Grid
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Paper elevation={4}>
                    <Box
                      style={{
                        width: "150px",
                        height: "100px",
                        backgroundColor: "#C580C3",
                      }}
                    ></Box>
                    <center>
                      <h4>Sccondary</h4>
                      <p>#C580C3</p>
                    </center>
                  </Paper>
                </Grid>
                <Grid
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Paper elevation={4}>
                    <Box
                      style={{
                        width: "150px",
                        height: "100px",
                        backgroundColor: "#FFE7FE",
                      }}
                    ></Box>
                    <center>
                      <h4>Tertiary</h4>
                      <p>#FFE7FE</p>
                    </center>
                  </Paper>
                </Grid>
              </Grid>
              <h1>Fonts</h1>
              <Grid
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                justifyContent={"center"}
                alignItems={"center"}
                direction={"row"}
                columnGap={7}
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
                  <Paper elevation={4} style={{ width: "150px" }}>
                    <center>
                      <h4>Poppins</h4>
                    </center>
                  </Paper>
                </Grid>
                <Grid
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Paper elevation={4} style={{ width: "150px" }}>
                    <center>
                      <h4>Roboto</h4>
                    </center>
                  </Paper>
                </Grid>
                <Grid
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Paper elevation={4} style={{ width: "150px" }}>
                    <center>
                      <h4>Raleway</h4>
                    </center>
                  </Paper>
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
              >
                <br />
                <br />
                <br />
                <input
                  type={"button"}
                  value="Save"
                  className="btn"
                  onClick={() => {
                    history.push("./home");
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
