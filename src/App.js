import {React, useState} from 'react';
import { createTheme} from '@mui/material/styles';
import {Grid} from '@mui/material';
import Links from './Links';
import Login from './images/login.png';
import Logo from './images/logo.png'
import { signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth'
import {auth} from './Firebase';
import history from './history';

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

function App() {

  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
        localStorage.setItem('username' , loginEmail); 
        localStorage.setItem('password' , loginPassword); 
        history.push('./home');
      
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <Grid lg={12} md={12} sm={12} xs={12} container direction={'row'} spacing={0}>
           <Grid lg={6} md={6} sm={12} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'} container direction={'column'}>
               <img  src={Login} alt='login' width={'100%'} style={{height : '720px'}}/>
            </Grid>
            <Grid lg={6} md={6} sm={12} xs={12} container   display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Grid lg={7} md={7} sm={7} xs={7}  display={'flex'} alignItems={'center'} justifyContent={'center'} direction={'column'} sx={{paddingTop : '50px'}}>
                <img src={Logo} alt='logo' width={'60%'}/>
                <br /><br /><br /><br />
                <input
                  type={"text"}
                  placeholder="Username"
                  className="input"
                  required
                  style={{width : '80%'}}
                  value={loginEmail}
                  name='loginEmail'
                  onChange={(event) => {setLoginEmail(event.target.value)}}
                />
                <input
                  type={"password"}
                  name='loginPassword'
                  placeholder="password"
                  className="input"
                  required
                  style={{width : '80%'}}
                  onChange={(event) => {setLoginPassword(event.target.value);}}
                />
                <Grid lg={12} md={12} sm={12} xs={12} container direction={'row'}>
                <Grid lg={6} md={6} sm={12} xs={12} display={'flex'} justifyContent={'center'}>
                  <p style={{cursor : 'pointer' , fontSize : '12px'}}>Dont have an account ?</p>
                </Grid>
                <Grid lg={6} md={6} sm={12} xs={12} display={'flex'} justifyContent={'center'}>
                  <p style={{cursor : 'pointer' , fontSize : '12px'}}>Forget password ?</p>
                </Grid>
                </Grid>
                <input type={"button"} value="Sign In" className="btn" style={{width : '80%'}} onClick={login}/>
                <br/><br/>
                <input type={"button"} value="Sign In with Google" className="btninvert" style={{width : '80%'}}/>
                <br/>
                <input type={"button"} value="Sign In with facebook" className="btninvert" style={{width : '80%'}}/>
              </Grid>

            </Grid>
        </Grid>
  );
}

export default App;
