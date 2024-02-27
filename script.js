document.getElementById("randomize").addEventListener("click",(e)=>{
    const g = getAbstractGrid([2,3,3,2,"blue","red","yellow","brown","#333","lime","aqua","violet"])
    // const g = getAbstractGrid([2,2,2,2,"yellow","#333","#333","yellow","lime","#333","#333","lime"])

    
    const gridBody = document.querySelector("#grid")
    gridBody.innerHTML =""
    gridBody.appendChild(g)
})

function getAbstractSubgrid(root,[d, c1,c2]) {
    console.log("Abstract Subgrid D=",d)
    if(d<=0) return 

    const numCols = Math.floor(Math.random()*4+2);
    const numRows= Math.floor(Math.random()*4+2);
    const box = GridBox()
    box.style.gridTemplateColumns = `repeat(${numCols},1fr)`;
    box.style.width= `100%`;
    box.style.height= `100%`;
    const color = Math.random() > 0.5 ? c2 : c1
    box.style.backgroundColor = color;
    const n = numRows*numCols;
    console.log("Creating N:", n)
    for(let i = 0; i < n; i++){
        getAbstractSubgrid(box,[d-1,c1,c2])
    }
    root.appendChild(box);


}


function GridBox(){
    const elem = document.createElement("div");
    elem.style.display = "grid";
    return elem
}


const getAbstractGrid = ([d1,d2,d3,d4,c1a,c1b,c2a,c2b,c3a,c3b,c4a,c4b] ) => {
    const container = document.createElement("div")
    container.style.width = "100%"
    container.style.height = "100%"
    container.style.display = "grid"
    container.style.gridTemplateColumns= "repeat(2,1fr)";
    container.style.gridTemplateRows= "repeat(2,1fr)";

    const q1Container = GridBox()
    const q2Container = GridBox()
    const q3Container = GridBox()
    const q4Container = GridBox()
    container.appendChild(q1Container)
    container.appendChild(q2Container)
    container.appendChild(q3Container)
    container.appendChild(q4Container)

    //generate q1
    getAbstractSubgrid(q1Container,[d1,c1a,c1b])
    getAbstractSubgrid(q2Container,[d2,c2a,c2b])
    getAbstractSubgrid(q3Container,[d3,c3a,c3b])
    getAbstractSubgrid(q4Container,[d4,c4a,c4b])

    
    return container;
}