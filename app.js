const video = document.getElementById("video")
const canvas = document.getElementById("overlay")
const ctx = canvas.getContext("2d")

const codeReader = new ZXing.BrowserDatamatrixCodeReader()

const expected = {
"ABC123":true,
"ABC124":true,
"ABC125":true
}

async function startCamera(){

const stream = await navigator.mediaDevices.getUserMedia({
video:{
facingMode:"environment",
width:1280,
height:720
}
})

video.srcObject = stream
}

function drawBox(x,y,w,h,text,ok){

ctx.strokeStyle = ok ? "lime":"red"
ctx.lineWidth = 4

ctx.strokeRect(x,y,w,h)

ctx.fillStyle = ok ? "lime":"red"
ctx.font = "20px Arial"
ctx.fillText(text,x,y-10)
}

async function scan(){

canvas.width = video.videoWidth
canvas.height = video.videoHeight

try{

const result = await codeReader.decodeFromVideoElement(video)

const points = result.resultPoints

const x = points[0].x
const y = points[0].y

const w = 120
const h = 120

const text = result.text
const ok = expected[text]

drawBox(x,y,w,h,text,ok)

}catch(e){}

requestAnimationFrame(scan)

}

startCamera().then(()=>{

video.addEventListener("playing",()=>{
scan()
})

})
