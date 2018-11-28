import React from 'react'

const Header = (props) => (
    <header id="header" className="alt">
        {/* <span className="logo"><img src={logo} alt="" /></span> */}
        <span style={{fontSize:'60px', marginBottom:'10px', color:'#fff'}} className="icon logo fa-leaf"></span>
        <h1>Hi, I'm Jacqueline</h1>
        <p>a certified birth and postpartum doula <br/>and compassionate educator <br/> based in Austin</p>
    </header>
)

export default Header
