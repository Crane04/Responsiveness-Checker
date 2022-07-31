let button=document.querySelector("button")
let enter=document.querySelector("#enter")
let iframes=document.getElementsByClassName("iframes")[0]

function run(){
    iframes.innerHTML=`
    <div class="style">
        <p>Width:240px</p>
        <iframe src=" ${enter.value} " style="width:240px; height:320px"></iframe>
    </div>
    <div class="style">
        <p>Width:320px</p>
        <iframe src="${enter.value}" style="width:320px; height:533px"></iframe>
    </div>
    <div class="style">
        <p>Width:360px</p>
        <iframe src="${enter.value}" style="width:360px; height:640px"></iframe>
    </div>
    <div class="style">
        <p>Width:375px</p>
        <iframe src="${enter.value}" style="width:375px; height:667px"></iframe>
    </div>
    <div class="style">
        <p>Width:384px</p>
        <iframe src="${enter.value}" style="width:384px; height:640px"></iframe>
    </div>
    <div class="style">
        <p>Width:412px</p>
        <iframe src="${enter.value}" style="width:412px; height:732px"></iframe>
    </div>
    <div class="style">
        <p>Width:480px</p>
        <iframe src="${enter.value}" style="width:480px; height:854px"></iframe>
    </div>
    <div class="style">
        <p>Width:502px</p>
        <iframe src="${enter.value}" style="width:502px; height:732px"></iframe>
    </div>
    <div class="style">
        <p>Width:600px</p>
        <iframe src="${enter.value}" style="width:600px; height:1024px"></iframe>
    </div>
    <div class="style">
        <p>Width:768px</p>
        <iframe src="${enter.value}" style="width:768px; height:1024px"></iframe>
    </div>
    <div class="style">
        <p>Width:800px</p>
        <iframe src="${enter.value}" style="width:800px; height:1280px"></iframe>
    </div>
    <div class="style">
        <p>Width:968px</p>
        <iframe src="${enter.value}" style="width:968px; height:1024px"></iframe>
    </div>
    <div class="style">
        <p>Width:1024px</p>
        <iframe src="${enter.value}" style="width:1024px; height:1366px"></iframe>
    </div>
    <div class="style">
        <p>Width:1280px</p>
        <iframe src="${enter.value}" style="width:1280px; height:800px"></iframe>
    </div>
    <div class="style">
        <p>Width:1440px</p>
        <iframe src="${enter.value}" style="width:1440px; height:900px"></iframe>
    </div>
   
    
    `
}