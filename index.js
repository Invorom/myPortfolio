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
    radius: (canvas.height/100) * (canvas.height/100)
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
const colorButton7 = document.querySelector("#darkButton7");
function changeColorImage()
{
    if(changeImage == 0)
    {
        document.getElementById("mode").src="pictures/logos/iconMoon.png"
        document.getElementById("email").src="pictures/logos/emailIcon2.png"
        changeImage = 1;
        colorCanvas.id = "clearCanvas";
        colorButton1.id = "clearButton1";
        colorButton2.id = "clearButton2";
        colorButton3.id = "clearButton3";
        colorButton4.id = "clearButton4";
        colorButton5.id = "clearButton5";
        colorButton6.id = "clearButton6";
        colorButton7.id = "clearButton7";
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
        document.getElementById("email").src="pictures/logos/emailIcon.png"
        changeImage = 0;
        colorCanvas.id = "darkCanvas";
        colorButton1.id = "darkButton1";
        colorButton2.id = "darkButton2";
        colorButton3.id = "darkButton3";
        colorButton4.id = "darkButton4";
        colorButton5.id = "darkButton5";
        colorButton6.id = "darkButton6";
        colorButton7.id = "darkButton7";
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
const aboutText = document.querySelector("#aboutD");
const goalText = document.querySelector("#goalD");
const skillsText = document.querySelector("#skillsD");
const experienceText = document.querySelector("#experienceD");
const contactText = document.querySelector("#contactD");
const logoSite = document.querySelector("#logo");
const x = window.matchMedia("(max-width: 1300px)");
const xmin = window.matchMedia("(min-width: 631px)");
const xmax = window.matchMedia("(max-width: 630px)");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const modeImage = document.querySelector("#mode");

const aboutButtonD = document.querySelector("#darkButton1");
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
        if(x.matches)
        {
            logoSite.style.width = "20%";
        }
        if(xmax.matches)
        {
            main.style.height = "70%";
            header.style.height = "15%";
            footer.style.height = "15%";
            logoSite.style.display = "none";
            modeImage.style.width = "10%";
        }
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
        if(x.matches)
        {
            logoSite.style.width = "20%";
        }
        if(xmax.matches)
        {
            main.style.height = "70%";
            header.style.height = "15%";
            footer.style.height = "15%";
            logoSite.style.display = "none";
            modeImage.style.width = "10%";
        }
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
        if(x.matches)
        {
            logoSite.style.width = "20%";
        }
        if(xmax.matches)
        {
            main.style.height = "70%";
            header.style.height = "15%";
            footer.style.height = "15%";
            logoSite.style.display = "none";
            modeImage.style.width = "10%";
        }
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
        if(x.matches)
        {
            logoSite.style.width = "20%";
        }
        if(xmax.matches)
        {
            main.style.height = "70%";
            header.style.height = "15%";
            footer.style.height = "15%";
            logoSite.style.display = "none";
            modeImage.style.width = "10%";
        }
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
        if(x.matches)
        {
            logoSite.style.width = "20%";
        }
        if(xmax.matches)
        {
            main.style.height = "70%";
            header.style.height = "15%";
            footer.style.height = "15%";
            logoSite.style.display = "none";
            modeImage.style.width = "10%";
        }
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
        backButtonD.style.display = "none";
        aboutText.style.display = "none";
        goalText.style.display = "none";
        skillsText.style.display = "none";
        experienceText.style.display = "none";
        contactText.style.display = "none";
        logoSite.style.width = "100%";
        if(xmin.matches)
        {
            darkTextH1.style.display = "block";
        }
        if(xmax.matches)
        {
            main.style.height = "0%";
            header.style.height = "75%";
            footer.style.height = "25%";
            logoSite.style.display = "flex";
            logoSite.style.width = "130px";
            logoSite.style.height = "220px";
            modeImage.style.width = "20%";
        }
    }
);

//Contact
const sendAnEmail = document.querySelector("#darkButton7");
sendAnEmail.addEventListener("click", function()
    {
        window.open("mailto:romain.nerot@outlook.fr")
    }
);

const linkedinPage = document.querySelector("#linkedin");
linkedinPage.addEventListener("click", function()
    {
        window.open("https://www.linkedin.com/in/romain-nerot-a9552a1ab/")
    }
);
