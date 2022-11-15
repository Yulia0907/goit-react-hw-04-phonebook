import PropTypes from 'prop-types';
import { FilterLabelStyles, FilterInputStyles } from './Filter.styled';

export const Filter = ({ filter, handleChange }) => {
  return (
    <FilterLabelStyles>Find contacts by Name
    <FilterInputStyles
      type="text"
      name="filter"
      placeholder="Name..."
      value={filter}
      onChange={handleChange}
    />
    </FilterLabelStyles>
);
  };
  
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
