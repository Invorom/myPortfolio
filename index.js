const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Get mouse position
let mouse = 
{
    x: null,
    y: null,
    radius: (canvas.height/130) * (canvas.height/130)
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
        let directionX = (Math.random() * 1) - 1;
        let directionY = (Math.random() * 1) - 1;
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
            if(distance < (canvas.width/12) * (canvas.height/12))
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

createParticles();
animation();
