import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import logo from './logo192.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <img className={styles.logo} src={logo} alt={'logo'} />

        <div className={styles.login}>
          <Link to='/login'>Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
