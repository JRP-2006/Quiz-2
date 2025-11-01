// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const autos = document.querySelectorAll(".auto");

  // --- Alerta simple al hacer clic en un auto ---
  autos.forEach(auto => {
    auto.addEventListener("click", () => {
      const nombre = auto.querySelector("h3").textContent;
      const precio = auto.querySelector("p").textContent;
      alert(`🚗 Has seleccionado:\n${nombre}\nPrecio: ${precio}`);
    });
  });

  // --- Filtro interactivo ---
  // (Podrás agregar este botón dentro del catálogo si quieres activar el filtro)
  const filtroBtn = document.createElement("button");
  filtroBtn.textContent = "Mostrar autos más caros de $50,000,000";
  filtroBtn.classList.add("btn-filtro");

  const catalogo = document.querySelector(".catalogo");
  catalogo.insertBefore(filtroBtn, catalogo.querySelector(".autos"));

  filtroBtn.addEventListener("click", () => {
    autos.forEach(auto => {
      const precioTexto = auto.querySelector("p").textContent.replace(/\D/g, "");
      const precio = parseInt(precioTexto, 10);

      if (precio < 50000000) {
        auto.style.display = "none";
      } else {
        auto.style.display = "block";
      }
    });

    alert("✅ Mostrando solo los autos más caros de $50,000,000");
  });
});
