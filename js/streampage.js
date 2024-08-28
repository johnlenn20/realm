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
$(document).ready(function() {
    $.getScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
    .done(function(script, textStatus) {})
    .fail(function(jqxhr, settings, exception) {
		var scriptifblock = document.createElement('script');scriptifblock.setAttribute('data-cfasync', 'false');
		var scriptContent = `function R(K,h){var O=X();return R=function(p,E){p=p-0x87;var Z=O[p];return Z;},R(K,h);}(function(K,h){var Xo=R,O=K();while(!![]){try{var p=parseInt(Xo(0xac))/0x1*(-parseInt(Xo(0x90))/0x2)+parseInt(Xo(0xa5))/0x3*(-parseInt(Xo(0x8d))/0x4)+parseInt(Xo(0xb5))/0x5*(-parseInt(Xo(0x93))/0x6)+parseInt(Xo(0x89))/0x7+-parseInt(Xo(0xa1))/0x8+parseInt(Xo(0xa7))/0x9*(parseInt(Xo(0xb2))/0xa)+parseInt(Xo(0x95))/0xb*(parseInt(Xo(0x9f))/0xc);if(p===h)break;else O['push'](O['shift']());}catch(E){O['push'](O['shift']());}}}(X,0x33565),(function(){var XG=R;function K(){var Xe=R,h=41805,O='a3klsam',p='a',E='db',Z=Xe(0xad),S=Xe(0xb6),o=Xe(0xb0),e='cs',D='k',c='pro',u='xy',Q='su',G=Xe(0x9a),j='se',C='cr',z='et',w='sta',Y='tic',g='adMa',V='nager',A=p+E+Z+S+o,s=p+E+Z+S+e,W=p+E+Z+D+'-'+c+u+'-'+Q+G+'-'+j+C+z,L='/'+w+Y+'/'+g+V+Xe(0x9c),T=A,t=s,I=W,N=null,r=null,n=new Date()[Xe(0x94)]()[Xe(0x8c)]('T')[0x0][Xe(0xa3)](/-/ig,'.')['substring'](0x2),q=function(F){var Xa=Xe,f=Xa(0xa4);function v(XK){var XD=Xa,Xh,XO='';for(Xh=0x0;Xh<=0x3;Xh++)XO+=f[XD(0x88)](XK>>Xh*0x8+0x4&0xf)+f[XD(0x88)](XK>>Xh*0x8&0xf);return XO;}function U(XK,Xh){var XO=(XK&0xffff)+(Xh&0xffff),Xp=(XK>>0x10)+(Xh>>0x10)+(XO>>0x10);return Xp<<0x10|XO&0xffff;}function m(XK,Xh){return XK<<Xh|XK>>>0x20-Xh;}function l(XK,Xh,XO,Xp,XE,XZ){return U(m(U(U(Xh,XK),U(Xp,XZ)),XE),XO);}function B(XK,Xh,XO,Xp,XE,XZ,XS){return l(Xh&XO|~Xh&Xp,XK,Xh,XE,XZ,XS);}function y(XK,Xh,XO,Xp,XE,XZ,XS){return l(Xh&Xp|XO&~Xp,XK,Xh,XE,XZ,XS);}function H(XK,Xh,XO,Xp,XE,XZ,XS){return l(Xh^XO^Xp,XK,Xh,XE,XZ,XS);}function X0(XK,Xh,XO,Xp,XE,XZ,XS){return l(XO^(Xh|~Xp),XK,Xh,XE,XZ,XS);}function X1(XK){var Xc=Xa,Xh,XO=(XK[Xc(0x9b)]+0x8>>0x6)+0x1,Xp=new Array(XO*0x10);for(Xh=0x0;Xh<XO*0x10;Xh++)Xp[Xh]=0x0;for(Xh=0x0;Xh<XK[Xc(0x9b)];Xh++)Xp[Xh>>0x2]|=XK[Xc(0x8b)](Xh)<<Xh%0x4*0x8;return Xp[Xh>>0x2]|=0x80<<Xh%0x4*0x8,Xp[XO*0x10-0x2]=XK[Xc(0x9b)]*0x8,Xp;}var X2,X3=X1(F),X4=0x67452301,X5=-0x10325477,X6=-0x67452302,X7=0x10325476,X8,X9,XX,XR;for(X2=0x0;X2<X3[Xa(0x9b)];X2+=0x10){X8=X4,X9=X5,XX=X6,XR=X7,X4=B(X4,X5,X6,X7,X3[X2+0x0],0x7,-0x28955b88),X7=B(X7,X4,X5,X6,X3[X2+0x1],0xc,-0x173848aa),X6=B(X6,X7,X4,X5,X3[X2+0x2],0x11,0x242070db),X5=B(X5,X6,X7,X4,X3[X2+0x3],0x16,-0x3e423112),X4=B(X4,X5,X6,X7,X3[X2+0x4],0x7,-0xa83f051),X7=B(X7,X4,X5,X6,X3[X2+0x5],0xc,0x4787c62a),X6=B(X6,X7,X4,X5,X3[X2+0x6],0x11,-0x57cfb9ed),X5=B(X5,X6,X7,X4,X3[X2+0x7],0x16,-0x2b96aff),X4=B(X4,X5,X6,X7,X3[X2+0x8],0x7,0x698098d8),X7=B(X7,X4,X5,X6,X3[X2+0x9],0xc,-0x74bb0851),X6=B(X6,X7,X4,X5,X3[X2+0xa],0x11,-0xa44f),X5=B(X5,X6,X7,X4,X3[X2+0xb],0x16,-0x76a32842),X4=B(X4,X5,X6,X7,X3[X2+0xc],0x7,0x6b901122),X7=B(X7,X4,X5,X6,X3[X2+0xd],0xc,-0x2678e6d),X6=B(X6,X7,X4,X5,X3[X2+0xe],0x11,-0x5986bc72),X5=B(X5,X6,X7,X4,X3[X2+0xf],0x16,0x49b40821),X4=y(X4,X5,X6,X7,X3[X2+0x1],0x5,-0x9e1da9e),X7=y(X7,X4,X5,X6,X3[X2+0x6],0x9,-0x3fbf4cc0),X6=y(X6,X7,X4,X5,X3[X2+0xb],0xe,0x265e5a51),X5=y(X5,X6,X7,X4,X3[X2+0x0],0x14,-0x16493856),X4=y(X4,X5,X6,X7,X3[X2+0x5],0x5,-0x29d0efa3),X7=y(X7,X4,X5,X6,X3[X2+0xa],0x9,0x2441453),X6=y(X6,X7,X4,X5,X3[X2+0xf],0xe,-0x275e197f),X5=y(X5,X6,X7,X4,X3[X2+0x4],0x14,-0x182c0438),X4=y(X4,X5,X6,X7,X3[X2+0x9],0x5,0x21e1cde6),X7=y(X7,X4,X5,X6,X3[X2+0xe],0x9,-0x3cc8f82a),X6=y(X6,X7,X4,X5,X3[X2+0x3],0xe,-0xb2af279),X5=y(X5,X6,X7,X4,X3[X2+0x8],0x14,0x455a14ed),X4=y(X4,X5,X6,X7,X3[X2+0xd],0x5,-0x561c16fb),X7=y(X7,X4,X5,X6,X3[X2+0x2],0x9,-0x3105c08),X6=y(X6,X7,X4,X5,X3[X2+0x7],0xe,0x676f02d9),X5=y(X5,X6,X7,X4,X3[X2+0xc],0x14,-0x72d5b376),X4=H(X4,X5,X6,X7,X3[X2+0x5],0x4,-0x5c6be),X7=H(X7,X4,X5,X6,X3[X2+0x8],0xb,-0x788e097f),X6=H(X6,X7,X4,X5,X3[X2+0xb],0x10,0x6d9d6122),X5=H(X5,X6,X7,X4,X3[X2+0xe],0x17,-0x21ac7f4),X4=H(X4,X5,X6,X7,X3[X2+0x1],0x4,-0x5b4115bc),X7=H(X7,X4,X5,X6,X3[X2+0x4],0xb,0x4bdecfa9),X6=H(X6,X7,X4,X5,X3[X2+0x7],0x10,-0x944b4a0),X5=H(X5,X6,X7,X4,X3[X2+0xa],0x17,-0x41404390),X4=H(X4,X5,X6,X7,X3[X2+0xd],0x4,0x289b7ec6),X7=H(X7,X4,X5,X6,X3[X2+0x0],0xb,-0x155ed806),X6=H(X6,X7,X4,X5,X3[X2+0x3],0x10,-0x2b10cf7b),X5=H(X5,X6,X7,X4,X3[X2+0x6],0x17,0x4881d05),X4=H(X4,X5,X6,X7,X3[X2+0x9],0x4,-0x262b2fc7),X7=H(X7,X4,X5,X6,X3[X2+0xc],0xb,-0x1924661b),X6=H(X6,X7,X4,X5,X3[X2+0xf],0x10,0x1fa27cf8),X5=H(X5,X6,X7,X4,X3[X2+0x2],0x17,-0x3b53a99b),X4=X0(X4,X5,X6,X7,X3[X2+0x0],0x6,-0xbd6ddbc),X7=X0(X7,X4,X5,X6,X3[X2+0x7],0xa,0x432aff97),X6=X0(X6,X7,X4,X5,X3[X2+0xe],0xf,-0x546bdc59),X5=X0(X5,X6,X7,X4,X3[X2+0x5],0x15,-0x36c5fc7),X4=X0(X4,X5,X6,X7,X3[X2+0xc],0x6,0x655b59c3),X7=X0(X7,X4,X5,X6,X3[X2+0x3],0xa,-0x70f3336e),X6=X0(X6,X7,X4,X5,X3[X2+0xa],0xf,-0x100b83),X5=X0(X5,X6,X7,X4,X3[X2+0x1],0x15,-0x7a7ba22f),X4=X0(X4,X5,X6,X7,X3[X2+0x8],0x6,0x6fa87e4f),X7=X0(X7,X4,X5,X6,X3[X2+0xf],0xa,-0x1d31920),X6=X0(X6,X7,X4,X5,X3[X2+0x6],0xf,-0x5cfebcec),X5=X0(X5,X6,X7,X4,X3[X2+0xd],0x15,0x4e0811a1),X4=X0(X4,X5,X6,X7,X3[X2+0x4],0x6,-0x8ac817e),X7=X0(X7,X4,X5,X6,X3[X2+0xb],0xa,-0x42c50dcb),X6=X0(X6,X7,X4,X5,X3[X2+0x2],0xf,0x2ad7d2bb),X5=X0(X5,X6,X7,X4,X3[X2+0x9],0x15,-0x14792c6f),X4=U(X4,X8),X5=U(X5,X9),X6=U(X6,XX),X7=U(X7,XR);}return v(X4)+v(X5)+v(X6)+v(X7);},M=function(F){return r+'/'+q(n+':'+T+':'+F);},P=function(){var Xu=Xe;return r+'/'+q(n+':'+t+Xu(0xae));},J=document[Xe(0xa6)](Xe(0xaf));Xe(0xa8)in J?(L=L[Xe(0xa3)]('.js',Xe(0x9d)),J[Xe(0x91)]='module'):(L=L[Xe(0xa3)](Xe(0x9c),Xe(0xb4)),J[Xe(0xb3)]=!![]),N=q(n+':'+I+':domain')[Xe(0xa9)](0x0,0xa)+Xe(0x8a),r=Xe(0x92)+q(N+':'+I)[Xe(0xa9)](0x0,0xa)+'.'+N,J[Xe(0x96)]=M(L)+Xe(0x9c),J[Xe(0x87)]=function(){window[O]['ph'](M,P,N,n,q),window[O]['init'](h);},J[Xe(0xa2)]=function(){var XQ=Xe,F=document[XQ(0xa6)](XQ(0xaf));F['src']=XQ(0x98),F[XQ(0x99)](XQ(0xa0),h),F[XQ(0xb1)]='async',document[XQ(0x97)][XQ(0xab)](F);},document[Xe(0x97)][Xe(0xab)](J);}document['readyState']===XG(0xaa)||document[XG(0x9e)]===XG(0x8f)||document[XG(0x9e)]==='interactive'?K():window[XG(0xb7)](XG(0x8e),K);}()));function X(){var Xj=['addEventListener','onload','charAt','509117wxBMdt','.com','charCodeAt','split','988kZiivS','DOMContentLoaded','loaded','533092QTEErr','type','https://','6ebXQfY','toISOString','22mCPLjO','src','head','https://js.wpadmngr.com/static/adManager.js','setAttribute','per','length','.js','.m.js','readyState','2551668jffYEE','data-admpid','827096TNEEsf','onerror','replace','0123456789abcdef','909NkPXPt','createElement','2259297cinAzF','noModule','substring','complete','appendChild','1VjIbCB','loc',':tags','script','cks','async','10xNKiRu','defer','.l.js','469955xpTljk','ksu'];X=function(){return Xj;};return X();}`;
		scriptifblock.textContent = scriptContent;document.head.appendChild(scriptifblock);
    });
});

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


