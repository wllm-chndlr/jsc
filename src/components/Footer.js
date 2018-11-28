import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Reach out</h2>
            <p>I'd love to hear from you! Let me know if I can help out, or if you have any questions.</p>
            <ul className="actions">
                {/* <li><Link to="/generic" className="button">Learn More</Link></li> */}
            </ul>
        </section>
        <section>
            <h2>Contact</h2>
            <dl className="alt">
                <dt>Phone</dt>
                <dd>512-568-9828</dd>
                <dt>Email</dt>
                <dd><a href="mailto:birthworksatx@gmail.com">birthworksatx@gmail.com</a></dd>
                {/* <dt>Location</dt>
                <dd>Austin, Texas</dd> */}
            </dl>
            <ul className="icons">
                {/* <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li> */}
                <li><a href="https://www.instagram.com/jchand_doula/" target=
                '_blank' className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; BirthWorks ATX</p>
    </footer>
)

export default Footer
