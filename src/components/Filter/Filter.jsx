import PropTypes from 'prop-types';
import {FilterLabelStyles, FilterInputStyles} from './Filter.styled';

export const Filter = ({ filter, handleChange }) => {
  return (
    <FilterLabelStyles>
      Find contacts by name
      <FilterInputStyles
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Name..."
      />
    </FilterLabelStyles>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};