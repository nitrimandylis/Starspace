<div align="center">

<img src="media/android-chrome-512x512.png" alt="Starspace" width="120"/>

### `STARSPACE // PLANETARIUM FOR FUTURE ENGINEERS`

*an interactive site introducing students to LLMs, quantum computing, and robotics — in two languages*

![frameworks](https://img.shields.io/badge/frameworks-0-f5d547?style=flat-square&labelColor=10142a)
![languages](https://img.shields.io/badge/languages-EN_+_ΕΛ-f5d547?style=flat-square&labelColor=10142a)
![audience](https://img.shields.io/badge/audience-secondary_school_students-7d8ec7?style=flat-square&labelColor=10142a)
![hosting](https://img.shields.io/badge/hosting-github_pages._free._eternal-7d8ec7?style=flat-square&labelColor=10142a)
![jargon](https://img.shields.io/badge/jargon-translated_to_human-f5d547?style=flat-square&labelColor=10142a)

**[→ live at nitrimandylis.github.io/Starspace](https://nitrimandylis.github.io/Starspace/)**

</div>

---

## 🌌 What is this

An interactive educational website that hands secondary school students three
of the most intimidating fields in computer science — **Large Language
Models**, **Quantum Computing**, and **Robotics** — without the gatekeeping.
Each field gets an overview, real-world applications, and career pathways.
Everything available in both **English and Greek** <img src="media/flag-en.svg" alt="EN" width="16"/> <img src="media/flag-el.svg" alt="EL" width="16"/>.

Plain HTML, CSS, and JavaScript on GitHub Pages. Zero frameworks — the
students are the ones who are supposed to be learning the complicated stuff.

```console
student@starspace:~$ cat curriculum.txt
[01] LLMs       — how they work, where they're used, who gets hired
[02] quantum    — qubits without the headache
[03] robotics   — from sensors to autonomous systems
```

## 🪐 The topics

| | topic | what it actually covers |
|---|---|---|
| 01 | **large language models** | how LLMs work, their applications, and careers in AI |
| 02 | **quantum computing** | principles of quantum systems and where the field is heading |
| 03 | **robotics** | from sensors to autonomous systems and industry use cases |

Each topic ships an **overview** page and a **careers** page, with custom
artwork in `media/`.

## 🚀 Run it

It's a static site — the bar is on the floor:

```bash
git clone https://github.com/nitrimandylis/Starspace.git
cd Starspace
python3 -m http.server      # → http://localhost:8000
```

Or skip all that and visit the
[live site](https://nitrimandylis.github.io/Starspace/) — GitHub Pages serves
it for free, forever, like a small immortal librarian.

## 🔩 Under the hood

| file | job |
|---|---|
| `index.html` | landing page |
| `about.html` | the why |
| `main.js` | navigation and interactivity |
| `style.css` | the styling |
| `pages/llm/` `pages/quantum/` `pages/robotics/` | overview + careers per topic |
| `media/` | logo, topic artwork, EN/EL flags |

**Stack:** HTML · CSS · JavaScript · GitHub Pages. That's the whole stack.
That's the point.

---

<div align="center">

**[Nick Trimandylis](https://github.com/nitrimandylis)**

`THE STARS ARE FOR EVERYONE. SO IS COMPUTER SCIENCE.`

MIT licensed — see [LICENSE](LICENSE).

</div>
