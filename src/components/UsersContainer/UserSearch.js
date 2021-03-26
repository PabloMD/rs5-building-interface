import { useState } from "react";
import { Button } from "../Layout";

function UserSearch(props){
    const { users, onSearch } = props;
    const [key, setKey] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const pattern = new RegExp(key, "i");
        onSearch(
          users.filter((u) => `${u.first_name} ${u.last_name}`.match(pattern))
        );
    };

    const resetForm = (e) => {
        e.preventDefault();
        onSearch(users);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          ></input>
          <Button type="button" handleClick={resetForm}>X</Button>
        </form>
      </div>
    );
}

export default UserSearch;