const live = document.querySelector(".live");
const video = document.querySelector(".video");
const message = document.querySelector(".message");
const notification = document.querySelector(".notification");
const users = document.querySelector(".users");
const usersSection = document.querySelector(".col-2")
const setting = document.querySelector(".setting")
const scVideo = document.querySelector('.host-img')
live.addEventListener('click', () =>{
    live.classList.add("active");
    video.classList.remove('active')
    message.classList.remove('active')
    notification.classList.remove('active')
    users.classList.remove('active')
    usersSection.style.display = 'block'
    setting.classList.remove('active')
});
live.addEventListener('click', () =>{
    live.classList.add("active");
    video.classList.remove('active')
    message.classList.remove('active')
    notification.classList.remove('active')
    users.classList.remove('active')
    usersSection.style.display = 'none'
    setting.classList.remove('active')
});
video.addEventListener('click', () =>{
    live.classList.remove("active");
    video.classList.add('active')
    message.classList.remove('active')
    notification.classList.remove('active')
    users.classList.remove('active')
    usersSection.style.display = 'none'
    setting.classList.remove('active')
});
message.addEventListener('click', () =>{
    live.classList.remove("active");
    video.classList.remove('active')
    message.classList.add('active')
    notification.classList.remove('active')
    users.classList.remove('active')
    usersSection.style.display = 'none'
    setting.classList.remove('active')
});
notification.addEventListener('click', () =>{
    live.classList.remove("active");
    video.classList.remove('active')
    message.classList.remove('active')
    notification.classList.add('active')
    users.classList.remove('active')
    usersSection.style.display = 'none'
    setting.classList.remove('active')
});
users.addEventListener('click', () =>{
    live.classList.remove("active");
    video.classList.remove('active')
    message.classList.remove('active')
    notification.classList.remove('active')
    users.classList.add('active')
    usersSection.style.display = 'none'
    setting.classList.remove('active')
});
setting.addEventListener('click', () =>{
    live.classList.remove("active");
    video.classList.remove('active')
    message.classList.remove('active')
    notification.classList.remove('active')
    users.classList.remove('active')
    setting.classList.add('active')
    usersSection.style.display = 'none'
});


if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video:true, sound:true}).then(sream =>{
        scVideo.srcObject = sream
        scVideo.play();
    })
}