$( document ).ready(function() {  
    $('.nav-header').html('<a class="navbar-brand"><button type="button" class="btn btn-default btn-sm" onclick="location.href=&quot;../index.html&quot;"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>&nbsp;Add Savings</a>');
});

function addSaving(){
    var amount = isNaN(document.getElementById('inputAmount').value);
    if(!amount){
        alert('You have successfull added $'+document.getElementById('inputAmount').value+'.00');
    }
    else{
        alert('PLEASE, enter a numerical value');
    }
}