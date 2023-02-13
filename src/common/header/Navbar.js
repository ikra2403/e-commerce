import React, {useState} from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  // const [MobileMenu, setMobileMenu] = useState(false)
  // return (
  //   <>
  //       <header className='header'>
  //           <div className='container d_flex'>
  //               <div className='navlink'>
  //                 <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
  //                   <li>
  //                     <Link to='/'> HOME</Link>
  //                   </li>
  //                   <li>
  //                     <Link to='/'> STORE</Link>
  //                   </li>
  //                   <li>
  //                     <Link to='/'> IPHONE</Link>
  //                   </li>
  //                   <li>
  //                     <Link to='/'> IPAD</Link>
  //                   </li>
  //                   <li>
  //                     <Link to='/'> MACBOOK</Link>
  //                   </li>
  //                   <li>
  //                     <Link to='/'> ACCESSORIES</Link>
  //                   </li>
  //                 </ul>
  //                   <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
  //               {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
  //             </button>
  //               </div>
  //           </div>
  //       </header>
  //   </>
  // )
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to='/'>HOME</Link>
              </li>
              <li>
                <Link to='/'>STORE</Link>
              </li>
              <li>
                <Link to='/'>IPHONE</Link>
              </li>
              <li>
                <Link to='/'>IPAD</Link>
              </li>
              <li>
                <Link to='/'>MACBOOK</Link>
              </li>
              <li>
                <Link to='/'>ACCESSORIES</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar