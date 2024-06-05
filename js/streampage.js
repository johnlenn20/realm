const IdVideo = window.location.href.replace(/ht.+en=/, "").replace(/#.+/, "").replace(/\&fbclid.+/, "").replace("&m=1", "");
const videoFrame = document.getElementById("videoFrame");
videoFrame.src = `https://www.blogger.com/video.g?token=AD6v5d${IdVideo}`;
videoFrame.height = `360`;
videoFrame.classList.remove('hidden');
document.title = `Nonton ${IdVideo.replace(/.+j=/,"").replace(/&p.+/,"")}`;
document.getElementById("judul").innerHTML = `${IdVideo.replace(/.+j=/,"").replace(/&p.+/,"")} | Part ${IdVideo.replace(/.+p=/,"")}`;
