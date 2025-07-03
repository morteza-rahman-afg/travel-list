export default function Item(props) {
  return (
    <li>
      <input
        type="checkbox"
        value={props.item.packed}
        onChange={() => {
          props.onToggleItem(props.item.id);
        }}
      />
      <span
        className={
          props.item.packed ? "text_line-through" : "text_decoration-none"
        }
      >
        {props.item.quantity} {props.item.description}
      </span>
      <button onClick={() => props.onDeletItem(props.item.id)}>❌</button>
    </li>
  );
}
