import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>(
    <div>
        Hello world!!!!!!!!!!!!!!!!!!!!!!!!!!
    </div>
)


var myNewP=document.createElement("p")
myNewP.innerHTML = "This is a paragraph."


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)


ReactDOM.render(<div><h1>Hello World!</h1><p>This is a paragraph</p></div>, document.getElementById("secondDiv"))