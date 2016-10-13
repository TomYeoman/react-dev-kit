import React from 'react'
import {Link} from 'react-router'

export default () => {
    return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
              <ul id="main-menu" className="nav navbar-nav">
                <li id="HomeMenuItem"><Link to="/Home" href="#">Home</Link></li>
                <li id="ProductsMenuItem" className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Products <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li><Link to="/Product1" href="#">Product1</Link></li>
                        <li><Link to="/Product2" href="#">Product2</Link></li>
                        <li><Link to="/Product3" href="#">Product3</Link></li>
                        <li><Link to="/Product4" href="#">Product4</Link></li>
                        <li><Link to="/Product5" href="#">Product5</Link></li>
                    </ul>
                </li>
                <li id="AboutMenuItem"><Link to="/About" href="#">About</Link></li>
                <li id="ContactMenuItem"><Link to="/Contact" href="#">Contact</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Right menu <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                          <li><Link to="/designpatterns/Headers" href="#">Action</Link></li>
                          <li><Link to="/designpatterns/Headers" href="#">Another action</Link></li>
                      </ul>
                  </li>
              </ul>
            </div>
            
          </div>
        </nav>
    )
}