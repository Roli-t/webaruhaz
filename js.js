$(function(){

    const termekek=[];

    adatokBeolvas("termekek.json",termekek,megjelenit);
    
    

    function megjelenit(tomb){

       
        let adat="";
        tomb.forEach(function(value,index){
            adat+="<div id='"+ index +"'>"; 
            adat+="<h3>"+value.nev+"</h3>";
            adat+="<img src='"+ value.kep+"'>";
            adat+="<p>"+value.leiras+"</p>";
            adat+="<span>"+value.ar+" Ft</span>"
            
            adat+="</div>";
            
            
    
            
        }
        
        
    
        );
    
        $("article").html(adat);
        
    
        console.log(termekek);
    }











    function adatokBeolvas(fajlnev, tomb,myCallBack){
        $.ajax({
    
            url:fajlnev,
            success: function(result){
                result.forEach((value) => {
                    tomb.push(value);
                });
                myCallBack(tomb);
                
            }

        });
    }


}
);