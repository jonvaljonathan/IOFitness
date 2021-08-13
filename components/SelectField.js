import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

function SelectField({ label, defaultValue, name, array, control, errors }) {
  return (
    <section className="formInput" error={errors}>
      <InputLabel shrink id="demo-simple-select-placeholder-label-label">
        {label}
      </InputLabel>
      <Controller
        name={name}
        render={({ field }) => (
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Select {...field} style={{ width: '100%', padding: '0' }}>
            {array.map((x) => (
              <MenuItem name={x} key={x} value={x}>
                {x}
              </MenuItem>
            ))}
          </Select>
        )}
        control={control}
        defaultValue={defaultValue}
        rules={{ required: 'this is required' }}
      />
    </section>
  );
}

SelectField.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
  label: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
};

SelectField.defaultProps = {
  user: null,
  label: null,
  errors: null,
};

export default SelectField;
