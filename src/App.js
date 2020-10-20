import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          {/* <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch> */}
           <nav style={{ margin: 10 }}>
					<NavLink to='/' exact activeClassName='active'>
						Home
					</NavLink>
					<NavLink to='/about' activeClassName='active'>
						About
					</NavLink>
					<NavLink to='/posts' activeClassName='active'>
						Posts
					</NavLink>
				</nav>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
				<Route path='/posts' exact component={Posts} />
				<Route path='/posts/:postId' exact component={Posts} />
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;