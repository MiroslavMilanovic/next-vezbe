interface Params {
    className?: string;
    children?: React.ReactNode;
}

export function CircleBox({className, children}:Params){
    return(
        <div className={`aspect-square h-full max-w-min ${className}`}>
            {children}
        </div>
    )
}