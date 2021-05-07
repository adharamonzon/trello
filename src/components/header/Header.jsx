import React from 'react';

const Header = () => {
  return (<header className='header' id="header">
   <section className="header--nav">
     <a href="#header" className='header--nav__home'><i className="fas fa-home header--nav__home"></i></a>
     <label htmlFor="search">
     <input className='header--nav__search' type="text" placeholder=' Ir a ...'/>
     <i className="fas fa-search header--nav__search--icon"></i>
     </label>
   </section>
   <section className='header--logoSection'>
     <h1 className='header--logoSection__title'>Trello</h1>
     <i className="fab fa-trello header--logoSection__icon"></i>
   </section>
   <section className='header--new'>
     <i className="fas fa-plus"></i>
     </section>
  </header>)
}

export default Header