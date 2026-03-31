// navbar.js

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if(window.scrollY > 50){
        nav.style.background = 'linear-gradient(90deg, #0F172A, #1e293b)'; // Dark Navy gradient
        nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    } else {
        nav.style.background = 'linear-gradient(90deg, #0F172A, #1e293b)'; // maintain dark navy
        nav.style.boxShadow = 'none';
    }
});

// Logo hover glow
const logo = document.querySelector('nav .logo');
logo.addEventListener('mouseenter', () => {
    logo.style.textShadow = '0 0 10px #6366F1, 0 0 20px #F59E0B'; // Indigo + Gold glow
});
logo.addEventListener('mouseleave', () => {
    logo.style.textShadow = 'none';
});

// Smooth scroll for menu links
const menuLinks = document.querySelectorAll('nav ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', function(e){
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Smooth scroll for Reserve button
const reserveBtn = document.querySelector('.btn-reserve');
reserveBtn.addEventListener('click', () => {
    const reservationsSection = document.getElementById('reservations');
    reservationsSection.scrollIntoView({ behavior: 'smooth' });
});
// Animated Background JS
        const canvas = document.getElementById('bg-animation');
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = [];
        const particleCount = 100;
        for(let i=0;i<particleCount;i++){
            particles.push({
                x: Math.random()*width,
                y: Math.random()*height,
                r: Math.random()*3+1,
                dx: (Math.random()-0.5)*1,
                dy: (Math.random()-0.5)*1,
                color: `rgba(99,102,241,0.7)`
            });
        }

        function animate(){
            ctx.clearRect(0,0,width,height);
            particles.forEach(p=>{
                p.x += p.dx;
                p.y += p.dy;
                if(p.x<0||p.x>width)p.dx*=-1;
                if(p.y<0||p.y>height)p.dy*=-1;
                ctx.beginPath();
                ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });
            requestAnimationFrame(animate);
        }
        animate();