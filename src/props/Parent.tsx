import { Child } from "./child";

const Parent = () => {
    return <Child color={"red"} onClick={() => console.log("hello")}/>;
};

export default Parent