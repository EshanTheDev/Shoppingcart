// display in card 

let sum = 0 ;

function showcard (data){
const itemName =data.childNodes[3].childNodes[3].innerText;
const li = document.createElement('li') ;
    li.innerText = itemName ;

const newItem = document.getElementById('new-Items');
newItem.appendChild(li);


const price = data.childNodes[3].childNodes[5].innerText.split(" ")[0] ;

 sum = parseFloat(sum) + parseFloat(price) ;
 const desimalNum = sum.toFixed(2)


 document.getElementById('totalField').innerText= desimalNum ;

 const purchaseBtn = document.getElementById('btn-purchase');

if(desimalNum > 0){
    purchaseBtn.disabled = false
    
}
else{
    purchaseBtn.disabled = true ;
}


// apply btn input value 
const applyBtn = document.getElementById('apply-btn')
if(desimalNum >=200 ){
    applyBtn.disabled = false
}
else{
    applyBtn.disabled = true ;
}


// document.getElementById('apply-btn').addEventListener('click',function(){

// const discountvalue = document.getElementById('discount');

// const discount = desimalNum * 0.2 / 100 ;

// discountvalue.innerText = discount
// })



}







