(function() {
  document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("cookiePopupConfirm")) {
      // Cookie popup element
      const cookieEl = document.querySelector("#pure-cookie");
      const cookieText = cookieEl.innerText ? `${cookieEl.innerText}` : `Den här webbplatsen använder kakor. Kakor och liknande teknik behövs för lyssnafunktionen och för att hantera inställningar som du gör. Kakorna används för att bland annat förbättra besöksupplevelsen. Genom att göra inställningar i webbläsaren kan du blockera webbkakor. Det kan innebära att vissa tjänster på webbplatsen, till exempel lyssnafunktionen, inte fungerar samt att du får se detta meddelande ofta.`;
      if (cookieEl) {
        const output = ` <div id="pure-cookie-content"> ${cookieText} <div id="pure-cookie-btn">Jag förstår!</div> </div> `;
        cookieEl.innerHTML = output;

        const cookieConfirmEl = document.querySelector("#pure-cookie-btn");
        if (cookieConfirmEl) {
          cookieConfirmEl.addEventListener("click", () => {
            hidePureCookie(cookieEl);
          });
        } else {
          console.error("Något gick fel");
        }
      } else {
        console.error(
          "Något gick fel. Se till att du har en div med id pure-cookie och testa igen"
        );
      }
    }
  });

  const hidePureCookie = function hidePureCookieElementOnClick(cookieEl) {
    cookieEl.style.display = "none";
    cookieEl.style.background = "none";
    localStorage.setItem("cookiePopupConfirm", true);
  };
})();
