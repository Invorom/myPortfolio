const canvas = document.getElementById("darkCanvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Get mouse position
let mouse = 
{
    x: null,
    y: null,
    radius: (canvas.height/110) * (canvas.height/110)
}

window.addEventListener('mousemove',
    function(event)
    {
        mouse.x = event.x;
        mouse.y = event.y;
    }
);

// Create the particles
class Particle
{
    constructor(x, y, directionX, directionY, size, color)
    {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    // For drawing one particle
    draw()
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgb(6, 255, 255)';
        ctx.fill();
    }
    // Verify all positions, move and draw the particle
    update(){
        // Verify if the particle is in canvas
        if(this.x > canvas.width || this.x < 0)
        {
            this.directionX = -this.directionX;
        }
        if(this.y > canvas.height || this.y < 0)
        {
            this.directionY = -this.directionY;
        }

        // Verify collision between particle and mouse
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if(distance < mouse.radius + this.size)
        {
            if(mouse.x < this.x && this.x < canvas.width - this.size * 10)
            {
                this.x += 10;
            }
            if(mouse.x > this.x && this.x > this.size * 10)
            {
                this.x -= 10;
            }
            if(mouse.y < this.y && this.y < canvas.height - this.size * 10)
            {
                this.y += 10;
            }
            if(mouse.y > this.y && this.y > this.size * 10)
            {
                this.y -= 10;
            }
        }
        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;
        // Draw particle
        this.draw();
    }
}

// Create particle array
function createParticles()
{
    particlesArray = [];
    let numberParticles = (canvas.height * canvas.width) / 6000;
    for(let i = 0; i < numberParticles; i++)
    {
        let size = (Math.random() * 0.5) + 0.1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 1) - 0.5;
        let directionY = (Math.random() * 1) - 0.5;
        let color = 'rgb(6, 255, 255)';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// Draw a line between close particles
function connectParticles()
{
    for(let i = 0; i < particlesArray.length; i++)
    {
        for(let j = i; j < particlesArray.length; j++)
        {
            let distance = ((particlesArray[i].x - particlesArray[j].x) * (particlesArray[i].x - particlesArray[j].x)) + ((particlesArray[i].y - particlesArray[j].y) * (particlesArray[i].y - particlesArray[j].y));
            if(distance < (canvas.width/15) * (canvas.height/15))
            {
                ctx.strokeStyle = 'rgb(6, 255, 255)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }
    }
}

// Loop animation
function animation()
{
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for(let i = 0; i < particlesArray.length; i++)
    {
        particlesArray[i].update();
    }
    connectParticles();
}

// Launch the script
function launchParticles()
{
    createParticles();
    animation();
}
launchParticles();

// Change the pause button state and color mode
let changeImage = 0;
function changePauseImage()
{
    const colorCanvasD = document.getElementById("darkCanvas");
    const colorCanvasC = document.getElementById("clearCanvas");
    const colorButtonD1 = document.getElementById("darkButton1");
    const colorButtonC1 = document.getElementById("clearButton1");
    const colorButtonD2 = document.getElementById("darkButton2");
    const colorButtonC2 = document.getElementById("clearButton2");
    const colorButtonD3 = document.getElementById("darkButton3");
    const colorButtonC3 = document.getElementById("clearButton3");
    const colorButtonD4 = document.getElementById("darkButton4");
    const colorButtonC4 = document.getElementById("clearButton4");
    const colorButtonD5 = document.getElementById("darkButton5");
    const colorButtonC5 = document.getElementById("clearButton5");
    const colorTextD = document.getElementById("darkH1");
    const colorTextC = document.getElementById("clearH1");
    if(changeImage == 0)
    {
        document.getElementById("mode").src="pictures/logos/iconMoon.png"
        changeImage = 1;
        colorCanvasD.id = "clearCanvas";
        colorButtonD1.id = "clearButton1";
        colorButtonD2.id = "clearButton2";
        colorButtonD3.id = "clearButton3";
        colorButtonD4.id = "clearButton4";
        colorButtonD5.id = "clearButton5";
        colorTextD.id = "clearH1";
        return;
    }
    if(changeImage == 1)
    {
        document.getElementById("mode").src="pictures/logos/iconSun.png"
        changeImage = 0;
        colorCanvasC.id = "darkCanvas";
        colorButtonC1.id = "darkButton1";
        colorButtonC2.id = "darkButton2";
        colorButtonC3.id = "darkButton3";
        colorButtonC4.id = "darkButton4";
        colorButtonC5.id = "darkButton5";
        colorTextC.id = "darkH1";
        return;
    }
}

// Dark main
const 
const aboutButtonD = document.querySelector("#darkButton1");
aboutButtonD.addEventListener("click", function()
    {
        aboutButtonD.style.display = "none";
        goalButtonD.style.display = "none";
        skillsButtonD.style.display = "none";
        experienceButtonD.style.display = "none";
        contactButtonD.style.display = "none";
    }
);

const goalButtonD = document.querySelector("#darkButton2");
goalButtonD.addEventListener("click", function()
    {
        aboutButtonD.style.display = "none";
        goalButtonD.style.display = "none";
        skillsButtonD.style.display = "none";
        experienceButtonD.style.display = "none";
        contactButtonD.style.display = "none";
    }
);

const skillsButtonD = document.querySelector("#darkButton3");
skillsButtonD.addEventListener("click", function()
    {
        aboutButtonD.style.display = "none";
        goalButtonD.style.display = "none";
        skillsButtonD.style.display = "none";
        experienceButtonD.style.display = "none";
        contactButtonD.style.display = "none";
    }
);

const experienceButtonD = document.querySelector("#darkButton4");
experienceButtonD.addEventListener("click", function()
    {
        aboutButtonD.style.display = "none";
        goalButtonD.style.display = "none";
        skillsButtonD.style.display = "none";
        experienceButtonD.style.display = "none";
        contactButtonD.style.display = "none";
    }
);

const contactButtonD = document.querySelector("#darkButton5");
contactButtonD.addEventListener("click", function()
    {
        aboutButtonD.style.display = "none";
        goalButtonD.style.display = "none";
        skillsButtonD.style.display = "none";
        experienceButtonD.style.display = "none";
        contactButtonD.style.display = "none";
    }
);

// Clear main
const aboutButtonC = document.querySelector("#clearButton1");
aboutButtonD.addEventListener("click", function()
    {
        
    }
);

const goalButtonC = document.querySelector("#clearButton2");
goalButtonC.addEventListener("click", function()
    {
        
    }
);

const skillsButtonc = document.querySelector("#clearButton3");
skillsButtonC.addEventListener("click", function()
    {
        
    }
);

const experienceButtonC = document.querySelector("#clearButton4");
experienceButtonC.addEventListener("click", function()
    {
        
    }
);

const contactButtonC = document.querySelector("#clearButton5");
contactButtonC.addEventListener("click", function()
    {
        
    }
);
