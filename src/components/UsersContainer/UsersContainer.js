import { useState, useEffect, useCallback } from "react";

import { User, UsersList, UserSearch } from ".";

function UsersContainer({ setUser, selectedUser }) {
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

  const handleSearch = useCallback((filteredUsers) => {
    setUsers(filteredUsers);
  }, []);

  return (
    <div>
      <UserSearch users={usersList} onSearch={handleSearch}></UserSearch>
      <UsersList>
        {users.map((user) => (
          <User
            key={user.uid}
            data={user}
            selectedUser={selectedUser}
            setUser={setUser}
          ></User>
        ))}
      </UsersList>
    </div>
  );
}

export default UsersContainer;
