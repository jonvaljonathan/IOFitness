import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import { styleSelectInput } from './SharedStyles';

function SelectField({
  input,
  label,
  defaultValue,
  name,
  array,
  control,
  handleMultiChange,
  errors,
}) {
  return (
    <section className="formInput" error={errors} style={styleSelectInput}>
      <InputLabel shrink id="demo-simple-select-placeholder-label-label">
        {label}
      </InputLabel>
      <Controller
        render={() => (
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Select defaultValue={defaultValue} input={input}>
            {array.map((x) => (
              <MenuItem name={x} key={x} onChange={handleMultiChange} isMulti value={x}>
                {x}
              </MenuItem>
            ))}
          </Select>
        )}
        name={name}
        rules={{ required: 'this is required' }}
        control={control}
      />
    </section>
  );
}

SelectField.propTypes = {
  input: PropTypes.object,
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
  label: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object.isRequired,
  handleMultiChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object,
};

SelectField.defaultProps = {
  input: null,
  user: null,
  label: null,
  errors: null,
};

export default SelectField;
