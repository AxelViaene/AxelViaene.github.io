window.onload=e=>{const n=sessionStorage.getItem("user"),s=JSON.parse(n);try{if(!n)return void(window.location.href="../html/login.html");s?(document.getElementById("authname").innerText=`Welcome ${s.name}`,console.log(`Welcomeeee ${s.name}`)):window.location.href="../html/login.html"}catch(e){console.error("error",e)}const t=s.UserId;fetch("https://web2-course-project.onrender.com/hunts").then((e=>e.json())).then((e=>{var n=e.filter((function(e){return e.UserId===t})).map((function(e){return e.MonsterId.toString()})),s=new Set(n),o=document.getElementById("main");[17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,43,44,45,48,49,50,53].forEach((function(e){let n=`<div id="${e}" class="monster m${e} test-section">\n          <div class="monsterInternal">\n            <img id="img${e}" class="monsterIcon encyclick" src="../icons/unknown.png" alt="">\n            <p id="name${e}" class="monsterName encyclick"> -</p>\n          </div>\n          </div>`;o.insertAdjacentHTML("beforeend",n)})),s.forEach((function(e){fetch(`https://mhw-db.com/monsters/${e}`).then((e=>e.json())).then((n=>{let s=`<div id="${e}" class="monster m${e} test-section">\n          <div class="monsterInternal">\n            <img id="img${e}" class="monsterIcon encyclick" src="../icons/monsters/${n.name}.png" alt="">\n            <p id="name${e}" class="monsterName encyclick">${n.name}</p>\n          </div>\n          </div>`;o.insertAdjacentHTML("beforeend",s)}))}));var c=document.getElementById("overlay"),r=document.getElementsByClassName("monsterName"),i=document.getElementsByClassName("monsterIcon"),a=document.getElementById("overlay"),l=!0,m=1;l&&(l=!1,document.addEventListener("click",(function(e){var n=e.target.closest(".test-section");n&&(m=n.id)}))),document.addEventListener("click",(function(e){(Array.from(r).some((n=>n===e.target))||Array.from(i).some((n=>n===e.target)))&&fetch(`https://mhw-db.com/monsters/${m}`).then((e=>e.json())).then((e=>{const s=Math.min(Object.keys(e.locations).length,5),t=Object.keys(e.resistances).length,o=Object.keys(e.weaknesses).length;if(n.includes(m.toString())){var r=`<div id="monster_page">\n        <div class="overlay_left">\n          <p class="overlay_monster_species">${e.species}</p>\n          <p class="overlay_monster_name">${e.name}</p>\n          <img class="overlay_img" src="../icons/monsters/${e.name}.png" alt="">\n        </div>\n        <div class="overlay_right">\n          <p class="overlay_known_regions">Known Regions</p>`;for(let n=0;n<s;n++)r+=`<p class="overlay_regions">${e.locations[n].name}</p>`;if(r+=`<p class="overlay_characteristics">Characteristics</p>\n          <p class="overlay_description">${e.description}</p>\n          <div class="overlay_weaknesses">\n            <p>Weaknesses</p>`,t>=1)for(let n=0;n<t;n++)r+=`<img class="overlay_weaknesses_icon" src="../icons/elements/${e.resistances[n].element}.png">`;else r+="<p> None </p>";if(r+='</div>\n          <div class="overlay_resistances">\n            <p>Resistances</p>',o>=1)for(let n=0;n<o;n++)3===e.weaknesses[n].stars&&(r+=`<img class="overlay_resistances_icon" src="../icons/elements/${e.weaknesses[n].element}.png">`);r+="</div>\n            </div>\n          </div>",a.insertAdjacentHTML("beforeend",r),c.style.display="block"}else console.log("Monster not discovered by user")}))})),document.addEventListener("click",(function(e){e.target==c&&(document.getElementById("overlay").innerHTML="",c.style.display="none")}))})),document.getElementById("logoutButton").addEventListener("click",(function(){sessionStorage.removeItem("user"),window.location.assign("../html/login.html")}))};