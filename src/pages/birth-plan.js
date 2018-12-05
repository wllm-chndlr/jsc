import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import HeaderBirthPlan from '../components/HeaderBirthPlan'

class BirthPlan extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Visual Birth Plan" />
        <HeaderBirthPlan />
        <div id="main">
            <section id="content" className="main">
            {/* <span className="image main"><img src={pic04} alt="" /></span> */}
            <h2>Magna feugiat lorem</h2>
            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus.</p>
            </section>
            <section id="circles">
                <div className="circle">
                    <img src='https://via.placeholder.com/150'/>
                </div>
                <div className="circle">x</div>
                <div className="circle">x</div>
                <div className="circle">x</div>
                <div className="circle">x</div>
                <div className="circle">x</div>
                <div className="circle">x</div>
                <div className="circle">x</div>
                <div className="circle">x</div>
            </section>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/" className="button special">Home</Link></li>
              </ul>
            </footer>
        </div>
      </Layout>
    )
  }
}

export default BirthPlan
