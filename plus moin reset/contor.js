var s=document.getElementById('som')
var p=document.getElementById('pa')
var m=document.getElementById('moy')
var r=document.getElementById('res')
var i=0
function add(){
    i++
    p.innerHTML=i
    if(i>0){
        p.style.color='red'
    }
    else if(i<0){
        p.style.color='blue'
    }
    
}
function moin(){
    i--
    p.innerHTML=i
    if(i>0){
        p.style.color='red'
    }
    else if(i<0){
        p.style.color='blue'
    }

}
function reset(){
    i=0
    p.innerHTML=i
    
    p.style.color='black'
    
}

s.addEventListener('click',add)
m.addEventListener('click',moin)
r.addEventListener('click',reset)


