const images=[
    'imges/pic-1.jpg',
    'imges/pic-2.jpg',
    'imges/pic-3.jpg',
    'imges/pic-4.jpg',
    'imges/pic-5.jpg',
    'imges/pic-6.jpg',
    'imges/pic-7.jpg',
    'imges/pic-8.jpg',
    'imges/pic-9.jpg',
 
];
let imgIndex=0;
const imgUrl=document.getElementById('slider-img');
setInterval(()=>{
    if(imgIndex>=images.length){
    imgIndex=0;
    }
    const url=images[imgIndex];
    imgUrl.setAttribute('src',url)
    imgIndex++;
},2000)