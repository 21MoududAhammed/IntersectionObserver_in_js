const circle = document.getElementById('circle');

const observer = new IntersectionObserver((item)=>{
    if(item[0].isIntersecting){
        console.log('Circle is displayed.');
        observer.disconnect() // if you want to stop observing 
    }else{
        console.log('Circle is not displayed. Please scroll!')
    }
})

observer.observe(circle);