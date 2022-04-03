const List = (props) => {
  console.log(props.className);
  return (
    <ul className={props.classes}>
      {props.categories.map((cat) => (
        <li key={cat.id}>{cat.name}</li>
      ))}
    </ul>
  );
};
export default List;
