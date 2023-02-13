import React from 'react'
// import Search from './Search'

function Head() {
  return (
    <>
        {/* <section className='head'>
            <div className ='container d_flex'>
                <div className='left row'>
                <label htmlFor=''>EN</label>
                <label htmlFor=''>$</label>
                </div>
                <div className='right row RText'>
                    <i></i>
                    <label>My Profile</label>
                    <i></i>
                    <label>Cart</label>
                </div>
            </div>
        </section> */}
        <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +1234567889</label>
            <i className='fa fa-envelope'></i>
            <label> care@i-shop.com</label>
          </div>
          <div className='right row RText'>
            <label>EN</label>
            <label>$</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head