const TOTAL = 254; // 4:14

const slides = [
  {d:7, tag:"🌷 She’s the kind of girl who…", text:"Noong una ko siyang nakita sa Ibaan, parang may kakaiba agad sa kanya.", img:"assets/anime-couple.png"},
  {d:7, tag:"🤍 She’s the kind of girl who…", text:"Marami akong nakitang magagandang babae, pero iba siya.", img:"assets/collage.png"},
  {d:7, tag:"📸 Another little memory…", text:"Yung mga simpleng moments na ganito, masarap balikan at alalahanin. 💗", img:"assets/memory-04.png"},
  {d:7, tag:"🤍 She’s the kind of girl who…", text:"Masarap alagaan at madaling pahalagahan.", img:"assets/anime-couple.png"},
  {d:7, tag:"⏰ She’s the kind of girl who…", text:"Deserve ng oras, attention at effort, lalo na kapag pagod siya sa dami ng ginagawa niya.", img:"assets/collage.png"},
  {d:7, tag:"📸 Another little memory…", text:"Minsan hindi naman kailangang bongga ang isang araw para maging espesyal. 😊", img:"assets/memory-05.png"},
  {d:7, tag:"🌸 She’s the kind of girl who…", text:"Deserve ng taong mangungumusta, mag-aalala at magpapaalala sa kanya na magpahinga rin.", img:"assets/anime-couple.png"},
  {d:7, tag:"🫶 She’s the kind of girl who…", text:"Deserve ng taong sasama at aalalay sa mga araw na kailangan niya ng kasama.", img:"assets/collage.png"},
  {d:7, tag:"📸 Another little memory…", text:"At kapag tinitingnan ko 'tong mga pictures, napapangiti na lang talaga ako. ❤️", img:"assets/memory-06.png"},
  {d:7, tag:"💌 She’s the kind of girl who…", text:"Kahit hindi siya nagsasabi kapag may pinagdadaanan, minsan konting lambing lang ang kailangan. Fries 🍟 at chocolate 🍫 lang, kahit papaano gumagaan na ang pakiramdam. Hahaha. 😅❤️", img:"assets/anime-couple.png"},
  {d:7, tag:"💌 She’s the kind of girl who…", text:"Kapag may problema, deserve ng taong makikinig sa kanya nang hindi nanghuhusga.", img:"assets/collage.png"},
  {d:7, tag:"👑 She’s the kind of girl who…", text:"Deserve tratuhing parang prinsesa at iparamdam kung gaano siya kahalaga.", img:"assets/anime-couple.png"},
  {d:7, tag:"🗣️ She’s the kind of girl who…", text:"Masarap kausap at hindi nakakasawa, kahit simpleng kwentuhan lang.", img:"assets/collage.png"},
  {d:7, tag:"🐉 She’s the kind of girl who…", text:"May sweet side, makulit na side, tahimik na side… At siyempre, may konting dragon mode. 😂🐉", img:"assets/octopus.png"},
  {d:7, tag:"🎀 She’s the kind of girl who…", text:"Mahilig sa kulay pink. 😂 Minsan napapaisip na lang ako… ano na lang kaya ang hindi pink sa mga gamit niya? Hahaha. 💗🎀", img:"assets/octopus.png"},
  {d:7, tag:"❤️ She’s the kind of girl who…", text:"Deserve pahalagahan, respetuhin, alagaan at mahalin nang tama.", img:"assets/anime-couple.png"},
  {d:7, tag:"🌷 And she’s the kind of girl who…", text:"Gusto ko pang mas makilala.", img:"assets/collage.png"},
  {d:10, tag:"🤍 Pero…", text:"Baka kailangan ko munang lumayo nang kaunti…", img:"assets/anime-couple.png"},
  {d:10, tag:"❤️", text:"I will always be here.<br><small>Palagi lang akong nandito para sa'yo.</small>", img:"assets/octopus.png"},
  {d:12, tag:"😅 Huwag mo nga akong pagtawanan.", text:"Hindi ko pa yata nasasabi sa'yo na mas maganda ka talaga sa personal kaysa sa pictures. Pero ngayon alam mo na—nasabi ko na rin dito. Hahaha. Nahihiya kasi akong sabihin sa'yo nang harapan. 😅", img:"assets/collage.png"},
  {d:12, tag:"😂 Tungkol sa noo mo ha…", text:"Biro lang talaga 'yon. 😂 Kahit nakapuyod ang buhok mo, mas maganda ka pa rin. Mas malinis at fresh ka lang talaga tingnan kapag gano'n.", img:"assets/anime-couple.png"},
  {d:12, tag:"🌸 Tapos yung make-up mo…", text:"Hindi mo naman kailangan laging mag-make-up. 😅 Mas lumalabas pa nga yung natural mong ganda kapag wala kang make-up.", img:"assets/collage.png"},
  {d:12, tag:"❤️ Pero seryoso ako doon ha.", text:"Mas maganda ka sa personal. Hindi lang talaga ako marunong magsabi nang harapan. Hahaha. ❤️", img:"assets/anime-couple.png"},
  {d:6, tag:"📸 Another little memory…", text:"May mga pictures talagang kahit simple lang, napapangiti ka kapag binalikan mo. 💗", img:"assets/memory-07.png"},
  {d:6, tag:"🌸 Another little memory…", text:"Ang cute ng mga little moments na ganito—parang gusto ko silang itago bilang magandang alaala. 😊", img:"assets/memory-08.png"},
  {d:5, tag:"🤍 Another little memory…", text:"At siyempre, isa rin 'to sa mga moments na gusto kong maalala. ❤️", img:"assets/memory-09.png"},
  {d:5, tag:"📸 Another little memory…", text:"May isa pa akong magandang alaala na gusto kong isama rito. 💗", img:"assets/memory-11.png"},
  {d:5, tag:"😊 Another little memory…", text:"Simple lang ang moment na 'to, pero isa pa rin sa mga pictures na gusto kong balikan.", img:"assets/memory-12.png"},
  {d:5, tag:"🤍 Another little memory…", text:"May mga larawan talagang kahit tingnan mo lang ulit, napapangiti ka na.", img:"assets/memory-13.png"},
  {d:5, tag:"🌸 Another little memory…", text:"At ito naman—isang magandang moment na deserve ding maging bahagi ng surprise na 'to. ❤️", img:"assets/memory-14.png"},
  {d:5, tag:"💗 One more memory…", text:"Last one muna—para kumpleto ang mga alaala na gusto kong ilagay dito.", img:"assets/memory-15.png"},
  {d:5, tag:"☔ Another little memory…", text:"Isang simpleng moment na gusto ko ring isama sa mga alaala natin. 💗", img:"assets/memory-16.png"},
  {d:5, tag:"😊 Another little memory…", text:"Kahit ordinaryong araw lang, nagiging magandang memory kapag kasama ka.", img:"assets/memory-17.png"},
  {d:5, tag:"🤍 Another little memory…", text:"May mga tahimik na moments na hindi kailangang maraming salita para maging espesyal.", img:"assets/memory-18.png"},
  {d:5, tag:"❤️ Another little memory…", text:"At isa pa 'to sa mga pictures na gusto kong balikan at alalahanin.", img:"assets/memory-19.png"},
  {d:5, tag:"🌷 Para kay Edith ❤️", text:"“Salamat sa oras mo sa pagbabasa at panonood. Sana kahit saglit, napasaya at napangiti kita. ❤️”", img:"assets/octopus.png"}
];

