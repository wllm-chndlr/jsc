import React from 'react'

const Footer = () => (
    <footer id="footer">
        <section>
            <h2>Reach out</h2>
            <p>I'd love to hear from you! Let me know if I can help out, or if you have any questions.</p>
            <ul className="actions"></ul>
        </section>
        <section>
            <h2>Contact</h2>
            <dl className="alt">
                <dt>Phone</dt>
                <dd>512-568-9828</dd>
                <dt>Email</dt>
                <dd><a href="mailto:birthworksatx@gmail.com">birthworksatx@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://www.instagram.com/jchand_doula/" target=
                '_blank' rel="noopener noreferrer" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; BirthWorks ATX</p>
    </footer>
)

export default Footer
