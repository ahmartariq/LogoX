import {React , useState} from "react";
import { MenuItem  ,Typography} from "@mui/material";
import history from "./history";


function Links(props){

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

    return(
      <MenuItem key={props.tag} onClick={handleCloseNavMenu}>
        {/* <Link to={props.pathh} style={{color : 'white' , textDecoration : 'none'}}><Typography textAlign="center">{props.tag}</Typography></Link> */}
        <Typography textAlign="center" onClick={()=>{history.push(props.pathh)}}>{props.tag}</Typography>
      </MenuItem>
    )
}

export default Links;