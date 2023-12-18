import Tag from "./Tag";

function Tags({ tags }) {
  return (
    <div className="list-tags">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
}

export default Tags;
