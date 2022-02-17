import styles from './ProfileInfo.module.css';

import default_avatar from '../../../assets/default_avatar.jpg';

const ProfileInfo = props => {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.profilePhoto}>
        <img src={default_avatar} alt='user avatar' />
      </div>
      <div className={styles.personalInfo}>
        <h2>Name: Roman</h2>
      </div>
      <div className={styles.contacts}>
        <p>my phone number: 3424234</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
