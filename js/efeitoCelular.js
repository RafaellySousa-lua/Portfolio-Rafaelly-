document.addEventListener("mousemove", (e) => {
    const celular = document.getElementById("celular");
    if (!celular) return;
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;
    celular.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
  