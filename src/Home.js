import {React, useState} from 'react';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import {  AppBar , Container ,Toolbar,Typography,Box,IconButton,Menu, MenuItem,Tooltip , Grid, TextField , Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './images/logo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Links from './Links'
import NavLinks from './navLinks';
import Hero from './images/hero.png';
import Illustration1 from './images/illus1.png';
import Illustration2 from './images/illus2.png';
import Illustration3 from './images/illus3.png';
import Illustration4 from './images/illus4.png';
import Illustration5 from './images/illus5.png';
import Illustration6 from './images/illus6.png';
import history from './history';
import { getAuth, signOut } from 'firebase/auth'


const theme = createTheme({
  palette: {
    primary: {
      main: '#D48277',
    },
    secondary: {
      main: '#FFAC7D',
    },
  },
});

const menuTheme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor : '#D48277',
          color : '#FFFFFF',
        },
      },
    },
  },
});

const nNav = (val) => {
  return (
    <Links
    key= {val.key}
    tag= {val.tag}
    pathh = {val.pathh}
    />
  )
}

function Home() {

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
          <img src={Logo} alt='logo' width={'7%'}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{color : 'white'}}/>
            </IconButton>
            <ThemeProvider theme={menuTheme}>
            <Menu
            backgroundColor
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {NavLinks.map(nNav)}
            </Menu>
            </ThemeProvider>

          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{marginLeft : '100px' , color : 'white'}}>
             {NavLinks.map(nNav)}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon style={{color : 'white'}} sx={{ fontSize: 35 }}/>
              </IconButton>
            </Tooltip>
            <ThemeProvider theme={menuTheme}>
            <Menu
              sx={{ mt: '35px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={'Profile'} onClick={() =>{history.push('./home')}}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem key={'Account'} onClick={() =>{history.push('./home')}}>
                <Typography textAlign="center">Account</Typography>
              </MenuItem>
              <MenuItem key={'Log out'} onClick={() =>{}}>
                <Typography textAlign="center" onClick={() => signOut(getAuth())}>Log out</Typography>
              </MenuItem>
              </Menu>
              </ThemeProvider>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xxlg" style={{padding : '0'}}>
        <Grid container spacing={0}>
          <Grid lg={12} md={12} sm={12} xs={12} container>
                <img src={Hero} alt='hero' width={'100%'} />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={0}>
          <Grid lg={12} md={12} sm={12} xs={12} container justifyContent={'center'} alignItems={'center'} >
              <Grid lg={6} md={6} sm={12} xs={12}>
                  <h1>About Us</h1>
                  <p>LogoX is a free online logo maker tool, for you to have a free logo with your own branding identity.</p>
                  <p>LogoX Maker combines your logo design preferences with Artificial Intelligence to help you create a custom logo you'll love. All it takes is a few clicks and five minutes.</p>
              </Grid>
              <Grid lg={6} md={6} sm={12} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img src={Illustration1} alt='illustration-1' width={'70%'}/>
              </Grid>
          </Grid>
          <Grid lg={12} md={12} sm={12} xs={12} container justifyContent={'center'} alignItems={'center'}>
              <Grid lg={6} md={6} sm={12} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img src={Illustration2} alt='illustration-2' width={'70%'}/>
              </Grid>
              <Grid lg={6} md={6} sm={12} xs={12}>
                    <h1>Logo Generator</h1>
                    <p>Start by entering your company name and industry, then select the perfect logo tags, and suggested logos. LogoX Logo Maker will use these as inspiration and start to generate custom logo designs for you.</p>
                    <input type={"button"} value="Make Logo" className="btn" style={{width : '40% ' , marginTop : '50px'}} 
                      onClick={() => {history.push('./logo-generator')}}
                    />
              </Grid>
          </Grid>
          <Grid lg={12} md={12} sm={12} xs={12} container justifyContent={'center'} alignItems={'center'}>
              <Grid lg={6} md={6} sm={12} xs={12}>
                    <h1>Make your Logo</h1>
                    <p>You can make your own logo by using Modern Components made by LogoX. You can fully customize them according to your requirement and liking. You can change font, text, color, etc. </p>
                    <input type={"button"} value="Make Logo" className="btn" style={{width : '40% ' , marginTop : '50px'}}/>
              </Grid>
              <Grid lg={6} md={6} sm={12} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img src={Illustration3} alt='illustration-3' width={'70%'}/>
              </Grid>
          </Grid>
          <Grid lg={12} md={12} sm={12} xs={12} container justifyContent={'center'} alignItems={'center'}>
              <Grid lg={6} md={6} sm={12} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img src={Illustration4} alt='illustration-4' width={'70%'}/>
              </Grid>
              <Grid lg={6} md={6} sm={12} xs={12}>
                    <h1>Design Suggestions</h1>
                    <p>LogoX also provide you the opportunity to learn about the desing principles based on your requirements, so you can have some knowledge about the logo designing. Design fundamentals are base of logo design.</p>
                    <input type={"button"} value="Design Suggestions" className="btn" style={{width : '40% ' , marginTop : '50px'}}/>
              </Grid>
          </Grid>
          <Grid lg={12} md={12} sm={12} xs={12} container justifyContent={'center'} alignItems={'center'}>
              <Grid lg={6} md={6} sm={12} xs={12}>
                    <h1>Logo Analyzer </h1>
                    <p>Select a logo to get it analzyzed by our AI based checker and get a rating of your logo. </p>
                    <input type={"button"} value="Analyze" className="btn" style={{width : '40% ' , marginTop : '50px'}}/>
              </Grid>
              <Grid lg={6} md={6} sm={12} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img src={Illustration5} alt='illustration-5' width={'70%'}/>
              </Grid>
          </Grid>
          <Grid lg={12} md={12} sm={12} xs={12} container justifyContent={'center'} alignItems={'center'}>
              <Grid lg={6} md={6} sm={12} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img src={Illustration6} alt='illustration-5' width={'70%'}/>
              </Grid>
              <Grid lg={6} md={6} sm={12} xs={12}>
                    <h1>Community</h1>
                    <p>LogoX provides you a platform where you can get in touch with other designers and users to get help and exchange designs.</p>
                    <input type={"button"} value="Visit" className="btn" style={{width : '40% ' , marginTop : '50px'}}/>
              </Grid>
          </Grid>       
        </Grid>
      </Container>
      <Container maxWidth="xxlg" style={{padding : '0'}}>
      <Grid container spacing={0}>
      <Grid lg={12} md={12} sm={12} xs={12} style={{backgroundColor : '#FFAC7D'}}container justifyContent={'center'} alignItems={'center'}>
              <Grid lg={6} md={6} sm={12} xs={12}>
                    <h1 className='white'>Make your Logo !</h1>
                    <p className='white'>In the time it took you to read this, you could have designed a professional logo for your business. See for yourself.</p>
                    <br/><br/>
              </Grid>
              <Grid lg={6} md={6} sm={12} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'} direction={'row'} marginBottom={5}>
              <TextField id="filled-basic" label=" Enter your Company name" variant="filled" style={{backgroundColor : 'white'}} />
                <Button variant="contained" style={{backgroundColor : 'black' , color : 'white' , marginLeft : '10px' , height : '55px'}} size='large'>Get Started</Button>
              </Grid>
          </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
  );
}

export default Home;