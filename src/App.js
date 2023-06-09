
import './App.css';
import Home from './pages/Home/Home';
import Setting from './pages/Setting/Setting'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/HeaderBar/Header';
import assets from './assets'
import Modification from './pages/Modification/Modification';
import More from './pages/More/More';
import Games from './pages/Games/Games';
import Profile from './pages/Profile/profile';
function App(props) {


  return (
    <>
      <Router>
        <div className="main-outer">
          <div className="mainContainer">
            {/* <div className="header-component">
              
            </div> */}
            <div class="row">
              <div className="col-12">
                <Header />
              </div>
            </div>
            <div className="slide-bar-and-content">
              <div className="slide-bar">
                <nav className='navBarSlide'>
                  <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    <span class="material-symbols-outlined">
                      home
                    </span>
                  </NavLink>

                  <NavLink to="/games" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    <span class="material-symbols-outlined">
                      smart_toy
                    </span>
                  </NavLink>
                  <NavLink to="/modification" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    <span class="material-symbols-outlined">
                      toys
                    </span>
                  </NavLink>
                  <NavLink to="/more" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    <span class="material-symbols-outlined">
                      forum
                    </span>
                  </NavLink><NavLink to="/setting" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    <span class="material-symbols-outlined">
                      settings
                    </span>
                  </NavLink>
                </nav>
                <nav className='navBarSlide'>
                  <NavLink to="/profile" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    <span><img src={assets.Profilepic} alt="" className='profilepic' /></span>
                  </NavLink>
                </nav>
              </div>
              <div className="content">

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/setting" element={<Setting />} />
                  <Route path="/modification" element={<Modification />} />
                  <Route path="/more" element={<More />} />
                  <Route path="/games" element={<Games />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>

              </div>
            </div>
          </div>
        </div>
      </Router>

    </>
  );
}

export default App;
