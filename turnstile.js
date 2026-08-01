(function () {
  let loginId = null;
  let registerId = null;
  let ready = false;

  function renderWidgets() {
    if (!window.turnstile || !TURNSTILE_SITE_KEY) return;
    const loginEl = document.getElementById("turnstile-login");
    const regEl = document.getElementById("turnstile-register");
    if (loginEl && loginId === null) {
      loginId = turnstile.render(loginEl, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "dark",
        action: "login",
      });
    }
    if (regEl && registerId === null) {
      registerId = turnstile.render(regEl, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "dark",
        action: "register",
      });
    }
    ready = true;
  }

  window.wsamiawTurnstileOnLoad = function () {
    renderWidgets();
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (window.turnstile) renderWidgets();
  });

  function tokenFor(formId) {
    if (!window.turnstile) return "";
    if (formId === "login" && loginId !== null) return turnstile.getResponse(loginId) || "";
    if (formId === "register" && registerId !== null) return turnstile.getResponse(registerId) || "";
    return "";
  }

  function resetFor(formId) {
    if (!window.turnstile) return;
    if (formId === "login" && loginId !== null) turnstile.reset(loginId);
    if (formId === "register" && registerId !== null) turnstile.reset(registerId);
  }

  function isReady() {
    return ready && window.turnstile;
  }

  window.wsamiawTurnstile = { tokenFor, resetFor, isReady };
})();
