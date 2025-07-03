import { useState } from "react";
import Item from "./Items";
export default function PackingList({
  items,
  onDeletItem,
  onToggleItem,
  seteItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleReset() {
    const confir = window.confirm("Are you sure you want to delete all items?");
    if (confir) {
      seteItems([]);
      setSortBy("input");
    }
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeletItem={onDeletItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}>sort by input order</option>
          <option value={"description"}>sort by description</option>
          <option value={"packed"}>sort by packed status</option>
        </select>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
