
var timeH = document.querySelector('h2');
var timeSecond = 1440;
displayTime(timeSecond);
var countDown = setInterval(()=>{
	timeSecond--;
	displayTime(timeSecond);
	if(timeSecond <= 0 || timeSecond < 1 ){
		endTime();
		clearInterval(countDown);
	}
},1000)
function displayTime (second){
	const min = Math.floor(second/60);
	const sec = Math.floor(second % 60);
	timeH.innerHTML = `${min < 10? '0':''}
${min}:${sec<10?'0':''}${sec}`
}
function endTime (){
	timeH.innerHTML = ' OOPS! TIME OUT'
}