export default function Income({ title, number }) {
  return (
    <div id="infobox">
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{number}</p>
      </div>
    </div>
  );
}
