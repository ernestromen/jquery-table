let arrForId = [];
let arrForId2 = [];
let valid = true;

function renderData(data) {
// console.log('here');
let name;
    for (const q in data) {

        // console.log(data[q].id,'here');
        arrForId.push(data[q].id);
      name = $("#name").append(`<div id='${data[q].id}' class='grid-item'>` + data[q].name + "</div>");
      $("#address").append("<div class='grid-item'>" + data[q].address.city + "</div>");
      $("#companyname").append("<div class='grid-item'>" + data[q].company.name + "</div>");
     
    }
 

name.children().on('click',function(){

 


fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(json => {
  if(!($(this).children().hasClass('sub'))){
  for(const q in json){
    // console.log(json[q].name);

    if(json[q].id ==$(this)[0].id ){
        // console.log('equals');
        $(this).append(`<div class=sub>${json[q].name}</div>`);
        // console.log($(this));
        // console.log($(this).children().hasClass('sub'));

    };
  };
  }else{

    $(this).each(function(index){
      $(this).children(":first")[0].remove();
      return true;
      
              })
  }
});
});
      

  
  
  
  }
  

  
  
  
  
  //user fetch
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => renderData(json));
  
  //posts fetch


  
  