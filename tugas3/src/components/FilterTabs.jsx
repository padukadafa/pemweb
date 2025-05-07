import PropTypes from "prop-types";

const FilterTabs = ({ statusFilter, setStatusFilter }) => (
  <div>
    {["all", "owned", "reading", "wishlist"].map((status) => (
      <button
        key={status}
        onClick={() => setStatusFilter(status)}
        style={{ fontWeight: statusFilter === status ? "bold" : "normal" }}
      >
        {status.toUpperCase()}
      </button>
    ))}
  </div>
);

FilterTabs.propTypes = {
  statusFilter: PropTypes.string.isRequired,
  setStatusFilter: PropTypes.func.isRequired,
};

export default FilterTabs;
