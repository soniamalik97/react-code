const h1 = React.createElement(
    "h1",
    {
        id: "heading",
        xyz: "abc"
    },
    "Hello World created using React!"
); //used React

// console.log(h1); //prints React element which is a normal JS object

// const rootReact = ReactDOM.createRoot(document.getElementById("root"));
// rootReact.render(h1); //render method is converting this h1 object to an h1 tag and putting it in the DOM


{/* <div id="parent">           How do we create such a nested structure in React?
    <div id="child">                 
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
    <div id="child2">                 
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement(
    "div", 
    {id:"parent"},
    [
        React.createElement(
            "div", 
            {id:"child"}, 
            [
                React.createElement("h1", {}, "I'm an h1 tag"), 
                React.createElement("h2", {}, "I'm an h2 tag")
            ]
        ),
        React.createElement(
            "div", 
            {id:"child2"}, 
            [
                React.createElement("h1", {}, "I'm an h1 tag"), 
                React.createElement("h2", {}, "I'm an h2 tag")
            ]
        ),
    ]  
);

//this untidy code is huge and messy, we need to use JSX
const rootReactNested = ReactDOM.createRoot(document.getElementById("root"));
rootReactNested.render(parent);
console.log(parent);

