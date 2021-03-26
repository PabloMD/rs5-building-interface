function User(props){
    const { first_name: firstName, last_name: lastName } = props.data;
    return <div>{`${firstName} ${lastName}`}</div>;
}

export default User;