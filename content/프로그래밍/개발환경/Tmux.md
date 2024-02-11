---
title: Tmux
tags:
  - 개발환경
date: 2023-11-19
---
---

```bash
sudo apt install tmux
```


```bash
touch ~/.tmux.conf
```

```conf


```


```bash
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
```

```conf
# tpm plugin
set -g @plugin 'tmux-plugins/tpm'

# list of tmux plugins
set -g @plugin 'christoomey/vim-tmux-navigator'
set -g @plugin 'tmux-plugins/tmux-resurrect' # persist tmux sessions after computer restart
set -g @plugin 'tmux-plugins/tmux-continuum' # automatically saves sessions for you every 15 minutes

set -g @plugin 'niksingh710/minimal-tmux-status'

set -g @resurrect-capture-pane-contents 'on'
set -g @continuum-restore 'on'

# Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)
run '~/.tmux/plugins/tpm/tpm'
```

```bash

```

```bash

```

```bash

```

```bash

```

```bash

```

```bash

```
















