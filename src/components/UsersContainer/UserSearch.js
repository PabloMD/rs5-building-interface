import { useState, useEffect, useRef } from "react";
import { Button } from "../Layout";

function UserSearch(props){
    const { users, onSearch } = props;
    const [ inputKey, setInputKey] = useState('');
    const [ key, setKey ] = useState('');

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setKey(inputKey);
    };

    const resetForm = (e) => {
        e.preventDefault();
        setKey('');
        setInputKey('');
        inputRef.current.focus();
    };

    useEffect(() => {
      onSearch(users.filter((u) =>
        `${u.first_name} ${u.last_name}`.match(new RegExp(key, "i"))
      ));
    }, [key, users, onSearch]);

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
          ></input>
          <Button type="button" handleClick={resetForm}>
            X
          </Button>
        </form>
      </div>
    );
}

export default UserSearch;