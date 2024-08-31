let myLi = document.querySelectorAll(".tabs li");
let myimgs = document.querySelectorAll(".gallery .box-container");

myLi.forEach((li) => {
    li.addEventListener("click", removeActive)
    li.addEventListener("click", removeimgs)
});

function removeActive() {
    myLi.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    })
    }

    function removeimgs() {
        let selectedImgs = [];
        myimgs.forEach((img) => {
            img.style.display = "none";
        })
        document.querySelectorAll(this.dataset.work).forEach((ele) => {
            ele.style.display = "block";
            selectedImgs.push(ele);
        })
            selectedImgs.forEach((slctdImg)=>{
            slctdImg.style.margin = "auto";
        });
    }