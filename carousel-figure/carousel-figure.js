window.onload = function(){
	var picWith = 600;
	var cfContent = document.getElementById('cf_content');
	var cfPic = document.getElementById('cf_pic');
	var cfDot = document.getElementById('cf_dot').getElementsByTagName('span');
	var cfPrex = document.getElementById('cf_prev');
	var cfNext = document.getElementById('cf_next');
	var prexIndex = 1;
	var currentIndex = 1;
	cfPic.style.left = '0px';
	var isMove = true;
	console.log(cfPic.style);

	var timer = setInterval(function(){
		//var num = randomBetweenInt(1, 5);
		if(!isMove) return;
		var num = currentIndex + 1;
		if(num > 5) num = 1;
		turnPic(currentIndex, num);
	}, 2200);

	console.log(timer);
	console.log(cfPrex);

	cfPrex.onclick = function () {
		var num = currentIndex - 1;
		if(num < 1) num = 5;
        turnPic(currentIndex, num);
    }

    cfNext.onclick = function () {
    	var num = currentIndex + 1;
		if(num > 5) num = 1;
        turnPic(currentIndex, num);
    }

    for(let i=0; i<cfDot.length; i++){
        cfDot[i].onclick = function () {
        	cfDot[i].index = i;
        	currentIndex = cfDot[i].index + 1;
        	prexIndex = currentIndex - 1;
        	if(prexIndex < 1) prexIndex = 5;
            turnPic(prexIndex, currentIndex);
        }
    }

    function turnPic(pi, ci){
    	prexIndex = pi;
		currentIndex = ci;
		var leftLen = (ci - 1) * -600;
		cfPic.style.left = leftLen + 'px';
		cfDot[prexIndex - 1].className = "";
		cfDot[currentIndex - 1].className = "on";
    }

    cfContent.onmouseover = function(){
    	isMove = false;
    }

    cfContent.onmouseout = function(){
    	isMove = true;
    }
};

function randomBetweenInt(start, end){
    return Math.floor(Math.random() * (end - start)) + start;
}