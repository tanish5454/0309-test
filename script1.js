function hidediv1() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "inline-block";
    document.getElementById("div2").style.animation = "sfade 2s ease";
}

function kiss() {
    document.getElementById("kissbutt").style.display = "none";
    document.getElementById("accgif").style.display = "none";
    // document.getElementById("div2").style.animation = "bg_kiss 3s ease";
    // document.getElementById("div3").style.display = "block";
    // document.getElementById("div3").style.animation = "ffade 4s ease";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div4").style.display = "inline-block";
}

function nexttomem() {
    document.getElementById("div3").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div4").style.display = "block";
}

function memna() {
    document.getElementById("memtext").style.display = "block";
    document.getElementById("memno").style.translate = "150px 100px";
    document.getElementById("memno").setAttribute("onclick" , "memna2()");
    document.getElementById("memtext").style.display = "none";
    document.getElementById("memtext2").style.display = "block";
    document.getElementById("memtext3").style.display = "none";
    document.getElementById("memtext4").style.display = "none";
    document.getElementById("memtext5").style.display = "none";
}

function memna2() {
    document.getElementById("memno").style.translate = "0px 100px"
    document.getElementById("memno").setAttribute = ("onclick" , "memna3()");
    document.getElementById("memtext").style.display = "none";
    document.getElementById("memtext2").style.display = "none";
    document.getElementById("memtext3").style.display = "block";
    document.getElementById("memtext4").style.display = "none";
    document.getElementById("memtext5").style.display = "none";
}

function memna3() {
    document.getElementById("memno").style.translate = "160px 230px";
    document.getElementById("memno").setAttribute = ("onclick" , "memna4()");
    document.getElementById("memtext").style.display = "none";
    document.getElementById("memtext2").style.display = "none";
    document.getElementById("memtext3").style.display = "none";
    document.getElementById("memtext4").style.display = "block";
    document.getElementById("memtext5").style.display = "none";
}

function memna4() {
    document.getElementById("memno").style.translate = "120px 80px";
    document.getElementById("memno").setAttribute = ("onclick" , "memna5()");
}

function memna5() {
    document.getElementById("memno").style.translate = "10px 200px";
    document.getElementById("memno").setAttribute = ("onclick" , "memna6()");
}

function memna6() {
    document.getElementById("memno").style.translate = "0px 30px";
    document.getElementById("memno").setAttribute = ("onclick" , "memna7()");
}

function memna7() {
    document.getElementById("memno").style.translate = "140px 270px";
    document.getElementById("memno").setAttribute = ("onclick" , "memna8()");
}

function memna8() {
    document.getElementById("memno").style.translate = "-20px 330px";
    document.getElementById("memno").setAttribute = ("onclick" , "memna9()");
}

function memna9() {
    document.getElementById("memno").style.translate = "160px 230px";
    document.getElementById("memno").setAttribute = ("onclick" , "memna10()");
}

function memna10() {
    document.getElementById('memno').style.display = "none";
    document.getElementById("memtext").style.display = "none";
    document.getElementById("memtext2").style.display = "none";
    document.getElementById("memtext3").style.display = "none";
    document.getElementById("memtext4").style.display = "none";
    document.getElementById("memtext5").style.display = "block";
}