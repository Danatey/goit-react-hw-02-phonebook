import Proptypes from 'prop-types'

const Input = ({ type, value, name, pattern, title, id, onChange }) => {
  return (<>
        <label htmlFor={id}>{name}</label>
        <input
          type={type}
          value={value}
          name={name}
          pattern={pattern}
          title={title}
          id={id}
          onChange={onChange}
          required/>  
        </>
    )
}

Input.propTypes = {
  type: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  name: Proptypes.string,
  pattern: Proptypes.string,
  title: Proptypes.string,
  id: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
}

export default Input