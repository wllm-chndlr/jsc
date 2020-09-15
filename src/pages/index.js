import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic07 from '../assets/images/pic07.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Jacqueline Chandler" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About</h2>
                </header>
                <p>My name is Jacqueline Chandler, and I can't think of a time when I haven't been passionate about reproductive health. At my core, I believe it is a basic human right to have access to all the information you need to make informed choices in your birthing space and beyond.</p>
                <p>I am a certified birth and postpartum doula through Doula Trainings International (DTI), a newborn care specialist, childbirth educator and a member of the Central Texas Doula Association. I am also one of the co-founders of <a style={{lineWeight: 600}}href='https://www.lamamacare.com/' target='_blank' rel="noopener noreferrer">La Mama Care</a>, which provides practical, holistic postpartum care kits to mamas navigating the 4th trimester.</p>
                <p>I feel fortunate to be a part of such a wonderful birth community in Austin and look forward to supporting your family on life's most exciting journey. </p>

                <ul className="actions">
                  {/* <li><Link to="/generic" className="button">Learn More</Link></li> */}
                </ul>
              </div>
              <span className="image"><img src={pic07} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Services</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-user-o"></span>
                <h3>Birth support</h3>
                <p className='p_service'>During our first prenatal visit, we'll talk through your birth preferences and postpartum plan. During our second visit, we'll walk through comfort measures and answer any questions to ensure you feel confident and prepared. Two weeks prior to - and after - your due date, I will be on-call 24/7 eagerly anticipating your phone call. I will meet you where you're laboring to provide support, and that one-on-one attention will continue until your baby is born. To ensure you, your birthing partner (if applicable) and baby are well taken care of, I will stay with you for up to two hours after the birth. I will then meet you and your family at home within the first week after the birth for a 1.5-hour postpartum visit.</p>
                <p className='p_amount'>$1250</p>
              </li>
              <li>
                <span className="icon major style3 fa-heart"></span>
                <h3>Postpartum support</h3>
                <p className='p_service'>Hiring a postpartum doula may be one of the best decisions you can make for you and your family during this remarkable and exhausting time in your life. I will come to your home and after a calming check-in, we will talk through your goals and needs for the day. It may be that I look after baby while you rest and shower; or it could be that I assist you with breastfeeding, laundry, and light meal prep. This time is led by you and your needs and can be booked in 4-hour daytime shifts, or 8-hour overnight shifts. </p>
                <p className='p_amount'>$35/hour</p>
              </li>
              <li>
                <span className="icon major style5 fa-cubes"></span>
                <h3>Personalized classes</h3>
                <p className='p_service'>Having a hard time finding childbirth education and newborn care classes that fit your busy schedule? I offer private sessions on each topic (separately) in the comfort of your home. We'll talk about all things baby and birth and answer all your questions in these fun, interactive sessions.</p>
                <p className='p_amount'>Prices vary. Contact me for more info.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                {/* <li><Link to="/generic" className="button">Learn More</Link></li> */}
              </ul>
            </footer>
          </section>

          {/* <section id="second" className="main special">
            <header className="major">
              <h2>Experience</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section> */}

          {/* <section id="cta" className="main special">
            <header className="major">
              <h2>Visual Birth Plan</h2>
              <p>Check out this sweet visual birth plan</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/birth-plan" className="button special">Learn more</Link></li>
              </ul>
            </footer>
          </section> */}

        </div>

      </Layout>
    )
  }
}

export default Index
