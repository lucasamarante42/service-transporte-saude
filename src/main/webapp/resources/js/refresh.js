function Ajax(){
var xmlHttp;
    try{    
        xmlHttp=new XMLHttpRequest();// Firefox, Opera 8.0+, Safari
    }
    catch (e){
        try{
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP"); // Internet Explorer
        }
        catch (e){
            try{
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e){
                alert("No AJAX!?");
                return false;
            }
        }
    }

xmlHttp.onreadystatechange=function(){
    if(xmlHttp.readyState==4){
        document.getElementById('ReloadThis').innerHTML=xmlHttp.responseText;
        setTimeout('Ajax()',5000);
    }
}
xmlHttp.open("GET","solicitacao-app.jsp",true);
xmlHttp.send(null);
}
window.onload=function(){
    setTimeout('Ajax()',5000);
}


