function Button({ textButton = "", onClick, className = "" }) {
    return (
        <button className={`bg-gradient text-bg-secondary rounded-xl text-xl ${className}`} >{textButton}</button>
    )
}