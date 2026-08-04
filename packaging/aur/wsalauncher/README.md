# wsalauncher (AUR)

Official **Wsalauncher** binary from [wsamiawclient.lol](https://wsamiawclient.lol/download.html).

## Install (users)

```bash
yay -S wsalauncher
# or: paru -S wsalauncher
```

Then run `wsalauncher` from the terminal or search **Wsalauncher** in the app menu.

## Publish to AUR (maintainer)

1. [AUR hesabı](https://aur.archlinux.org/register) + SSH public key (Account → SSH Public Keys).
2. One-time:

   ```bash
   git clone ssh://aur@aur.archlinux.org/wsalauncher.git
   cp packaging/aur/wsalauncher/{PKGBUILD,wsalauncher.desktop,wsalauncher.install,.gitignore} wsalauncher/
   cd wsalauncher
   makepkg --printsrcinfo > .SRCINFO
   git add PKGBUILD .SRCINFO wsalauncher.desktop wsalauncher.install .gitignore
   git commit -m "Initial commit: wsalauncher 0.3.0"
   git push
   ```

3. **New launcher release:** update `pkgver` in `PKGBUILD`, refresh `sha256sums` for the `.tar.gz` from the site, bump `pkgrel`, regenerate `.SRCINFO`, commit, push.

   ```bash
   sha256sum /path/to/Wsalauncher-Linux.tar.gz
   makepkg --printsrcinfo > .SRCINFO
   ```

## Local test

```bash
cd packaging/aur/wsalauncher
makepkg -si
wsalauncher
```
