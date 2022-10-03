function onLoad(){
    let who = ['The dog','My granma','His turtle','My bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
    let quien = Math.floor(Math.random() * who.length);
    let que =  Math.floor(Math.random() * what.length);
    let cuando= Math.floor(Math.random() * when.length);
    return(who[quien]+" "+what[que]+" "+when[cuando]+" .");
}
document.getElementById("excuse").innerHTML = onLoad();