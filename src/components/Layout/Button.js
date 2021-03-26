function Button({ type = "submit", handleClick, children }) {
  return <button type={type} onClick={handleClick}>{children}</button>;
}

export default Button;
