function f(age, school, kdg){
    if(age >= 6){
        school()
    }else{
        kdg()
    }
}
f(prompt("greq erexayi tariqy"), school, kdg)
function school(){
    alert("Bari galust")
}
function kdg(){
    alert("Ctesutyun")
}