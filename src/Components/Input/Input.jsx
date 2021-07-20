const Input = ({type, value, name, pattern, title, id, onChange}) => {
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

export default Input