// Keep all slide timings synchronized with the 4:14 soundtrack.
const rawTotal = slides.reduce((sum, s) => sum + s.d, 0);
const timingScale = TOTAL / rawTotal;
slides.forEach(s => { s.d *= timingScale; });

let index = 0, elapsed = 0, running = false, started = false, raf = null;
const intro = document.getElementById("intro");
const slideshow = document.getElementById("slideshow");
const img = document.getElementById("slideImage");
const imageWrap = document.getElementById("imageWrap");
const tag = document.getElementById("eyebrow");
const msg = document.getElementById("message");
const bar = document.getElementById("progressBar");
const label = document.getElementById("timeLabel");
const music = document.getElementById("music");
const pauseBtn = document.getElementById("pauseBtn");

function petals(n=14){
  const root=document.getElementById("petals");
  for(let i=0;i<n;i++){
    const p=document.createElement("span");
    p.className="petal";
    p.style.left=(Math.random()*100)+"%";
    p.style.setProperty("--x",(Math.random()*220-110)+"px");
    p.style.animationDuration=(5+Math.random()*7)+"s";
    p.style.animationDelay=(Math.random()*1.5)+"s";
    p.style.transform=`rotate(${Math.random()*180}deg)`;
    root.appendChild(p);
    setTimeout(()=>p.remove(),14000);
  }
}

function showSlide(i){
  const s=slides[i];
  index=i;
  imageWrap.classList.remove("show");
  void imageWrap.offsetWidth;
  img.src=s.img;
  img.alt="Anime memory";
  tag.textContent=s.tag;
  msg.classList.remove("fade");
  msg.innerHTML=s.text;
  void msg.offsetWidth;
  msg.classList.add("fade");
  imageWrap.classList.add("show");
  petals(5);
}

function fmt(sec){
  sec=Math.max(0,Math.floor(sec));
  return `${Math.floor(sec/60)}:${String(sec%60).padStart(2,"0")}`;
}

function tick(ts){
  if(!running) return;
  if(!tick.last) tick.last=ts;
  const dt=(ts-tick.last)/1000;
  tick.last=ts;
  elapsed+=dt;

  let cumulative=0, current=0;
  for(let i=0;i<slides.length;i++){
    if(elapsed < cumulative+slides[i].d){ current=i; break; }
    cumulative+=slides[i].d;
    current=Math.min(i+1,slides.length-1);
  }
  if(current!==index) showSlide(current);

  const currentStart=cumulative;
  const local=Math.max(0,elapsed-currentStart);
  const overall=Math.min(1,elapsed/TOTAL);
  bar.style.width=(overall*100)+"%";
  label.textContent=`${fmt(elapsed)} / ${fmt(TOTAL)}`;

  if(elapsed>=TOTAL){
    running=false;
    music.pause();
    pauseBtn.textContent="▶";
    return;
  }
  raf=requestAnimationFrame(tick);
}

document.getElementById("startBtn").addEventListener("click", async ()=>{
  if(started) return;
  started=true;
  intro.classList.remove("active");
  slideshow.classList.add("active");
  showSlide(0);
  elapsed=0;
  running=true;
  pauseBtn.textContent="Ⅱ";
  try{ await music.play(); }catch(e){
    // If music.mp3 is missing or playback is blocked, the visuals still continue.
  }
  tick.last=performance.now();
  raf=requestAnimationFrame(tick);
});

pauseBtn.addEventListener("click", ()=>{
  if(!started) return;
  running=!running;
  if(running){
    music.play().catch(()=>{});
    pauseBtn.textContent="Ⅱ";
    tick.last=performance.now();
    raf=requestAnimationFrame(tick);
  }else{
    music.pause();
    pauseBtn.textContent="▶";
    cancelAnimationFrame(raf);
  }
});

// Gentle petal activity on the intro.
setInterval(()=>{ if(intro.classList.contains("active")) petals(4); }, 1600);
