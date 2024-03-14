function hello(mode){
    let led=document.getElementsByClassName("led")[0]
    led.style.backgroundColor="red";
    setTimeout(()=>{
        led.style.backgroundColor="white";
    },100)
    let video=document.getElementById("video")
    if(mode=="kiss"){
        video.src="kiss.mp4";
    }
    else if(mode=="serious"){
        video.src="serious.mp4"
    }
    else if(mode=="jelous"){
        video.src="jelous.mp4"
    }
    else if(mode=="kutta"){
        video.src="kutta.mp4"
    }
    else if(mode=="perpose"){
        video.src="perpose.mp4"
    }
    else if(mode=="sexy"){
        video.src="sexy.mp4"
    }
    else if(mode=="gyani"){
        video.src="gyani.mp4"
    }
    else if(mode=="sharmila"){
        video.src="sharmila.mp4"
    }
}