//class Component
//function Component
import React  from "react";
class MyComponent extends React.Component{
    //JSX chỉ chưa 1 element
    render (){
        return (
            <div> tui la huynh duc ne
            {Math.random()}
            </div>
        );
        
    }
}
export default MyComponent;