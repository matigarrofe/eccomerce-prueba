import '../styles/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar fixed-top  navbar-expand-lg">
  <div class="container ">
    <a class="navbar-brand" href="/">
      NAVBAR
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">Inicio</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/productos">Productos</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/productos/buzos">Buzos</a></li>
            <li><a class="dropdown-item" href="/productos/camisas">Camisas</a></li>
            <li><a class="dropdown-item" href="/productos/pantalones">Pantalones</a></li>
            <li><a class="dropdown-item" href="/productos/sacos">Sacos</a></li>
          </ul>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/nosotros">Nosotros</Link>   
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/contacto">Contacto</Link>
          
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar