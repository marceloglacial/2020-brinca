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
          className='partners__filter-tag btn btn--clear'
          key={index}
          onClick={() => removeTag(item)}
        >
          {item} <span className='partners__filter-close'>X</span>
        </button>
      ))}
    </div>
  );
};

export default PartnersTags;
