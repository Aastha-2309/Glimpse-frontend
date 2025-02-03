import React, { useState, useEffect } from 'react';

const Background = () => {
  const [starCount, setStarCount] = useState(500);
  const [starSpeed, setStarSpeed] = useState(0.6);
  const starFieldRef = React.createRef();
  
  useEffect(() => {
    initStarField();
    const intervalId = setInterval(createShootingStar, 1000);
    return () => clearInterval(intervalId);
  }, [starCount, starSpeed]);

 

  const createStar = () => {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${(Math.random() * 3 + 2) / starSpeed}s`;
    star.style.animationDelay = `${Math.random() * 3}s`;

    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    star.style.backgroundColor = `rgb(${230}, ${223}, ${240})`;

    star.style.filter = `blur(${Math.random()}px)`;

    return star;
  };

  const initStarField = () => {
    const starField = starFieldRef.current;
    if (starField) {
      starField.innerHTML = '';
      for (let i = 0; i < starCount; i++) {
        starField.appendChild(createStar());
      }
    
    }
  };


  const createShootingStar = () => {
    const shootingStar = createStar();
    shootingStar.style.width = '3px';
    shootingStar.style.height = '3px';
    shootingStar.style.backgroundColor = '#fff';
    shootingStar.style.boxShadow = '0 0 10px #fff, 0 0 20px #fff';
    shootingStar.style.animation = `shooting-star 1s linear`;

    const starField = starFieldRef.current;
    if (starField) {
      starField.appendChild(shootingStar);

      setTimeout(() => {
        starField.removeChild(shootingStar);
      }, 1000);
    }
  };

  useEffect(() => {
   
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      starFieldRef.current.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
              <div className="star-field" ref={starFieldRef}></div>
        
      
    </div>
  );
};

export default Background;
