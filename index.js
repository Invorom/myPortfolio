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
        let size = (Math.random() * 2) + 0.5;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.5) - 0.25;
        let directionY = (Math.random() * 0.5) - 0.25;
        let color = 'rgb(6, 255, 255)';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
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
}

// Launch the script
function launchParticles()
{
    createParticles();
    animation();
}
launchParticles();

// Change the color button state and color mode
let changeImage = 0;
const colorCanvas = document.querySelector("#darkCanvas");
const colorButton1 = document.querySelector("#darkButton1");
const colorButton2 = document.querySelector("#darkButton2");
const colorButton3 = document.querySelector("#darkButton3");
const colorButton4 = document.querySelector("#darkButton4");
const colorButton5 = document.querySelector("#darkButton5");
const colorButton6 = document.querySelector("#darkButton6");
const colorText = document.querySelector("#darkH1");
function changeColorImage()
{
    if(changeImage == 0)
    {
        document.getElementById("mode").src="pictures/logos/iconMoon.png"
        changeImage = 1;
        colorCanvas.id = "clearCanvas";
        colorButton1.id = "clearButton1";
        colorButton2.id = "clearButton2";
        colorButton3.id = "clearButton3";
        colorButton4.id = "clearButton4";
        colorButton5.id = "clearButton5";
        colorButton6.id = "clearButton6";
        colorText.id = "clearH1";
        aboutText.id = "aboutC";
        goalText.id = "goalC";
        skillsText.id = "skillsC";
        experienceText.id = "experienceC";
        contactText.id = "contactC";
        return;
    }
    if(changeImage == 1)
    {
        document.getElementById("mode").src="pictures/logos/iconSun.png"
        changeImage = 0;
        colorCanvas.id = "darkCanvas";
        colorButton1.id = "darkButton1";
        colorButton2.id = "darkButton2";
        colorButton3.id = "darkButton3";
        colorButton4.id = "darkButton4";
        colorButton5.id = "darkButton5";
        colorButton6.id = "darkButton6";
        colorText.id = "darkH1";
        aboutText.id = "aboutD";
        goalText.id = "goalD";
        skillsText.id = "skillsD";
        experienceText.id = "experienceD";
        contactText.id = "contactD";
        return;
    }
}

// Main
const darkTextH1 = document.querySelector("#darkH1");
const aboutButtonD = document.querySelector("#darkButton1");
const aboutText = document.querySelector("#aboutD");
const goalText = document.querySelector("#goalD");
const skillsText = document.querySelector("#skillsD");
const experienceText = document.querySelector("#experienceD");
const contactText = document.querySelector("#contactD");
aboutButtonD.addEventListener("click", function()
    {
        aboutButtonD.style.display = "none";
        goalButtonD.style.display = "none";
        skillsButtonD.style.display = "none";
        experienceButtonD.style.display = "none";
        contactButtonD.style.display = "none";
        darkTextH1.style.display = "none";
        backButtonD.style.display = "flex";
        aboutText.style.display = "flex";
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
        darkTextH1.style.display = "none";
        backButtonD.style.display = "flex";
        goalText.style.display = "flex";
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
        darkTextH1.style.display = "none";
        backButtonD.style.display = "flex";
        skillsText.style.display = "flex";
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
        darkTextH1.style.display = "none";
        backButtonD.style.display = "flex";
        experienceText.style.display = "flex";
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
        darkTextH1.style.display = "none";
        backButtonD.style.display = "flex";
        contactText.style.display = "flex";
    }
);

const backButtonD = document.querySelector("#darkButton6");
backButtonD.addEventListener("click", function()
    {
        aboutButtonD.style.display = "flex";
        goalButtonD.style.display = "flex";
        skillsButtonD.style.display = "flex";
        experienceButtonD.style.display = "flex";
        contactButtonD.style.display = "flex";
        darkTextH1.style.display = "block";
        backButtonD.style.display = "none";
        aboutText.style.display = "none";
        goalText.style.display = "none";
        skillsText.style.display = "none";
        experienceText.style.display = "none";
        contactText.style.display = "none";
    }
);
