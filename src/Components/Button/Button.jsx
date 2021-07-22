import PropTypes from 'prop-types'

const Button = ({ btnType, btnName, onClick }) => {
    return (<>
            <button type={btnType} onClick={onClick}>{btnName}</button>
        </>
    )
}

Button.defaultProps = {
    btnType: "button",
}

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
  price: PropTypes.func,
};

export default Button