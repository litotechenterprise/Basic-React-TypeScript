const EventComponent: React.FC = () => {

    const onChance = (event: React.InputHTMLAttributes<HTMLInputElement>) => {
        console.log(event)
    }

    const onDrag = (event: React.DragEvent<HTMLDivElement>) => {
        console.log("im Being dragged")
    }

    return <div>
        <input type="text" onChange={onChance} />
        <div draggable onDragStart={onDrag}>
            Drag Me
        </div>
    </div>
}


export default EventComponent;