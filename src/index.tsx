import ReactDOM from "react-dom";
import UserSearch from "./classes/UserSearch";
const users = [
    {name:"Peter", age: 34},
    {name:"Frank", age: 20},
    {name:"Pablo", age: 25},
    {name:"Sam", age: 44},
]
const App = () => {
    return(
        <div>
            <UserSearch users={users}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#root"))