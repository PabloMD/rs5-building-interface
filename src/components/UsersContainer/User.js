import "./User.scss";

function User(props) {
  const { first_name: firstName, last_name: lastName } = props.data;
  const handleSetUser = (e) => {
      e.preventDefault();
      console.log('selecting');
    props.setUser(props.data);
  };

  return (
    <div className="userEntry">
      <button
        className={props.selectedUser && props.selectedUser.uid === props.data.uid && "active"}
        onKeyDown={handleSetUser}
        onClick={handleSetUser}
      >
        {`${firstName} ${lastName}`}
      </button>
    </div>
  );
}

export default User;
