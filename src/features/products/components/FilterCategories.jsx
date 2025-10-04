
const FilterCategories = ({ categories }) => {
  return (
    <article className="d-flex justify-content-center gap-2 pt-4 position-sticky top-0 menuCategoryContainer">
      {categories.map((category) => (
        <a
          className="text-secondary text-decoration-none px-5 py-3 rounded-5 border border-secondary"
          href={`#${category}`}
          key={category}
        >
          {category}
        </a>
      ))}
    </article>
  );
};

export default FilterCategories;
