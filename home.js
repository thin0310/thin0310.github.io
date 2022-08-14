const search_item = document.getElementById('search-item');
const country = document.querySelectorAll('.country');

search_item.addEventListener('keyup', seachItem);

function seachItem(){
   let valueItem = search_item.value.toLowerCase();
   Array.from(country).forEach(function(ele){
    let nameItem = ele.querySelector('.infor').firstElementChild.textContent;
    if(nameItem.toLowerCase().indexOf(valueItem) !== -1){
        ele.style.display = 'block';
    }
    else{
        ele.style.display = 'none';
    }
   })
   
}



