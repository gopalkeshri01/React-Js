// const heading = React.createElement("h1", { id: "heading1", xyz: "abc" }, "Hello world from React");


// const container = ReactDOM.createRoot(document.getElementById("container"));

// container.render(heading);
const Parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")]
),

    React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")]
)
]

);
console.log(Parent);

const container = ReactDOM.createRoot(document.getElementById("header"));
container.render(Parent);