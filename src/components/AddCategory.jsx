import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newValue = inputValue.trim();
    if (newValue.length <= 2) return;
    onNewCategory(newValue);
    setInputValue("");
  };

  return (
    <form className="search__form" onSubmit={onSubmit} aria-label="form">
      <input
        className="search__bar"
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="search__btn">
        <FaSearch className="fa-search" />
      </button>
    </form>
  );
};


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
