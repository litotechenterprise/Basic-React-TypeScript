interface childProps {
    color:String
    onClick: () => void
}

export const Child = ({color, onClick}:childProps) => {
    return <div>
        {color}
        <button onClick={onClick}>

        </button>
        </div>
}

export const ChildAsFC: React.FC<childProps> = ({color}) => {
    return <div>{color}</div>
}