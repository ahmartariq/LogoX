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
  FormControl,
  Select,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo1 from "./images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Links from "./Links";
import NavLinks from "./navLinks";
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

export default function LogoGenerator1() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [Logo, setLogo] = useState("");
  const handleLogoChange = (event) => {
    setLogo(event.target.value);
  };

  const [Tag, setTag] = useState("");

  const handleChange = (event, newTag) => {
    setTag(newTag);
  };
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
            <img src={Logo1} alt="logo" width={"7%"} />
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
          <Grid lg={12} md={12} sm={12} xs={12} container>
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
              lg={6}
              md={6}
              sm={12}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              direction={"column"}
            >
              <h2>What’s your logo for?</h2>
              <FormControl required sx={{ minWidth: 120 }} size="small">
                <Select
                  value={Logo}
                  onChange={handleLogoChange}
                  sx={{ width: "457px" }}
                >
                  <MenuItem value="">
                    <em>Select Logo Type</em>
                  </MenuItem>
                  <MenuItem value={10}>Business</MenuItem>
                  <MenuItem value={20}>Photography</MenuItem>
                  <MenuItem value={30}>Art</MenuItem>
                  <MenuItem value={40}>Sports</MenuItem>
                </Select>
              </FormControl>
              <br />
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
            >
              <h2>What type of logo you need ?</h2>
              <ToggleButtonGroup
                sx={{
                  color: "#1a1a1a",
                }}
                value={Tag}
                exclusive
                onChange={handleChange}
                style={{ marginLeft: "30px" }}
              >
                <ToggleButton
                  style={{
                    marginRight: "10px",
                    border: "solid 1px #FFAC7D",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                  }}
                  value="Fun"
                >
                  Fun
                </ToggleButton>
                <ToggleButton
                  style={{
                    marginRight: "10px",
                    border: "solid 1px #FFAC7D",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                  }}
                  value="Minimal"
                >
                  Minimal
                </ToggleButton>
                <ToggleButton
                  style={{
                    marginRight: "10px",
                    border: "solid 1px #FFAC7D",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                  }}
                  value="Dynamic"
                >
                  Dynamic
                </ToggleButton>

                <ToggleButton
                  style={{
                    marginRight: "10px",
                    border: "solid 1px #FFAC7D",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                  }}
                  value="Playful"
                >
                  Playful
                </ToggleButton>
                <ToggleButton
                  style={{
                    marginRight: "10px",
                    border: "solid 1px #FFAC7D",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                  }}
                  value="Formal"
                >
                  Formal
                </ToggleButton>
                <ToggleButton
                  style={{
                    marginRight: "10px",
                    border: "solid 1px #FFAC7D",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                  }}
                  value="Techy"
                >
                  Techy
                </ToggleButton>
                <ToggleButton
                  style={{
                    marginRight: "10px",
                    border: "solid 1px #FFAC7D",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                  }}
                  value="Modern"
                >
                  Modern
                </ToggleButton>
                <ToggleButton
                  style={{
                    marginRight: "10px",
                    border: "solid 1px #FFAC7D",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                  }}
                  value="Creative"
                >
                  Creative
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid
              lg={12}
              md={12}
              sm={12}
              xs={12}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              marginTop={"100px"}
            >
              <input
                type={"button"}
                value="Next"
                className="btn"
                style={{ width: "35% " }}
                onClick={() => {
                  history.push("./Logo-generator-2");
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
