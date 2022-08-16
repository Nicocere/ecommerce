import React from 'react'
import estilos from './nav.module.css'

const NavBar = () => {
  return (
    <nav className={estilos.navBar}>
    <ul className='seccion'>
        <li className='seccionLi'>
            <a href="https//google.com">Categorias</a>
        </li>
        <li className='seccionLi'>
            <a href="https//google.com">Fechas Especiales</a>
        </li>
    </ul>
</nav>
  );
};

export default NavBar