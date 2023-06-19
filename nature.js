"use strict"

window.onload = function() {
    const nature = document.querySelector('.nature');

    if(nature) {
        const content = document.querySelector('.nature__container');
        const clouds = document.querySelector('.img-nature__clouds');
        const mountains = document.querySelector('.img-nature__mountains');
        const human = document.querySelector('.img-nature__human');

        const forClouds = 40;
        const forMountains = 20;
        const forHuman = 10;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseNatureStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%);`;
            mountains.style.cssText = `transform: translate(${positionX / forMountains}%, ${positionY / forMountains}%);`;
            human.style.cssText = `transform: translate(${positionX / forHuman}%, ${positionY / forHuman}%);`;

            requestAnimationFrame(setMouseNatureStyle);

        };
        setMouseNatureStyle();

        nature.addEventListener("mousemove",function (e) {
            const natureWidth = nature.offsetWidth;
            const natureHeight = nature.offsetHeight;

            const coordX = e.pageX - natureWidth / 2;
            const coordY = e.pageY - natureHeight / 2;

            coordXprocent = coordX / natureWidth * 100;
            coordYprocent = coordY / natureHeight * 100;
        });

        let threesholdSets = [];
        for (let i = 0; i <= 1.0; i += 0.005) {
            thresholdSets.push(i);
        }
        const callback = function (entries, observer) {
            const scrollTopProcent = window.pageYOffset / nature.offsetHeight * 100;
            setNatureItemsStyle(scrollTopProcent);
        };
        const observed = new IntersectionObserver(callback, {
            threshold: thresholdSets
        });
        observer.observe(document.querySelector('.content'));

        function setNatureItemsStyle (scrollTopProcent){
            content.style.cssText = `transform:translate(0%,-${scrollTopProcent / 9}%);`;
            mountains.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%)`;
            human.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%)`;
        }
    }
}