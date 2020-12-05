import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        Check
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/dialog" render={() => (
              <Dialog users={props.state.users} />
            )}/>
            
          <Route path="/profile" render={() => {
            return <Profile store={props.store} />
          }}/>
          <Route path="/users" render={() => {
              return <UsersContainer store={props.store} />
          }}/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
