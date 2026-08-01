(function () {
  const STORAGE_KEY = "wsamiaw_lang";
  const DEFAULT = "en";
  const LOCALES = ["en", "tr", "es", "zh"];

  const messages = {
    en: {
      meta_description: "Wsamiaw Recode — Fabric client for Minecraft 26.2",
      page_title_home: "Wsamiaw Recode",
      page_title_account: "Account — Wsamiaw",
      page_title_scripting: "Scripting — Wsamiaw",
      nav_home: "Home",
      nav_account: "Account",
      nav_download: "Download",
      nav_scripting: "Scripting",
      hero_tagline:
        "Fabric client for Minecraft <strong>26.2</strong> — dropdown ClickGUI, scripting, combat & movement. Works on older protocol servers with ViaFabricPlus.",
      btn_download_github: "Download (GitHub Releases)",
      btn_account_login: "Account / Sign in",
      btn_scripting: "Scripting",
      section_setup: "Setup",
      setup_1: "Fabric Loader 0.19.3+ and Fabric API (26.2)",
      setup_2: "Java 25",
      setup_3: "Drop the JAR into your <code>mods</code> folder",
      setup_4: "ViaFabricPlus recommended for 1.8 servers",
      section_features: "Highlights",
      feat_1: "KillAura, SilentAura, Backtrack, Scaffold",
      feat_2: "HUD blur, ModelManager, Script Writer",
      feat_3: "Custom main menu & dropdown GUI",
      section_account_license: "Account & license",
      account_license_p:
        "<a href=\"account.html\">Create an account</a> on the account page. License keys are assigned via Discord after purchase; the client will connect to the <code>/verify</code> API.",
      note_rules: "Follow server rules — many servers ban utility clients.",
      section_legacy: "1.8.9 release",
      legacy_p:
        "Classic Forge line: <a href=\"https://github.com/Denizwsa/wsamiaw\">github.com/Denizwsa/wsamiaw</a>",
      footer_disclaimer: "Not affiliated with Mojang or Microsoft.",
      account_heading: "Account",
      account_intro:
        "Register or sign in. Email verification is required. Optional 2FA (Google Authenticator, etc.).",
      tab_login: "Sign in",
      tab_register: "Register",
      label_email: "Email",
      label_password: "Password",
      label_password_min: "Password (min. 8 characters)",
      btn_login: "Sign in",
      twofa_prompt: "Enter your 6-digit 2FA code.",
      label_code: "Code",
      btn_verify: "Verify",
      btn_register: "Register",
      resend_note: "Didn't get the verification email?",
      btn_resend: "Resend verification email",
      welcome: "Welcome",
      twofa_heading: "Two-factor authentication (2FA)",
      twofa_setup_note: "Add to your authenticator app (manual key):",
      twofa_otpauth: "Open otpauth link",
      label_first_code: "First code",
      btn_enable_2fa: "Enable 2FA",
      label_disable_code: "Code to disable",
      btn_disable_2fa: "Disable 2FA",
      btn_setup_2fa: "Set up 2FA",
      license_intro: "Your license key (enter in the client or launcher):",
      license_hint: "Not assigned yet — added after Discord purchase.",
      license_test_note: "Paste below to test your key.",
      label_license_key: "License key",
      btn_check_license: "Verify",
      btn_logout: "Sign out",
      verified_ok: "Email verified.",
      verified_pending: "Email not verified yet — use the link in your email to sign in.",
      twofa_on: "2FA is enabled.",
      twofa_off: "2FA is disabled.",
      verify_email_ok: "Email verified. You can sign in now.",
      verify_email_expired: "Link expired — request a new one.",
      verify_email_fail: "Verification failed.",
      err_verify_first: "Verify your email first. Resend below if needed.",
      err_captcha: "Complete the security check (CAPTCHA).",
      err_captcha_setup: "CAPTCHA failed to load. Refresh the page.",
      err_invalid_credentials: "Invalid email or password.",
      err_login: "Sign-in failed.",
      err_invalid_2fa: "Invalid code.",
      err_verify_fail: "Verification failed.",
      err_register: "Registration failed.",
      err_email_taken: "This email is already registered.",
      err_invalid_input: "Invalid email or password (min. 8 characters).",
      register_ok: "Registration complete. Check your email for the verification link.",
      err_not_found: "Email not found.",
      err_resend: "Could not send.",
      resend_ok: "Email sent (or API mail not configured).",
      already_verified: "This account is already verified.",
      err_2fa_setup: "2FA setup failed.",
      open_authenticator: "Open in authenticator",
      twofa_setup_ok: "Add the code in your app, then enter the first code.",
      twofa_enabled: "2FA enabled.",
      twofa_disabled: "2FA disabled.",
      license_valid: "License valid",
      license_invalid: "Invalid or expired key.",
    },
    tr: {
      meta_description: "Wsamiaw Recode — Minecraft 26.2 Fabric client",
      page_title_home: "Wsamiaw Recode",
      page_title_account: "Hesap — Wsamiaw",
      page_title_scripting: "Scripting — Wsamiaw",
      nav_home: "Ana sayfa",
      nav_account: "Hesap",
      nav_download: "İndir",
      nav_scripting: "Scripting",
      hero_tagline:
        "Minecraft <strong>26.2</strong> için Fabric client — dropdown ClickGUI, scripting, combat & movement. ViaFabricPlus ile eski protokollü sunuculara da uyumlu.",
      btn_download_github: "İndir (GitHub Releases)",
      btn_account_login: "Hesap / Giriş",
      btn_scripting: "Scripting",
      section_setup: "Kurulum",
      setup_1: "Fabric Loader 0.19.3+ ve Fabric API (26.2)",
      setup_2: "Java 25",
      setup_3: "JAR’ı <code>mods</code> klasörüne at",
      setup_4: "1.8 sunucular için ViaFabricPlus önerilir",
      section_features: "Öne çıkanlar",
      feat_1: "KillAura, SilentAura, Backtrack, Scaffold",
      feat_2: "HUD blur, ModelManager, Script Writer",
      feat_3: "Custom ana menü & dropdown GUI",
      section_account_license: "Hesap & lisans",
      account_license_p:
        "<a href=\"account.html\">Hesap sayfasından</a> kayıt olabilirsin. Lisans anahtarı satın alım sonrası Discord üzerinden tanımlanır; client <code>/verify</code> API’sine bağlanacak.",
      note_rules: "Sunucu kurallarına uy — birçok sunucu utility client’ı yasaklar.",
      section_legacy: "1.8.9 sürümü",
      legacy_p:
        "Klasik Forge hattı: <a href=\"https://github.com/Denizwsa/wsamiaw\">github.com/Denizwsa/wsamiaw</a>",
      footer_disclaimer: "Mojang / Microsoft ile bağlantılı değildir.",
      account_heading: "Hesap",
      account_intro:
        "Kayıt ol veya giriş yap. E-posta doğrulaması zorunlu. İsteğe bağlı 2FA (Google Authenticator vb.).",
      tab_login: "Giriş",
      tab_register: "Kayıt",
      label_email: "E-posta",
      label_password: "Şifre",
      label_password_min: "Şifre (en az 8 karakter)",
      btn_login: "Giriş yap",
      twofa_prompt: "2FA kodunu gir (6 haneli).",
      label_code: "Kod",
      btn_verify: "Doğrula",
      btn_register: "Kayıt ol",
      resend_note: "Doğrulama maili gelmedi?",
      btn_resend: "Doğrulama mailini tekrar gönder",
      welcome: "Hoş geldin",
      twofa_heading: "İki adımlı doğrulama (2FA)",
      twofa_setup_note: "Authenticator uygulamasına ekle (manuel key):",
      twofa_otpauth: "otpauth linki",
      label_first_code: "İlk kod",
      btn_enable_2fa: "2FA’yı aç",
      label_disable_code: "Kod ile kapat",
      btn_disable_2fa: "2FA’yı kapat",
      btn_setup_2fa: "2FA kur",
      license_intro: "Lisans anahtarın (client’ta veya launcher’da gir):",
      license_hint: "Henüz atanmadı — Discord’dan satın alım sonrası eklenir.",
      license_test_note: "Anahtarı test etmek için aşağıya yapıştır.",
      label_license_key: "Lisans key",
      btn_check_license: "Doğrula",
      btn_logout: "Çıkış",
      verified_ok: "E-posta doğrulandı.",
      verified_pending: "E-posta henüz doğrulanmadı — giriş için maildeki linke tıkla.",
      twofa_on: "2FA açık.",
      twofa_off: "2FA kapalı.",
      verify_email_ok: "E-posta doğrulandı. Giriş yapabilirsin.",
      verify_email_expired: "Link süresi doldu — tekrar gönder.",
      verify_email_fail: "Doğrulama başarısız.",
      err_verify_first: "Önce e-postanı doğrula. Gerekirse aşağıdan maili tekrar iste.",
      err_captcha: "Güvenlik doğrulamasını (CAPTCHA) tamamla.",
      err_captcha_setup: "CAPTCHA yüklenemedi. Sayfayı yenile.",
      err_invalid_credentials: "E-posta veya şifre hatalı.",
      err_login: "Giriş başarısız.",
      twofa_required: "2FA kodu gerekli.",
      err_invalid_2fa: "Kod hatalı.",
      err_verify_fail: "Doğrulama başarısız.",
      err_register: "Kayıt başarısız.",
      err_email_taken: "Bu e-posta zaten kayıtlı.",
      err_invalid_input: "Geçersiz e-posta veya şifre (min 8 karakter).",
      register_ok: "Kayıt tamam. E-postandaki doğrulama linkine tıkla.",
      err_not_found: "E-posta bulunamadı.",
      err_resend: "Gönderilemedi.",
      resend_ok: "Mail gönderildi (veya API ayarlı değil).",
      already_verified: "Bu hesap zaten doğrulanmış.",
      err_2fa_setup: "2FA kurulumu başarısız.",
      open_authenticator: "Authenticator ile aç",
      twofa_setup_ok: "Kodu uygulamaya ekle, sonra ilk kodu gir.",
      twofa_enabled: "2FA açıldı.",
      twofa_disabled: "2FA kapatıldı.",
      license_valid: "Lisans geçerli",
      license_invalid: "Geçersiz veya süresi dolmuş key.",
    },
    es: {
      meta_description: "Wsamiaw Recode — Cliente Fabric para Minecraft 26.2",
      page_title_home: "Wsamiaw Recode",
      page_title_account: "Cuenta — Wsamiaw",
      page_title_scripting: "Scripting — Wsamiaw",
      nav_home: "Inicio",
      nav_account: "Cuenta",
      nav_download: "Descargar",
      nav_scripting: "Scripting",
      hero_tagline:
        "Cliente Fabric para Minecraft <strong>26.2</strong> — ClickGUI, scripting, combate y movimiento. Compatible con servidores antiguos vía ViaFabricPlus.",
      btn_download_github: "Descargar (GitHub Releases)",
      btn_account_login: "Cuenta / Iniciar sesión",
      btn_scripting: "Scripting",
      section_setup: "Instalación",
      setup_1: "Fabric Loader 0.19.3+ y Fabric API (26.2)",
      setup_2: "Java 25",
      setup_3: "Coloca el JAR en la carpeta <code>mods</code>",
      setup_4: "ViaFabricPlus recomendado para servidores 1.8",
      section_features: "Destacados",
      feat_1: "KillAura, SilentAura, Backtrack, Scaffold",
      feat_2: "HUD blur, ModelManager, Script Writer",
      feat_3: "Menú principal y GUI dropdown personalizados",
      section_account_license: "Cuenta y licencia",
      account_license_p:
        "<a href=\"account.html\">Regístrate</a> en la página de cuenta. Las claves se asignan por Discord tras la compra; el cliente usará la API <code>/verify</code>.",
      note_rules: "Respeta las reglas del servidor — muchos prohíben clients de utilidad.",
      section_legacy: "Versión 1.8.9",
      legacy_p:
        "Línea Forge clásica: <a href=\"https://github.com/Denizwsa/wsamiaw\">github.com/Denizwsa/wsamiaw</a>",
      footer_disclaimer: "No afiliado a Mojang ni Microsoft.",
      account_heading: "Cuenta",
      account_intro:
        "Registro o inicio de sesión. Verificación de email obligatoria. 2FA opcional (Google Authenticator, etc.).",
      tab_login: "Iniciar sesión",
      tab_register: "Registro",
      label_email: "Email",
      label_password: "Contraseña",
      label_password_min: "Contraseña (mín. 8 caracteres)",
      btn_login: "Iniciar sesión",
      twofa_prompt: "Introduce el código 2FA de 6 dígitos.",
      label_code: "Código",
      btn_verify: "Verificar",
      btn_register: "Registrarse",
      resend_note: "¿No llegó el email de verificación?",
      btn_resend: "Reenviar email de verificación",
      welcome: "Bienvenido",
      twofa_heading: "Autenticación en dos pasos (2FA)",
      twofa_setup_note: "Añadir en la app authenticator (clave manual):",
      twofa_otpauth: "Abrir enlace otpauth",
      label_first_code: "Primer código",
      btn_enable_2fa: "Activar 2FA",
      label_disable_code: "Código para desactivar",
      btn_disable_2fa: "Desactivar 2FA",
      btn_setup_2fa: "Configurar 2FA",
      license_intro: "Tu clave de licencia (en el client o launcher):",
      license_hint: "Aún no asignada — se añade tras compra en Discord.",
      license_test_note: "Pega abajo para probar la clave.",
      label_license_key: "Clave de licencia",
      btn_check_license: "Verificar",
      btn_logout: "Cerrar sesión",
      verified_ok: "Email verificado.",
      verified_pending: "Email no verificado — usa el enlace del correo para entrar.",
      twofa_on: "2FA activado.",
      twofa_off: "2FA desactivado.",
      verify_email_ok: "Email verificado. Ya puedes iniciar sesión.",
      verify_email_expired: "Enlace caducado — solicita otro.",
      verify_email_fail: "Verificación fallida.",
      err_verify_first: "Verifica tu email primero. Reenvía abajo si hace falta.",
      err_captcha: "Completa la verificación de seguridad (CAPTCHA).",
      err_captcha_setup: "No se cargó el CAPTCHA. Recarga la página.",
      err_invalid_credentials: "Email o contraseña incorrectos.",
      err_login: "Error al iniciar sesión.",
      twofa_required: "Se requiere código 2FA.",
      err_invalid_2fa: "Código incorrecto.",
      err_verify_fail: "Verificación fallida.",
      err_register: "Registro fallido.",
      err_email_taken: "Este email ya está registrado.",
      err_invalid_input: "Email o contraseña inválidos (mín. 8 caracteres).",
      register_ok: "Registro completo. Revisa el enlace de verificación en tu email.",
      err_not_found: "Email no encontrado.",
      err_resend: "No se pudo enviar.",
      resend_ok: "Email enviado (o API de correo no configurada).",
      already_verified: "Esta cuenta ya está verificada.",
      err_2fa_setup: "Error al configurar 2FA.",
      open_authenticator: "Abrir en authenticator",
      twofa_setup_ok: "Añade el código en la app y luego el primer código.",
      twofa_enabled: "2FA activado.",
      twofa_disabled: "2FA desactivado.",
      license_valid: "Licencia válida",
      license_invalid: "Clave inválida o caducada.",
    },
    zh: {
      meta_description: "Wsamiaw Recode — Minecraft 26.2 Fabric 客户端",
      page_title_home: "Wsamiaw Recode",
      page_title_account: "账户 — Wsamiaw",
      page_title_scripting: "脚本 — Wsamiaw",
      nav_home: "首页",
      nav_account: "账户",
      nav_download: "下载",
      nav_scripting: "脚本",
      hero_tagline:
        "Minecraft <strong>26.2</strong> Fabric 客户端 — 下拉 ClickGUI、脚本、战斗与移动。配合 ViaFabricPlus 可连接旧协议服务器。",
      btn_download_github: "下载（GitHub Releases）",
      btn_account_login: "账户 / 登录",
      btn_scripting: "脚本",
      section_setup: "安装",
      setup_1: "Fabric Loader 0.19.3+ 与 Fabric API (26.2)",
      setup_2: "Java 25",
      setup_3: "将 JAR 放入 <code>mods</code> 文件夹",
      setup_4: "1.8 服务器建议安装 ViaFabricPlus",
      section_features: "亮点",
      feat_1: "KillAura、SilentAura、Backtrack、Scaffold",
      feat_2: "HUD 模糊、ModelManager、Script Writer",
      feat_3: "自定义主菜单与下拉 GUI",
      section_account_license: "账户与许可证",
      account_license_p:
        "在<a href=\"account.html\">账户页面</a>注册。购买后通过 Discord 分配许可证密钥；客户端将连接 <code>/verify</code> API。",
      note_rules: "遵守服务器规则 — 许多服务器禁止实用类客户端。",
      section_legacy: "1.8.9 版本",
      legacy_p:
        "经典 Forge 分支：<a href=\"https://github.com/Denizwsa/wsamiaw\">github.com/Denizwsa/wsamiaw</a>",
      footer_disclaimer: "与 Mojang / Microsoft 无关联。",
      account_heading: "账户",
      account_intro: "注册或登录。必须验证邮箱。可选 2FA（Google Authenticator 等）。",
      tab_login: "登录",
      tab_register: "注册",
      label_email: "邮箱",
      label_password: "密码",
      label_password_min: "密码（至少 8 位）",
      btn_login: "登录",
      twofa_prompt: "输入 6 位 2FA 验证码。",
      label_code: "验证码",
      btn_verify: "验证",
      btn_register: "注册",
      resend_note: "没收到验证邮件？",
      btn_resend: "重新发送验证邮件",
      welcome: "欢迎",
      twofa_heading: "两步验证 (2FA)",
      twofa_setup_note: "添加到验证器应用（手动密钥）：",
      twofa_otpauth: "打开 otpauth 链接",
      label_first_code: "首个验证码",
      btn_enable_2fa: "启用 2FA",
      label_disable_code: "关闭用验证码",
      btn_disable_2fa: "关闭 2FA",
      btn_setup_2fa: "设置 2FA",
      license_intro: "许可证密钥（在客户端或启动器中输入）：",
      license_hint: "尚未分配 — Discord 购买后添加。",
      license_test_note: "在下方粘贴以测试密钥。",
      label_license_key: "许可证密钥",
      btn_check_license: "验证",
      btn_logout: "退出",
      verified_ok: "邮箱已验证。",
      verified_pending: "邮箱未验证 — 请点击邮件中的链接登录。",
      twofa_on: "2FA 已启用。",
      twofa_off: "2FA 已关闭。",
      verify_email_ok: "邮箱已验证，可以登录。",
      verify_email_expired: "链接已过期 — 请重新发送。",
      verify_email_fail: "验证失败。",
      err_verify_first: "请先验证邮箱，可在下方重新发送。",
      err_captcha: "请完成安全验证（CAPTCHA）。",
      err_captcha_setup: "CAPTCHA 加载失败，请刷新页面。",
      err_invalid_credentials: "邮箱或密码错误。",
      err_login: "登录失败。",
      twofa_required: "需要 2FA 验证码。",
      err_invalid_2fa: "验证码错误。",
      err_verify_fail: "验证失败。",
      err_register: "注册失败。",
      err_email_taken: "该邮箱已注册。",
      err_invalid_input: "邮箱或密码无效（至少 8 位）。",
      register_ok: "注册完成，请查收验证邮件。",
      err_not_found: "邮箱未找到。",
      err_resend: "发送失败。",
      resend_ok: "邮件已发送（或邮件 API 未配置）。",
      already_verified: "该账户已验证。",
      err_2fa_setup: "2FA 设置失败。",
      open_authenticator: "在验证器中打开",
      twofa_setup_ok: "在应用中添加密钥，然后输入首个验证码。",
      twofa_enabled: "2FA 已启用。",
      twofa_disabled: "2FA 已关闭。",
      license_valid: "许可证有效",
      license_invalid: "密钥无效或已过期。",
    },
  };

  const htmlLang = { en: "en", tr: "tr", es: "es", zh: "zh-CN" };

  function normalize(lang) {
    if (!lang) return DEFAULT;
    const l = lang.toLowerCase().slice(0, 2);
    return LOCALES.includes(l) ? l : DEFAULT;
  }

  function getLang() {
    return normalize(localStorage.getItem(STORAGE_KEY) || DEFAULT);
  }

  function setLang(lang) {
    const code = normalize(lang);
    localStorage.setItem(STORAGE_KEY, code);
    applyTranslations(code);
  }

  function t(key) {
    const lang = getLang();
    const table = messages[lang] || messages.en;
    return table[key] ?? messages.en[key] ?? key;
  }

  function applyTranslations(lang) {
    const code = normalize(lang);
    document.documentElement.lang = htmlLang[code] || "en";

    const titleKey = document.body.dataset.pageTitleKey;
    if (titleKey) document.title = t(titleKey);

    const meta = document.querySelector("meta[name=\"description\"]");
    if (meta && meta.dataset.i18n) meta.setAttribute("content", t(meta.dataset.i18n));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key) el.innerHTML = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key) el.setAttribute("placeholder", t(key));
    });

    const sel = document.getElementById("lang-select");
    if (sel) sel.value = code;
  }

  function initLangSelect() {
    const sel = document.getElementById("lang-select");
    if (!sel) return;
    sel.addEventListener("change", () => setLang(sel.value));
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTranslations(getLang());
    initLangSelect();
  });

  window.wsamiawI18n = { getLang, setLang, t, applyTranslations };
  window.t = t;
})();
