---
title: Zshell
tags:
  - 개발환경
date: 2023-11-19
---
---

### Installation

```bash
sudo apt install zsh
```

```bash
zsh --version
```

```bash
echo $SHELL
```

```bash
sudo chsh -s $(which zsh)
```

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

```zsh
export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="powerlevel10k/powerlevel10k"


plugins=(git zsh-autosuggestions zsh-syntax-highlighting fzf)


```

```bash
sudo apt install fonts-powerline
```

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

```bash
sudo apt install bat
```

```bash
sudo apt install fzf
```

```bash
sudo apt install zoxide
```

```bash
alias vim="nvim"
alias cls="clear"
alias cat="bat"
alias ls="ls --color=auto"
alias grep="grep --color=auto"
```





### window

```json
{
      "guid": "{124fc1da-dadc-4276-9c4e-f0524ba57a49}",
      "name": "Git Bash",
      "commandline": "\"%PROGRAMFILES%\\git\\usr\\bin\\bash.exe\" -i -l",
      "icon": "%PROGRAMFILES%\\git\\mingw64\\share\\git\\git-for-windows.ico",
      "startingDirectory": "%USERPROFILE%",
      "cursorShape": "filledBox",
      "hidden": false
}
```

[zsh install](https://packages.msys2.org/package/zsh?repo=msys&variant=x86_64)

[FZF in WINDOW]([Releases · junegunn/fzf (github.com)](https://github.com/junegunn/fzf/releases))

`C:\Program Files\Git` 에 압축해제

```bash
zsh
```

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

```bash
# 실행
vi ~/.bashrc

# 편집 후 저장
if [ -t 1 ]; then
exec zsh
fi
```





---
### 참고:
- [OhMyZsh](https://github.com/ohmyzsh/ohmyzsh/wiki)
- [Powerline]([powerline/fonts: Patched fonts for Powerline users. (github.com)](https://github.com/powerline/fonts))
- [Powerline10k]([romkatv/powerlevel10k: A Zsh theme (github.com)](https://github.com/romkatv/powerlevel10k#oh-my-zsh))
-
