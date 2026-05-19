const progressBar = document.getElementById("progressBar");
const quoteBox = document.getElementById("quoteBox");
const newQuoteBtn = document.getElementById("newQuoteBtn");

const quotes = [
  "“Discipline is choosing what you want most over what you want now.”",
  "“You do not rise to the level of your goals. You fall to the level of your systems.”",
  "“A focused mind is one of the most powerful tools a person can build.”",
  "“Small habits repeated daily become a quiet form of power.”",
  "“The cost of distraction is the life you could have built.”",
  "“Clarity is not found by thinking forever. It is built through action.”",
  "“Your future is hidden inside your repeated behavior.”",
  "“The secret to getting ahead is getting started.”",
  "“The quality of your attention determines the quality of your life.”",
  "“Most people wait for motivation. Builders create systems.”",
  "“Peace often comes after difficult decisions, not easy ones.”",
  "“Every day you repeat a habit, you reinforce an identity.”",
  "“Silence and solitude reveal what distraction hides.”",
  "“Consistency looks small daily but massive yearly.”",
  "“A calm mind can outperform a chaotic talented one.”",
  "“You become stronger every time you refuse unnecessary comfort.”",
  "“Focus is less about intensity and more about elimination.”",
  "“The person you become is shaped by what you tolerate daily.”"
];

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  progressBar.style.width = `${progress}%`;
});

newQuoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  quoteBox.style.opacity = 0;

  setTimeout(() => {
    quoteBox.textContent = quotes[randomIndex];
    quoteBox.style.opacity = 1;
  }, 250);
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];

  for (let i = 0; i < 70; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speedX: Math.random() * 0.6 - 0.3,
      speedY: Math.random() * 0.6 - 0.3
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255, 255, 255, 0.65)";

  particles.forEach(particle => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();

    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x < 0 || particle.x > canvas.width) {
      particle.speedX *= -1;
    }

    if (particle.y < 0 || particle.y > canvas.height) {
      particle.speedY *= -1;
    }
  });

  requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});

resizeCanvas();
createParticles();
drawParticles();