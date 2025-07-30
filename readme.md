# Terminal Portfolio Site

**Vansh Agrawal**'s Interactive, browser-based terminal themed personal portfolio.
The UI mimics a Unix shell: visitors type commands (e.g. `whois`, `projects`, `contact`) and receive formatted output.

---

## ✨ Features

* Pure **HTML + CSS + JavaScript** – no frameworks required.
* Animated banner header rendered on load.
* Typing-style output for banner; paragraph output for command responses.
* Command history & arrow-key navigation.
* Custom prompt (`visitor@agrawalvansh.me:~$`).
* Easy to extend with new commands/links via `js/commands.js` & `js/main.js`.
* Fully responsive; scrollbar hidden for a clean terminal look.

---

## 🔧 Local Development

```bash
# 1. Clone
$ git clone https://github.com/agrawalvansh/terminal-portfolio.git
$ cd Terminal

# 2. Serve (pick one)
# • Python 3
$ python -m http.server 8000
# • VS Code Live Server extension
# • Any static file server of your choice

# 3. Open
# Visit http://localhost:8000 in your browser
```

No build step is required – the project is 100 % static assets.

---

## 🖥️ Available Commands

| Command | Description |
|---------|-------------|
| `ls` / `help` | List all commands |
| `whois` | About Vansh |
| `whoami` | Philosophical quote |
| `projects` | Highlighted side projects |
| `github` | Open GitHub profile |
| `contact` | Social links & email |
| `resume` | Open résumé PDF |
| `website` | Open main website |
| `clear` | Clear terminal output |
| `banner` | Re-print header |
| `history` | Show command history |
| *(secret!)* | Find the password, if you can 😉 |

Add or edit commands in `js/commands.js` and their routing logic in `js/main.js`.

---

## 🛠️ Customisation

1. **Text & Links** – update arrays in `js/commands.js`.
2. **Prompt** – tweak `#liner::before` in `css/style.css`.
3. **Colours & Fonts** – edit `css/style.css` variables.
4. **Banner** – modify `banner` array in `js/commands.js` (each string = one line).

---

## 📄 License

MIT © 2025 Vansh Agrawal

Feel free to fork, modify, and deploy your own version!
