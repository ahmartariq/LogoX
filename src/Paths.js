import { React , Component } from "react";
import { Router, Route , Switch , Redirect} from 'react-router-dom';
import history from './history';
import App from './App'
import Home from './Home'
import LogoGenerator from './LogoGenerator';
import LogoGenerator1 from './LogoGenerator1';
import LogoGenerator2 from './LogoGenerator2';
import LogoGenerator3 from './LogoGenerator3';
import DesignSuggestion from './DesignSuggestion';
import DesignSuggestion1 from './DesignSuggestion1';
import { AuthContextProvider , useAuthState } from "./Firebase";

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
      }
    />
  )
}
const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/home" />
      }
    />
  )
}

export default class Routes extends Component {
  render() {

    return (
      <AuthContextProvider>
       <Router history={history}>
       <Switch>
         <UnauthenticatedRoute exact path="/" component={App} />
         <AuthenticatedRoute exact path="/home" component={Home} />
         <AuthenticatedRoute exact path="/logo-generator" component={LogoGenerator} />
         <AuthenticatedRoute exact path="/logo-generator-1" component={LogoGenerator1} />
         <AuthenticatedRoute exact path="/logo-generator-2" component={LogoGenerator2} />
         <AuthenticatedRoute exact path="/logo-generator-3" component={LogoGenerator3} />
         <AuthenticatedRoute exact path="/Design-suggestion" component={DesignSuggestion} />
         <AuthenticatedRoute exact path="/Design-suggestion-1" component={DesignSuggestion1} />
       </Switch>
     </Router>
    </AuthContextProvider>
    );
  }
}
