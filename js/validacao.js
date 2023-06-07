
function checkInputs(inputs) {
    var filled = true;

    inputs.forEach(function(input) {
        
      if(input.value === "") {
          filled = false;
      } else {
        filled = true;
      }
    
    });
    
    return filled;
    
  }

 function atualizaPagina(event) {
    event.preventDefault();
    if(filled === false) {
        checkInputs();
    } else {
        return window.location.href="thankspage.html";
    }

}

