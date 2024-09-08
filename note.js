let btn=document.querySelector(".btn");
let main=document.querySelector("#main");
const savenotes=()=>{
const notes=document.querySelectorAll(".note textarea");
console.log(notes)
const data=[];
notes.forEach((note)=>{
data.push(note.value);
}
)
localStorage.setItem("notes",JSON.stringify(data));
}

btn.addEventListener("click",function(){
    let note=document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
    <div class="nav">
    <i class="fa-solid fa-floppy-disk save"></i>
                    <i class="fa-solid fa-trash trash"></i>
                    
                </div>
                <textarea ></textarea>
    `;
    note.querySelector(".trash").addEventListener("click",function(){
        note.remove();
    })
    note.querySelector(".save").addEventListener("click",function(){
        savenotes();
    })
main.appendChild(note);
})
