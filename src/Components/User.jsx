import "./user.css";

const User = (props) => {
  const { img, name, pos, getId, id } = props;
  console.log(props);
  function handler() {
    getId(id);
  }
  return (
    <article>
      <img src={img} alt="profile" />
      <h3>{name}</h3>
      <h3>{pos}</h3>
      <button onClick={handler}>Remove</button>
    </article>
  );
};

export default User;
