var input;
var saygac=0;
var b;
var num=Math.round(Math.random()*99+1);
console.log(num);
var now=new Date();
function start(){
    document.getElementById("steps").style="display:block";
    document.querySelector(".gameabout").style="display:none";

}
document.getElementById("date").innerHTML=now;
   if(num%2==0){
    document.getElementById("tekcut").innerHTML="Tutulan ədəd cütdür!!!";
}else{
        document.getElementById("tekcut").innerHTML="Tutulan ədəd təkdir!!!";

}
if(num>50){
    document.getElementById("elliden").innerHTML="Həmçinin ədəd 50 və 100 arasında yerləşir";
}else{
        document.getElementById("elliden").innerHTML="Həmçinin ədəd 0 və 50 arasında yerləşir";

}
function sansver(){
    var sans=document.getElementById("sans").value;
    document.getElementById("game").style.display="block";
    document.getElementById("steps").style.display="none";
    b=sans;
}
function yoxla(){
    saygac++;
    console.log(saygac);
   
    input=document.getElementById("search").value;
    document.getElementById("inputted").innerHTML=input;
    if(isNaN(input)){
                document.getElementById("result").innerHTML="Yazdığınız hər nədisə,rəqəm deyil!!!";

    }else{
    if(num==input){
        document.getElementById("result").innerHTML="Bravo Siz Doğru Cavabı yazdınız!!! ";
        document.getElementById("result").style="background:blue; transform:rotate(360deg); border:1px solid grey; border-radius:20px";
        b++;
    }else{
        if(num>input){
                    document.getElementById("result").innerHTML="Siz nəzərdə tutulandan daha kiçik rəqəm daxil etmisiniz,zəhmət olmazsa biraz qaldırın!!!";

        }else{
                    document.getElementById("result").innerHTML="Siz nəzərdə tutulandan daha böyük rəqəm daxil etmisiniz,zəhmət olmazsa biraz endirin!!!";

        }
    }
}    
document.getElementById("laststep").innerHTML="Sizin "+(b-saygac) +" Gedisiniz qaldi";

    if(saygac==b){
        document.getElementById("game").style.display="none";
        document.getElementById("end").innerHTML="Çox təəssüf siz məğlub oldunuz";
    }
}
