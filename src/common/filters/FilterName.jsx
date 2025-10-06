import { Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useProductsFilters } from "../../features/admin/hooks/useProductsFilters";
import IconSearch from "../icons/IconSearch";
import "./filterName.css";

const FilterName = () => {
  const { nombre } = useSelector((state) => state.filters);
  const { filterSearch, applyFilters } = useProductsFilters();

  const filterByName = (e) => {
    filterSearch(e.target.value);
  };

  const handleEnter = (e) => (e.key === "Enter" ? e.preventDefault() : null);

  return (
    <Form className="mt-5 px-2 d-flex formSearch">
      <InputGroup className="search mb-3 rounded-4 d-flex px-0">
        <InputGroup.Text
          id="basic-addon1"
          className="rounded-start-5 bg-white border-none ps-4 input"
        >
          <IconSearch />
        </InputGroup.Text>{" "}
        <Form.Control
          className="py-3 rounded-end-5 border-start-0 input search"
          type="text"
          placeholder="Escribe el nombre..."
          value={nombre}
          onChange={(e) => filterByName(e)}
          onKeyDown={(e) => handleEnter(e)}
        />
      </InputGroup>
    </Form>
  );
};

export default FilterName;
