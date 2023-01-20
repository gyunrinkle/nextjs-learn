const Header = ({ title = "Default title" }) => {
  return <h1>{title}</h1>;
};

const Homepage = () => {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = React.useState(0);
  const handleClick = () => {
    console.log("increment like count");
    setLikes(likes + 1);
  };
  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Likes({likes})</button>
    </div>
  );
};

ReactDOM.render(<Homepage />, app);
