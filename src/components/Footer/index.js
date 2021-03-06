import { NavLink } from 'react-router-dom';

import './footer.scss';

const Footer = () => (
  <nav className="navFooter">
    <NavLink
      className="navFooter-link"
      to="/contact"
      activeClassName="navFooter-link--active"
    >
      Nous contacter
    </NavLink>

    <NavLink
      className="navFooter-link"
      to="/newsletter"
      activeClassName="navFooter-link--active"
    >
      Newsletter
    </NavLink>

    <NavLink
      to=""
      className="navFooter-link"
      activeClassName="navFooter-link--active"
      exact
    >
      Ici un link
    </NavLink>
  </nav>
);

export default Footer;
