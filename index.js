        //Define variables


//Show time function

function showTime(){
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()


    addHours= document.getElementById("hours")
    addMinutes = document.getElementById("minutes")
    addSeconds = document.getElementById("seconds");
    

    //seconds logic

    if(s<9){
        addSeconds.innerText= "0" + s
    }else{
        addSeconds.innerText=s
    }

    //minutes logic

    if(m < 9){
        addMinutes.innerText= "0" + m
    }else{
        addMinutes.innerText= m
    }

    //Hours logic

    if(h < 9){
        addHours.innerText= "0" + h
    }else{
        addHours.innerText= h
    }



    setTimeout(showTime, 1000)

}
//Call function
showTime()