var progressElement=document.getElementsByClassName("progress")
console.log(progressElement)
var i=0
setInterval(()=>{
    for(const element of progressElement){
        element.dataset.label=i+"%"
    }
    i++
},1000)