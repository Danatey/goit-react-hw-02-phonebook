const Button = ({btnType, btnName, onClick}) => {
    return (<>
            <button type={btnType} onClick={onClick}>{btnName}</button>
        </>
    )
}
export default Button