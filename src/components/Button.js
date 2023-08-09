
const Button = (props) => {
    const { title , handleClick } = props

    return (
        <button className="button" onClick={handleClick}>{title}</button>
    )

}

export default Button