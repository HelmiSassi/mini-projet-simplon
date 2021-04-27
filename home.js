
function affichInput(){

    if(document.getElementById('rang').style.display == 'none'){

        document.getElementById('rang').style.display = 'block';

    }else{
        document.getElementById('rang').style.display = "block";
    }
}


var rangee = new Array();
rangee[0] = []
rangee[1] = []
rangee[2] = []
rangee[3] = []
rangee[4] = []
rangee[5] = []
rangee[6] = []
rangee[7] = []


function pushtable(){
    var nbrang = document.getElementById("nbrang").value;
    var nbplace = document.getElementById("nbplace").value;
    
   
   if(rangee[nbrang-1]){
    for(i = 0; i < nbplace; i++){
        if(rangee[nbrang-1].length <= 8){
           
            rangee[nbrang-1].push("X");
            
        } else { alert("Rangée pleine")}
             
    }
}
    
    console.table(rangee);
    document.forms[0].reset();
    

}


