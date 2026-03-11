const video = document.getElementById("video")
const canvas = document.getElementById("overlay")
const ctx = canvas.getContext("2d")

async function startCamera(){

try{

const stream = await navigator.mediaDevices.getUserMedia({
video:{
facingMode:"environment"
},
audio:false
})

video.srcObject = stream

}catch(err){

console.log("Camera error:",err)
alert("Camera permission denied or not available")

}

}

function resizeCanvas(){

canvas.width = video.videoWidth
canvas.height = video.videoHeight

}

video.addEventListener("loadedmetadata",resizeCanvas)

startCamera()
