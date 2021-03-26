
import './NavMenu.scss';

function NavMenu({ show, children }) {
    console.log(show);
  return (
    <div className={ `sideMenu ${ show ? " show" : ""}`}>
      <nav>{children}</nav>
    </div>
  );
}

export default NavMenu;