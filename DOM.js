//Select Elements by ID: "Returns a single element"
const elementId = document.getElementById("hCnt");
console.log("Get Element By ID:");
console.log(elementId);
//Select Elements by className: "Returns a multiple element"
const className = document.getElementsByClassName("Hcnt");
console.log("Get Element By className:");
console.log(className);
console.log(className[0].innerText);
//Select Elements by tagName:
// const idName = document.querySelector("Pcnt");
const tagName = document.getElementsByTagName("p");
console.log("Get Element By tagName:");
console.log(tagName);

//Select Elements by Query:"Returns a single element"
const id_name = document.querySelector("#hCnt");
const class_name = document.querySelector(".pCnt");
const element_name = document.querySelector("button");
console.log("Get Element By Query Selector:");
console.log(id_name);
console.log(class_name);
console.log(element_name);
//Select Elements by QueryALL:"Returns a multiple element"
console.log("Get Element By Query Selector All:");
const ans = document.querySelectorAll(".pCnt");
console.log(ans);

//Change Element Text:
console.log("Change Element Text:");
const txt = document.getElementById("head");
console.log("Before:");
console.log(txt.textContent);
txt.textContent = "Modified Heading";
console.log("After:");
console.log(txt.textContent);
//Display:textContent vs innerText
const txt2 = document.querySelector(".para1");
console.log(`txt2.textContent:${txt2.textContent}`);
console.log(`txt2.innerText:${txt2.innerText}`);

//Change Element Style:
//if in case there are multiple div's and to uniquely identify and change the styles use this method to select the div with its class name
console.log("Change Element Style:");
const d1 = document.querySelector("div.cntr h1");
// console.log(d);
d1.style.color = "red";
const d2 = document.querySelector("div.cntr p")
d2.style.backgroundColor = "yellow";
const d3 = document.querySelector("div.cntr1 h1");
// console.log(d);
d3.style.color = "Blue";
const d4 = document.querySelector("div.cntr1 p")
d4.style.backgroundColor = "violet";

//Get and Set Attribute:

//Get before Set:
console.log("Get before Set:")
const value = document.querySelector("div.cntr2 li.lst-itm1 a");
console.log(value.getAttribute("href"));

//Set:
const link1 = document.querySelector("div.cntr2 li.lst-itm1 a");
link1.setAttribute("href","https://www.google.com/");
const link2 = document.querySelector("li.lst-itm2 a");
link2.setAttribute("href","https://www.youtube.com/");
const link3 = document.querySelector("li.lst-itm3 a");
link3.setAttribute("href","https://www.facebook.com/");
// const link = document.querySelector("div.cntr1 p a");
// link.setAttribute("href","https://www.wikipedia.org/");

//Get after Set:
console.log("Get after Set:")
console.log(value.getAttribute("href"));

//Select Multiple Elements and Loop them:
console.log("Select Multiple Elements:");

//querySelectorAll:
const op1 = document.querySelectorAll(".navItem");
console.log(op1);//NodeList
console.log(typeof(op1));//array like object
console.log(Array.isArray(op1));
console.log(op1.length);
console.log(op1[1]);

//select Multiple Elements by className:
const op2 = document.getElementsByClassName("navItem");
console.log(op2);//HTML COllections
console.log(typeof(op2));//array like object
console.log(Array.isArray(op2));
console.log(op2.length)
console.log(op2[2]);

//Iterating Multiple Elements:

// NodeList Items/Elements
const data = document.querySelectorAll(".Item");

//Simple for loop:
for(i=0;i<data.length;i++){
    const item = data[i];
    item.style.fontWeight = "bold";
    item.style.color = "red";
    item.style.backgroundColor = "yellow";
}

//forOf loop:
for(item of data){
    item.style.fontWeight = "bold";
    item.style.color = "yellow";
    item.style.backgroundColor = "violet";
}

//forEach Loop:
data.forEach((item) => {
    item.style.fontWeight = "bold";
    item.style.color = "black";
    item.style.backgroundColor = "purple";
});

// HTMLCollections Item/Elements
let data1 = document.getElementsByClassName("Item");
//Gives Error with forEach so converts HTMLCollections object into Array
data1 = Array.from(data1);//converting object to array
data1.forEach((item) => {
    item.style.fontWeight = "bold";
    item.style.color = "white";
    item.style.backgroundColor = "skyblue";
});

//innerHTML:
console.log("InnerHTML:")
const data2 = document.querySelector("div.cntr5")
console.log(data2)
console.log("Element inside the Div before changes:")
console.log(data2.innerHTML)
data2.innerHTML = "<h1 class=\"Item\">Heading</h1>\n"
data2.innerHTML += "<p class=\"Item\">Paragraph</p>\n"
data2.innerHTML += "<button>Start</button>"
console.log("Element inside the Div after changes:")
console.log(data2.innerHTML)
//Note: To use ("") inside a string as we defined class name in above example we use (\"string\")