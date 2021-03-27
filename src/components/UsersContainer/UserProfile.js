import { Link } from "react-router-dom";

import './UserProfile.scss';

function UserProfile({ user }) {
  if (!user) {
    return (
      <h2>
        Please select <Link to="/users">User</Link> first
      </h2>
    );
  }

  return (
    <div>
      <div className="userDetails">
        <div>
          <img src={user.avatar} alt="avatar" />
        </div>
        <div>
          <h2>{user.username}</h2>
          <p>
            <strong>Date of birth:</strong> {user.date_of_birth}
          </p>
          <p>
            <strong>First name:</strong> {user.first_name}
          </p>
          <p>
            <strong>Last name:</strong> {user.last_name}
          </p>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
