const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm H! tag"),React.createElement("h1",{},"I'm H! tag")])
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
