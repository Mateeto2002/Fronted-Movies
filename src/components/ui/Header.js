import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">

    <NavLink className="navbar-brand" activeClassName='active' exact to='/'>Peliculas y Series</NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav">

        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='active' exact to='/usuario'>usuarios</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='active' exact to='/genero'>Genero</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='active' exact to='/tipo'>Tipo</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='active' exact to='/productora' >productora</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='active' exact to='/director' >Director</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}


