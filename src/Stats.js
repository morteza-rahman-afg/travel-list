export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding some items ti your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPackt = items.filter((item) => item.packed).length;
  const precentage = Math.round((numPackt / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? "you got everything! ready to go✈️"
          : `You hove ${numItems} item on your list , and you already packed${" "}
        ${numPackt} (${!precentage ? "0" : precentage}%)`}
      </em>
    </footer>
  );
}
