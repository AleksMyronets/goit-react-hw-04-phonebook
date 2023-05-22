import PropTypes from 'prop-types'
import { InputFilter } from "./Filter.styled"

export const Filter = ({ value, onChange }) => {
    return (
          <label>
              <InputFilter type="text" placeholder="Find contacts by name" value={value} onChange={onChange}/>
        </label>
    )
} 

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};