import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { useState, useEffect, useRef } from "react"

import musicFile from "./assets/music.mp3"
import clickFile from "./assets/click.mp3"

const wishes = [
"Chúc Tli/Vy/Trâm luôn xinh đẹp và sớm có bồ🌸 ",
"Chúc Tli/Vy/Trâm luôn hạnh phúc và sớm có bồ 💖",
"Chúc Tli/Vy/Trâm gặp nhiều may mắn và sớm có bồ✨",
"Chúc Tli/Vy/Trâm thành công trong mọi việc và sớm có bồ💐",
"Chúc Tli/Vy/Trâm một ngày 8/3 thật tuyệt và sớm có bồ❤️",
"Chúc Tli/Vy/Trâm luôn tỏa sáng như những vì sao và sớm có bồ🌟"
]

const icons = ["🎁","💝","🌸","💎","🎀","💐"]

export default function App(){

const [message,setMessage] = useState("")
const [musicOn,setMusicOn] = useState(false)

const musicRef = useRef(null)
const clickRef = useRef(null)

function toggleMusic(){

if(!musicOn){
musicRef.current.play()
setMusicOn(true)
}else{
musicRef.current.pause()
setMusicOn(false)
}

}

function openGift(){

clickRef.current.currentTime = 0
clickRef.current.play()

const randomWish =
wishes[Math.floor(Math.random()*wishes.length)]

setMessage(randomWish)

confetti({
particleCount:300,
spread:140,
origin:{y:0.6}
})

}

useEffect(()=>{

musicRef.current = new Audio(musicFile)
musicRef.current.loop = true
musicRef.current.volume = 0.5

clickRef.current = new Audio(clickFile)

/* tim bay */

const createHeart=()=>{

const heart=document.createElement("div")

heart.innerHTML="💗"

heart.style.position="fixed"
heart.style.left=Math.random()*100+"vw"
heart.style.bottom="-20px"
heart.style.fontSize=Math.random()*25+15+"px"
heart.style.animation="float 6s linear"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),6000)

}

/* hoa rơi */

const createFlower=()=>{

const flower=document.createElement("div")

flower.innerHTML="🌸"

flower.style.position="fixed"
flower.style.top="-20px"
flower.style.left=Math.random()*100+"vw"
flower.style.fontSize=Math.random()*20+15+"px"
flower.style.animation="fall 8s linear"

document.body.appendChild(flower)

setTimeout(()=>flower.remove(),8000)

}

const heartInterval=setInterval(createHeart,400)
const flowerInterval=setInterval(createFlower,800)

return ()=>{
clearInterval(heartInterval)
clearInterval(flowerInterval)
}

},[])

return(

<div className="page">

<button className="musicBtn" onClick={toggleMusic}>
{musicOn ? "🔊 Tắt nhạc" : "🎵 Bật nhạc"}
</button>

<h1 className="title">
Happy Women's Day 💖
</h1>
<p className="note">
Gửi mí bạn một chút niềm vui nhỏ trong ngày 8/3 🌸
</p>
<div className="card">

<h2>Chọn quà 🎁</h2>

<div className="gifts">

{icons.map((icon,i)=>(

<motion.div
key={i}
animate={{y:[0,-25,0],rotate:[0,6,-6,0]}}
transition={{repeat:Infinity,duration:2}}
whileHover={{scale:1.3}}
whileTap={{scale:0.9}}
className="gift"
onClick={openGift}
>

{icon}

</motion.div>

))}

</div>
<p className="footerNote">
Sản phầm 90% từ AI tại bận hehe,thông cảm nhóe 🌸
</p>
{message && (

<motion.div
initial={{scale:0,opacity:0}}
animate={{scale:1,opacity:1}}
className="message"
>

{message}

</motion.div>

)}

</div>

<style>{`
.footerNote{
position:absolute;
bottom:15px;

font-size:14px;
opacity:0.8;

text-align:center;

color:white;

text-shadow:0 0 10px pink;
}
.note{
font-size:20px;
margin-top:-20px;
margin-bottom:30px;

color:white;

text-shadow:
0 0 10px pink,
0 0 20px hotpink;
}
.page{
width:100%;
min-height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

background:
radial-gradient(circle at 20% 30%, #ffc0dd, transparent 40%),
radial-gradient(circle at 80% 70%, #ff9acb, transparent 40%),
linear-gradient(180deg,#ff8ac6,#ff5aa5,#ff3c94);

color:white;
overflow:hidden;
position:relative;
}

.musicBtn{
position:absolute;
top:20px;
right:20px;

background:white;
color:#ff2c8b;

border:none;
padding:10px 15px;

border-radius:10px;

cursor:pointer;

font-weight:bold;
}

.title{
font-size:60px;
margin-bottom:40px;
text-shadow:0 0 20px white;
}

.card{
background:rgba(255,255,255,0.25);
padding:60px;
border-radius:20px;
backdrop-filter:blur(12px);
text-align:center;
box-shadow:0 0 30px rgba(255,0,150,0.6);
}

.gifts{
display:flex;
gap:50px;
justify-content:center;
margin-top:30px;
flex-wrap:wrap;
}

.gift{
font-size:90px;
cursor:pointer;
}

.message{
margin-top:40px;
background:rgba(255,0,120,0.35);
padding:25px;
border-radius:12px;
font-size:24px;
box-shadow:0 0 30px pink;
}

@keyframes float{
0%{transform:translateY(0);opacity:1}
100%{transform:translateY(-110vh);opacity:0}
}

@keyframes fall{
0%{transform:translateY(0);opacity:1}
100%{transform:translateY(110vh);opacity:0}
}

`}</style>

</div>

)

}