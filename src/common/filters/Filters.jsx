import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useProductsFilters } from "../../features/admin/hooks/useProductsFilters";

const Filters = () => {

  const { search } = useSelector((state)=>state.filters);
  const { filterSearch, applyFilters } = useProductsFilters();

  const filterByName = (e) => {
      filterSearch(e.target.value);
  }

  return (
    <Form className="mt-4 mb-5 px-2">
      <Form.Group className="search mb-3 rounded-4">
        <Form.Control
          className="py-3 px-4 rounded-5"
          type="text"
          placeholder="Escribe el nombre..."
          value={search}
          onChange={(e) => filterByName(e)}
        />
      </Form.Group>
    </Form>
  );
};

export default Filters;
