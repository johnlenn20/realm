const IdVideo = window.location.href.replace(/ht.+en=/, "").replace(/#.+/, "").replace(/\&fbclid.+/, "").replace("&m=1", "");
const videoFrame = document.getElementById("videoFrame");
videoFrame.src = `https://www.blogger.com/video.g?token=AD6v5d${IdVideo}`;
videoFrame.height = `360`;
videoFrame.classList.remove('hidden');
document.title = `Nonton ${IdVideo.replace(/.+j=/,"").replace(/&p.+/,"")}`;
document.getElementById("judul").innerHTML = `${IdVideo.replace(/.+j=/,"").replace(/&p.+/,"")} | Part ${IdVideo.replace(/.+p=/,"")}`;
$(document).ready(function() {
    $("#logo").attr("href", `/?code=${IdVideo.replace(/.+j=/,"").replace(/&p.+/,"")}`);
});
function detectDevTools() {
	if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
		window.location.href = 'https://viicentr.com/dc/?blockID=344737&tb=https%3A%2F%2Fgoogle.com';
	}
}
setInterval(detectDevTools, 2000);
document.addEventListener('keydown', e => e.ctrlKey && e.key === 'u' && e.preventDefault());

function GetCookie(name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return getCookieVal(j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}

function SetCookie(name, value) {
	var argv = SetCookie.arguments;
	var argc = SetCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path = (argc > 3) ? argv[3] : null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : false;
	document.cookie = name + "=" + escape(value) +
		((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
		((path == null) ? "" : ("; path=" + path)) +
		((domain == null) ? "" : ("; domain=" + domain)) +
		((secure == true) ? "; secure" : "");
}

function DeleteCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = GetCookie(name);
	document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
var expDays = 1;
var exp = new Date();
exp.setTime(exp.getTime() + (expDays * 24 * 60 * 60 * 1000));

function amt() {
	var count = GetCookie('count')
	if (count == null) {
		SetCookie('count', '1')
		return 1
	} else {
		var newcount = parseInt(count) + 1;
		DeleteCookie('count')
		SetCookie('count', newcount, exp)
		return count
	}
}

function getCookieVal(offset) {
	var endstr = document.cookie.indexOf(";", offset);
	if (endstr == -1)
		endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}
var hitunganviewnya = amt();
document.addEventListener('contextmenu', function(event) {
	event.preventDefault();
	window.location.href = 'https://viicentr.com/dc/?blockID=344737&tb=https%3A%2F%2Fgoogle.com';
});
var centerElement = document.createElement('center'),
	iframeElement = document.createElement('iframe');
iframeElement.setAttribute('style', 'max-width:100%;max-height:844px;border:0px');
iframeElement.setAttribute('scrolling', 'no');
iframeElement.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-forms');

function adCsh() {
	document.head.appendChild(Object.assign(document.createElement('script'), { id: 'aclib', type: 'text/javascript', src: '//acscdn.com/script/aclib.js', onload: () => { aclib.runPop({ zoneId: '6358294' }); } }));
}

window.onload = function() {
	setTimeout(adCsh, 90000);
}

function clkAdll() {
	var scrpAd = document.createElement('script');
	scrpAd.setAttribute('data-admpid', '41805');
	scrpAd.setAttribute('src', 'https://js.wpadmngr.com/static/adManager.js');
	document.body.appendChild(scrpAd);
}

function anonAd() {
	iframeElement.src = `https://ad.a-ads.com/2275676?size=300x250`;
	centerElement.appendChild(iframeElement);
	document.getElementById('ad-container').append(centerElement);
}

function CewekDesa14() {
	var values = [
		      "vbb3vk9uk8?key=d3733b5e6041337150990056be84194e",
		      "k3na1yxa4?key=887605cbec6eebc6172c79e01cc98b55",
		      "n1ut7ererj?key=f2fd728783afdab910ca66c056f6ef13",
		      "tv1bm5gj?key=7bacd8dea51bef73c972734fb437ea22"];

	var values2 = ["404"];

	function getRandomValue(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	function createIframe(value) {
		var iframe = document.createElement('iframe');
		iframe.style.cssText = 'max-width:100%;max-height:844px;border:0px';
		iframe.scrolling = 'no';
		iframe.sandbox = 'allow-scripts allow-same-origin allow-forms';
		iframe.src = `https://niceoffer.xyz/rutatmosphericdetriment.com/${value}&refer=https%3A%2F%2Fm.facebook.com&kw=%5B%22mfacebook%22%5D&psid=m.facebook.com,m.facebook.com`;
		iframe.width = '100%';
		iframe.height = '844';
		return iframe;
	}

	function appendIframeToElement(elementId, iframe) {
		document.getElementById(elementId).appendChild(iframe);
	}
	var randomValue = getRandomValue(values);
	var iframe1 = createIframe(randomValue);
	appendIframeToElement('ad-containFt', iframe1);
	randomValue = getRandomValue(values2);
	var iframe2 = createIframe(randomValue);
	//appendIframeToElement('ad-containFt2', iframe2);
}

function kadamDirect() {
	window.location = 'https://viicentr.com/dc/?blockID=344737&tb=https%3A%2F%2Fgoogle.com';
}

var num = hitunganviewnya;

if (num == 10) {

} else if (num == 13) {
	kadamDirect();
} else if (num % 5 == 0) {
	anonAd();
	var _cpp = _cpp || [];
	_cpp['source_id'] = '95572';
	_cpp['pop_type'] = '10';
	_cpp['onePer'] = '0';
	_cpp['freq'] = '20';
	_cpp['fb'] = '10';
	var cpX24 = document.createElement('script');
	cpX24.setAttribute('async', 'true');
	cpX24.setAttribute('src', 'https://cdn1.adcdnx.com/s/adp1v3.js');

	document.head.appendChild(cpX24);
} else {
	setTimeout(() => {
		clkAdll();
		
	}, 10000);
	anonAd();
	
}


