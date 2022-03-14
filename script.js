const c = (el) =>{
    return document.querySelector(el);
}


pizzaJson.map((item, index)=>{
   let pizzaItem = c('.models .pizza-item').cloneNode(true);


   c('.pizza-area').append( pizzaItem );
});