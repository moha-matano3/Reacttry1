import './App.css';
import Home from './Components/home';
import Navbar from './Components/navbar';
import Create from './Components/create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './Components/BlogDetails';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="Content">
          <Switch>
            <Route exact path = "/">
               <Home />
            </Route>
            <Route path = "/create">
               <Create />
            </Route>
            <Route path = "/blog/:id">
               <BlogDetails />
            </Route>
            <Route path = "*">
               <NotFound />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
      
  );
}

export default App;
