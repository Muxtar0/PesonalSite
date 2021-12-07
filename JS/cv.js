const item = document.querySelectorAll('ul li a');
const marker = document.getElementById('marker');
function indicator(e){
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
};
item.forEach(Link =>{
    Link.addEventListener("mousemove" , (e) =>{
        indicator(e.target);
    })
});

