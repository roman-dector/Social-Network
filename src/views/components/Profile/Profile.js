import withAuthNavigate from '../../hocs/withAuthNavigate';
import styles from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
  return (
    <div className={styles.profile}>
      <ProfileInfo />
    </div>
  );
};

export default withAuthNavigate(Profile);
