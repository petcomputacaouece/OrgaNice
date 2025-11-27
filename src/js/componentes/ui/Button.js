function Button({ textButton = "", onClick, className = "" }) {
    return (
        <button className={`bg-gradient text-bg-secondary rounded-xl text-xl min-h-12 min-w-32 h-auto m-auto px-4 ${className}`} >{textButton}</button>
    )
}