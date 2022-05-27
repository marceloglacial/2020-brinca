const PartnersTags = ({ tags, setTags }) => {
  const hasTags = tags?.length > 0;
  const removeTag = (id) => {
    return setTags(tags.filter((tag) => tag !== id));
  };

  if (!hasTags) return false;

  return (
    <div className='partners__filter-tags'>
      {tags.map((item, index) => (
        <button
          className='partners__filter-tag'
          key={index}
          onClick={() => removeTag(item)}
        >
          {item} X
        </button>
      ))}
    </div>
  );
};

export default PartnersTags;
