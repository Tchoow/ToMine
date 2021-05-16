import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';

const Hello = () => {
  return (
    <div>
        <div className="header">
          <img src="https://cdn.discordapp.com/attachments/519799997534044170/843225758637621269/tomine.png" alt="photo de profil" className="logo-header"/>
          <span className="material-icons icon icon-top ">notifications</span>
          <span className="material-icons icon icon-top ">logout</span>
        </div>

        <div className="container">

          <div className="side-bar">

              <div className="profil">

                <img src="https://www.roblox.com/headshot-thumbnail/image?userId=107436912&width=420&height=420&format=png" alt="photo de profil" className="pp"/>
                <h1>Tchoow</h1>
                <h2>Premium </h2>
                <hr />
              </div>

              <div className="tab">
                <span className="material-icons icon">dashboard</span>
                <h1>Tableau de bord</h1>

              </div>

              <div className="tab">
                <span className="material-icons icon">paid</span>
                <h1>Cashout</h1>
              </div>

              <div className="tab">
                <span className="material-icons icon">quiz</span>
                <h1>Aide</h1>
              </div>

              <div className="tab">
                <span className="material-icons icon">settings</span>
                <h1>Paramètre</h1>
              </div>

              <hr />

              <div className="container-social">
                <i className="fab fa-youtube logo-social"></i>
                <i className="fab fa-tiktok logo-social"></i>
                <i className="fab fa-discord logo-social"></i>
                <i className="fab fa-twitter logo-social"></i>
                <hr />
              </div>

          </div>


          <div className="main">

            <div className="card">
              <h2 className="title-card">Status</h2>
              <hr />
              <h1>Arrêt</h1>
            </div>

            <div className="card">
              <h2 className="title-card"> Niveau</h2>
              <hr />
              <h1>2</h1>

            </div>

            <div className="card sold">
              <h2 className="title-card special-card">Solde</h2>
              <hr />
              <h1 className="special-card">800 TBX</h1>

            </div>

            <div className="card-activity">
              <h2 className="title-card">Activité récentes</h2>
              <hr />

            </div>

            <div className="card-config">
              <h2 className="title-card">Mes composants</h2>
              <hr />

            </div>

          </div>


      </div>
      
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
