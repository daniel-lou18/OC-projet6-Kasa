import Tag from "./Tag";

function Tags({ tags }) {
  return (
    <ul className="list-tags">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </ul>
  );
}

export default Tags;
