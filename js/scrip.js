const submitThis = document.getElementById("save");
const list = document.getElementById("theList");
const deleteThis = document.getElementById("deleteThis");
const txtInput = document.getElementById("input");
const recent = document.getElementsByClassName("recent-save")

submitThis.addEventListener("click", saveThis);


function saveThis() {
    // console.log(theList.children);
    let record =[], listItems = list.children;

    for (let i=0; i < listItems.length; i++){

        record.push(listItems[i].textContent);
        saveAll(record);
    }




function saveAll(entry){
    if(localStorage.getItem("info")==null){

        localStorage.setItem("info", JSON.stringify(entry));
    }else{
        let entries = JSON.parse(localStorage.getItem("info"));

        localStorage.setItem("info", JSON.stringify(entries.concat(entry)));
    }
    console.log(localStorage.getItem("info"));
}

deleteThis.addEventListener("click",  clearSaves);
function clearSaves(){
    confirm('Are you sure you want to delete saves?');
    if(confirm == true){
        localStorage.setItem("info", JSON.stringify([]));
    console.log(localStorage.getItem("info"));
    }else{
        return null
        // break;
    }
}


// function saveThis(){
//     let data = txtInput.value;
//     saveAll(data);
//     
//     displaySave();
// }



// function saveAll(box){
//     if(localStorage.getItem("info") == null){
//         let saveData = [];
//         saveData.push(box);

//         localStorage.setItem("info", JSON.stringify(saveData));

//     }else{
//         let saveData = JSON.parse(localStorage.getItem("info"));
//         saveData.push(box);
//         localStorage.setItem("info", JSON.stringify(saveData))
//     }
// }
// console.log(localStorage.getItem("info"))
// function displaySave(){
//     if(localStorage.getItem("info") != null){
//         let saveData = JSON.parse(localStorage.getItem("info"));
//         recent.innerHTML = "";
//         for (let i = 0; i < saveData.length; i++){
//             recent.innerHTML += `<li>${saveData[i]}</li>`;
//         }
        
//     }else{
//         recent.innerHTML = `No record`;
//     }
 }