window.addEventListener("DOMContentLoaded", () => {


    const [...btns] = document.querySelectorAll("input[type='button']"), 
      showSpace = document.querySelector("input[type='text']");
   
   let number1 = new Number ();
   let number2 = new Number ();
   let operation;
   let currNum = 1;
   
   const memorySymbol = document.querySelector(".m");
   let memory = 0;
   let num2StartAfterRes = false;
    console.log(btns);
   
   addNum1 = (num) => {
       if (num!=='.') {
           showSpace.value += num;
           number1+=num;
       } else if (!showSpace.value.includes('.') && num==='.' && showSpace.value.length!==0) {
           showSpace.value += num;
           number1+=num;
       }
       return console.log(number1);
       }
   
   addNum2 = (num) => {
       if (num!=='.') {
           showSpace.value += num;
           number2+=num;
       } else if (!showSpace.value.includes('.') && num==='.' && showSpace.value.length!==0) {
           showSpace.value += num;
           number2+=num;
       }
       return console.log(number2);
   }
       
    toStartNum2 = (btn) => {
       if (num2StartAfterRes===true) {
           showSpace.value='';
           num2StartAfterRes=false;
       }
       addNum2(btn.value);
       btns[19].removeAttribute("disabled");
   }
   
   equalsFunc = (thisBtn) => {
       if (operation==='+') {
           number1 = parseFloat(number1)+parseFloat(number2);
       }
       if (operation==='-') {
           number1 = parseFloat(number1)-parseFloat(number2);
       }
       if (operation==='*') {
           number1 = parseFloat(number1)*parseFloat(number2);
       }
       if (operation==='/') {
           number1 = parseFloat(number1)/parseFloat(number2);
       }
           
       currNum=1;
       let a = 2.5;
       oneDecimal = (num) => {
           return num.toString().split(".")[1].length===1 ? true : false;
       }
       Number.isInteger(number1) ? number1 : oneDecimal(number1) ? number1=number1.toFixed(1) : number1=number1.toFixed(2);
       showSpace.value=`${number1}`;
       number2 = new Number();
       btns[19].setAttribute("disabled", "")
       if (showSpace.value!=='' && thisBtn.value!=="="){
           operation=thisBtn.value; 
           currNum=2; 
           num2StartAfterRes = true;
       }
   }
   
   allEmpty = () => {
       number1 = new Number();
       number2 = new Number();
       currNum=1;
       showSpace.value='';
       btns[19].setAttribute("disabled", "");
   }
   opFunc = (thisBtn) => {
       if (currNum===1) {
           operation=thisBtn.value; 
           currNum=2; 
           showSpace.value='';
       }else {
           equalsFunc(thisBtn);
       }
   }
   
   memoryPlus = () => {
       showSpace.value!=='' ? (memory += parseFloat(showSpace.value), memorySymbol.classList.remove("m-display-none")) : alert('немає числа!');
   }
   
   memoryMinus = () => {
       showSpace.value!=='' ? (memory -= parseFloat(showSpace.value), memorySymbol.classList.remove("m-display-none")) : alert('немає числа!');
   }
   
   memoryShow = () => {
       showSpace.value=memory;
       if (currNum===1) { 
           number1=memory; 
       }else {
           number2=memory; 
           btns[19].removeAttribute("disabled");
       };
   }
   memoryDelete = () => {
       memory=0;
       memorySymbol.classList.add("m-display-none");
   }
   
   btns.forEach((btn) => {
       Number.isInteger(parseInt(btn.value)) || btn.value==='.' ? btn.addEventListener("click", () => currNum===1 ? addNum1(btn.value) : toStartNum2(btn)): 
       ["+","-","*","/"].includes(btn.value) ?  btn.addEventListener("click", () => {opFunc(btn)}) : 
       btn.value==="=" ? btn.addEventListener("click", () => equalsFunc()) : 
       btn.value==="C" ? btn.addEventListener("click", () => allEmpty()) : 
       btn.value==="m+" ? btn.addEventListener("click", () => memoryPlus()) : 
       btn.value==="m-" ? btn.addEventListener("click", () => memoryMinus()) : 
       btn.value==="mrc" ? (btn.addEventListener("click", () => memoryShow()), btn.addEventListener("dblclick", () => memoryDelete())) : btn.addEventListener("click", () => alert("error")); 
   })
   
   })