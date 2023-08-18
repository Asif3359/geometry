// function 1 
function getInputValue(input)
{

    const inputvalue = parseFloat(document.getElementById(input).value);
    return inputvalue;
}

// function 2
function setElementbyValue(element , Value)
{
    document.getElementById(element).innerText = Value;
    
}

// function 3
let count = 1;
function CreatAttribute(title , area) {
    const p = document.createElement("p");
    const id = document.createAttribute('id');
    id.value = 'supid'; 
    p.setAttributeNode(id);

    const sup = document.createElement('sup');
    sup.innerHTML = `2`;

    p.appendChild(sup); // Append the <sup> element to the paragraph
    const name = document.getElementById(title).innerText;

    
    p.innerHTML =  count++ +'. '+name+'  ' + area + "     cm" + sup.outerHTML + "      " +"     "+ `<br><button class="btn btn-primary ml-3 mb-2 mt-2" > convert cm</button><hr class="border-[1px] border-gray-800 mb-4">`; // Use sup.outerHTML to get the HTML string of the <sup> element
    document.getElementById('all-list').appendChild(p);
}



// document.getElementById('btn-triangle').addEventListener('click',function()
// {
//     const Base = getInputValue('base-triangle');
//     const Hight= getInputValue('hight-triangle');
//     const area = 0.5* Base* Hight;
//     setElementbyValue("triangle-area" , area);
//     CreatAttribute ("triangle-h1",area);

// });

function triangleareaCalculate(target){
    const Base = target.parentNode.childNodes[5].childNodes[1].childNodes[0].value;
    const Hight = target.parentNode.childNodes[5].childNodes[3].childNodes[0].value;
    const area = Base* Hight;
    setElementbyValue("triangle-area" , area);
    CreatAttribute ("triangle-h1",area);;

}


function RectangleareaCalculate(target){
    const Base = target.parentNode.childNodes[5].childNodes[1].childNodes[0].value;
    const Hight = target.parentNode.childNodes[5].childNodes[3].childNodes[0].value;
    const area = Base* Hight;
    setElementbyValue("rectangle-area" , area);
    CreatAttribute ("rectangle-h1",area);;

}

function ParallelogramareaCalculate(target){
    const Base = target.parentNode.childNodes[5].childNodes[1].childNodes[0].value;
    const Hight = target.parentNode.childNodes[5].childNodes[3].childNodes[0].value;
    const area = Base* Hight;
    setElementbyValue("Parallelogram-area" , area);
    CreatAttribute ("Parallelogram-h1",area);

}

function RhombusareaCalculate(target){
    const Base = target.parentNode.childNodes[5].childNodes[1].childNodes[0].value;
    const Hight = target.parentNode.childNodes[5].childNodes[3].childNodes[0].value;
    const area = 0.5 * Base* Hight;
    setElementbyValue("Rhombus-area" , area);
    CreatAttribute ("Rhombus-h1",area);

}
function pentagonareaCalculate(target){
    const Base = target.parentNode.childNodes[5].childNodes[1].childNodes[0].value;
    const Hight = target.parentNode.childNodes[5].childNodes[3].childNodes[0].value;
    const area = 0.5 * Base* Hight;
    setElementbyValue("pentagon-area" , area);
    CreatAttribute ("pentagon-h1",area);

}
function ellipseareaCalculate(target){
    const Base = target.parentNode.childNodes[5].childNodes[1].childNodes[0].value;
    const Hight = target.parentNode.childNodes[5].childNodes[3].childNodes[0].value;
    const area = 3.1416 * Base* Hight;
    setElementbyValue("ellipse-area" , area);
    CreatAttribute ("ellipse-h1",area);

}
