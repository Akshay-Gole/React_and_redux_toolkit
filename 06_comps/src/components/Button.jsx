import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = className(rest.className, 'px-3 py-1.5 border flex items-center', {
        "border-blue-500 bg-blue-500 text-white": primary,
        "border-slate-900 bg-slate-900 text-white": secondary,
        "border-green-500 bg-green-500 text-white": success,
        "border-yellow-400 bg-yellow-400 text-white": warning,
        "border-red-500 bg-red-500 text-white": danger,
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-700": outline && primary,
        "text-slate-900": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-400": outline && warning,
        "text-red-500": outline && danger,
    })

    console.log(classes)

    console.log(outline && primary)

    return <button {...rest} className={classes}>{children}</button>
}

export default Button