import { useState, useEffect } from "react";
import { User, UsersList, UserSearch } from ".";

function UsersContainer() {
  const [usersList, setUsersList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => {
        setUsersList(data);
      });
  }, []);

  useEffect(() => {
    setUsers(usersList);
  }, [usersList]);

  const handleSearch = (filteredUsers) => {
      setUsers(filteredUsers);
  };

  return (
    <div>
      <UserSearch users={usersList} onSearch={handleSearch}>

      </UserSearch>
      <UsersList>
        {users.map((user) => (
          <User key={user.uid} data={user}></User>
        ))}
      </UsersList>
    </div>
  );
}

export default UsersContainer;
