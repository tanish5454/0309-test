function hidediv1() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "inline-block";
    document.getElementById("div2").style.animation = "sfade 2s ease";
}

function kiss() {
    document.getElementById("kissbutt").style.display = "none";
    document.getElementById("accgif").style.display = "none";
    document.getElementById("div2").style.animation = "bg_kiss 3s ease";
    document.getElementById("div3").style.display = "block";
    document.getElementById("div3").style.animation = "ffade 4s ease";
}

function nexttomem() {
    document.getElementById("div3").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div4").style.display = "block";
}

function memna() {
    document.getElementById("memtext").style.display = "none";
    document.getElementById("memno").style.transform = "translate(150px, 100px)";
    document.getElementById("memno").setAttribute("onclick", "memna2()");
    document.getElementById("memtext2").style.display = "block";
    document.getElementById("memtext3").style.display = "none";
    document.getElementById("memtext4").style.display = "none";
    document.getElementById("memtext5").style.display = "none";
}


function memna2() {
    document.getElementById("memno").style.transform = "translate(0px, 100px)";
    document.getElementById("memno").setAttribute("onclick", "memna3()");
    document.getElementById("memtext").style.display = "none";
    document.getElementById("memtext2").style.display = "none";
    document.getElementById("memtext3").style.display = "block";
    document.getElementById("memtext4").style.display = "none";
    document.getElementById("memtext5").style.display = "none";
}


function memna3() {
    document.getElementById("memno").style.transform = "translate(160px, 230px)";
    document.getElementById("memno").setAttribute("onclick", "memna4()");
    document.getElementById("memtext").style.display = "none";
    document.getElementById("memtext2").style.display = "none";
    document.getElementById("memtext3").style.display = "none";
    document.getElementById("memtext4").style.display = "block";
    document.getElementById("memtext5").style.display = "none";
}


function memna4() {
    document.getElementById("memno").style.translate = "20px 80px";
    document.getElementById("memno").setAttribute("onclick" , "memna5()");
}

function memna5() {
    document.getElementById("memno").style.translate = "-20px -100px";
    document.getElementById("memno").setAttribute("onclick" , "memna6()");
}

function memna6() {
    document.getElementById("memno").style.translate = "-100px 0px";
    document.getElementById("memno").setAttribute("onclick" , "memna7()");
}

function memna7() {
    document.getElementById("memno").style.translate = "10px -20px";
    document.getElementById("memno").setAttribute("onclick" , "memna8()");
}

function memna8() {
    document.getElementById("memno").style.translate = "-90px -80px";
    document.getElementById("memno").setAttribute("onclick" , "memna9()");
}

function memna9() {
    document.getElementById("memno").style.translate = "40px -80px";
    document.getElementById("memno").setAttribute("onclick" , "memna10()");
}

function memna10() {
    document.getElementById("memno").style.display = "none";
    document.getElementById("memtext4").style.display = "none";
    document.getElementById("memtext5").style.display = "block";
    document.getElementById("membuttarea").style.backgroundImage = "url(output-onlinegiftools.gif2)";
}

function memhm() {
    document.getElementById("memtext").style.display = "none";
    document.getElementById("memtext2").style.display = "none";
    document.getElementById("memtext3").style.display = "none";
    document.getElementById("memtext4").style.display = "none";
    document.getElementById("memtext5").style.display = "none";
    document.getElementById("membuttarea").style.display = "none";
    document.getElementById("selectmem").style.display = "block";
    document.getElementById("sstextarea").style.display = "block";
}

function selmemopa() {
    document.getElementById("selectmem").style.opacity = "0.3"
}

function mem1() {
    document.getElementById("div4").style.backgroundImage = "url(1.jpg)";
    document.getElementById("sstext").innerHTML = "Yaaar 😭";
}

function mem2() {
    document.getElementById("div4").style.backgroundImage = "url(2.jpg)";
    document.getElementById("sstext").innerHTML = "kya yaar 😭";
}

function mem3() {
    document.getElementById("div4").style.backgroundImage = "url(3.jpg)";
}

function mem4() {
    document.getElementById("div4").style.backgroundImage = "url(4.jpg)";
}

function mem5() {
    document.getElementById("div4").style.backgroundImage = "url(5.jpg)";
}

function mem6() {
    document.getElementById("div4").style.backgroundImage = "url(6.jpg)";
}

function mem7() {
    document.getElementById("div4").style.backgroundImage = "url(7.jpg)";
}

function mem8() {
    document.getElementById("div4").style.backgroundImage = "url(8.jpg)";
}

function mem9() {
    document.getElementById("div4").style.backgroundImage = "url(9.jpg)";
}

function mem10() {
    document.getElementById("div4").style.backgroundImage = "url(10.jpg)";
}

function mem11() {
    document.getElementById("div4").style.backgroundImage = "url(11.jpg)";
}

function mem12() {
    document.getElementById("div4").style.backgroundImage = "url(12.jpg)";
}

function mem13() {
    document.getElementById("div4").style.backgroundImage = "url(13.jpg)";
}

function mem14() {
    document.getElementById("div4").style.backgroundImage = "url(14.jpg)";
}

function mem15() {
    document.getElementById("div4").style.backgroundImage = "url(15.jpg)";
}

function mem16() {
    document.getElementById("div4").style.backgroundImage = "url(16.jpg)";
}

function mem17() {
    document.getElementById("div4").style.backgroundImage = "url(17.jpg)";
}

function mem18() {
    document.getElementById("div4").style.backgroundImage = "url(18.jpg)";
}

function numareanext() {
    document.getElementById("selnumarea1").style.display = "none";
    document.getElementById("selnumarea2").style.display = "block";
}