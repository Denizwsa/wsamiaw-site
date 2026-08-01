# Wsamiaw site

- **Geçici:** https://denizwsa.github.io/wsamiaw-site/
- **Hedef:** https://wsamiawclient.lol

## Porkbun — park sayfasını kapat

Şu an domain **Porkbun park** sayfasına gidiyor (`pixie`, IP `207.207.210.x`). Site için DNS değiştir.

1. **Account → Domain Management → wsamiawclient.lol → DNS**
2. Park / `207.207.210` **A** kayıtlarını **sil** (veya “Use default DNS records” / park kapat).
3. **Ekle:**

| Type | Host | Value |
|------|------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `denizwsa.github.io` |

4. 10–30 dk sonra https://wsamiawclient.lol açılır (GitHub Pages zaten bağlı).

API ile: `wsamiaw-recode` içinde `scripts/porkbun-dns-github-pages.sh` + Porkbun API keys.
