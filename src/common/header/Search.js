import React from 'react'
import { NavLink } from "react-router-dom";

function Search() {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })  
  return (
    <>
        {/* <section className='search head'>
        <div className='container c_flex'>
          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
          </div>

          <div className='icon f_flex width'>
          
            <div className='cart'>
            <Link to='/profile'>
            <i className='fa fa-user icon-circle'></i>
            </Link>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
        </section> */}
        <section className='search'>
        <div className='container c_flex'>
          <NavLink to='/' className='logo width'>
          <h1 >iSHOP</h1>
          </NavLink>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>Search</span>
          </div>

          <div className='icon f_flex width'>
            <div className='cart'>
            <NavLink to='/Login'>
            <i className='fa fa-user icon-circle'></i>
              </NavLink>
              <NavLink to='/Cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>3</span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search