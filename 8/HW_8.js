window.onload = () => { 
    const list = document.getElementById("list");
    const [...btns] = document.querySelectorAll("input");
    
    function allBlack (list) {
        const [...listElements] = list.children;
        listElements.forEach(function(el){
            el.classList.remove("select");
        });
    }

    btns[0].onclick = function () {
        allBlack(list);
        list.firstElementChild.classList.add("select");
    }

    btns[1].onclick = function () {
        allBlack(list);
        list.lastElementChild.classList.add("select");
    }

    btns[2].onclick = function () {
        let thisEl = document.querySelector(".select");
        allBlack(list);
        if (thisEl===list.lastElementChild){
            list.firstElementChild.classList.add("select");
        }else{
            thisEl.nextElementSibling.classList.add("select");
        }
    }

    btns[3].onclick = function () {
        let thisEl = document.querySelector(".select");
        allBlack(list);
        if (thisEl===list.firstElementChild){
            list.lastElementChild.classList.add("select");
        }else{
            thisEl.previousElementSibling.classList.add("select");
        }
    }

    let lastCount = 6;
    btns[4].onclick = function () {
        let newLi = document.createElement("li");
        //let countLi = list.children.length;
        //newLi.innerText = `List Item ${countLi+1}`
        if(list.children.length===0){
            lastCount=1;
            firstCount=0;
        }
        newLi.innerText = `List Item ${lastCount++}`
        list.append(newLi);
    }

    btns[5].onclick = function () {
        list.firstElementChild.remove();
        firstCount++;
    }

    btns[6].onclick = function () {
        list.lastElementChild.remove();
        lastCount--;
    }

    btns[7].onclick = function () {
        list.children[Math.floor(list.children.length/2)].remove();
    }

    let firstCount = 0;
    btns[8].onclick = function () {
        let newLi = document.createElement("li");
        if(list.children.length===0){
            firstCount=1;
            lastCount=2;
        }
        newLi.innerText = `List Item ${firstCount--}`
        list.prepend(newLi);
    }
    
}