* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --navy: #07111f;
    --navy-light: #0c1a2c;
    --blue: #1683ff;
    --blue-light: #5ba9ff;
    --text: #17202c;
    --muted: #687384;
    --light: #f5f7fa;
    --white: #ffffff;
    --border: #e4e8ee;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--white);
    color: var(--text);
    line-height: 1.6;
}


/* HEADER */

.site-header {
    height: 82px;
    padding: 0 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
    background: rgba(255,255,255,0.96);
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(12px);
}


/* LOGO */

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo > span {
    width: 40px;
    height: 40px;
    border: 2px solid var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
    color: var(--blue);
}

.logo strong {
    display: block;
    font-size: 14px;
    letter-spacing: 2px;
}

.logo small {
    display: block;
    font-size: 10px;
    letter-spacing: 4px;
    color: var(--muted);
}


/* NAVIGATION */

.navigation {
    display: flex;
    gap: 30px;
}

.navigation a {
    text-decoration: none;
    color: #46505e;
    font-size: 13px;
    font-weight: 600;
    transition: 0.25s ease;
}

.navigation a:hover,
.navigation a.active {
    color: var(--blue);
}


/* MOBILE MENU */

.menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 25px;
    cursor: pointer;
}


/* HERO */

.hero {
    min-height: calc(100vh - 82px);
    padding: 70px 7%;
    display: grid;
    grid-template-columns: 1fr 0.9fr;
    gap: 70px;
    align-items: center;
}

.hero-content {
    max-width: 720px;
}

.eyebrow {
    color: var(--blue);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 3px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(45px, 6vw, 82px);
    line-height: 0.98;
    letter-spacing: -4px;
    margin-bottom: 30px;
}

.hero h1 span,
.section-heading span,
.connect h2 span,
.hero-panel h2 span {
    color: var(--blue);
}

.hero-description {
    max-width: 650px;
    font-size: 18px;
    color: var(--muted);
    margin-bottom: 35px;
}


/* BUTTONS */

.hero-buttons,
.connect-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 24px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1px;
    transition: 0.25s ease;
}

.btn-primary {
    background: var(--navy);
    color: white;
}

.btn-primary:hover {
    background: var(--blue);
    transform: translateY(-2px);
}

.btn-secondary {
    border: 1px solid #ccd3dc;
    color: var(--navy);
    background: white;
}

.btn-secondary:hover {
    border-color: var(--blue);
    color: var(--blue);
    transform: translateY(-2px);
}


/* TAGS */

.tech-tags {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tech-tags span {
    border: 1px solid var(--border);
    padding: 7px 12px;
    font-size: 11px;
    color: var(--muted);
}


/* DARK PANEL */

.hero-panel {
    min-height: 560px;
    background: var(--navy);
    position: relative;
    overflow: hidden;
    border: 1px solid #16375e;
    box-shadow: 0 25px 70px rgba(0,0,0,0.14);
}

.panel-grid {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
    background-size: 40px 40px;
}

.panel-grid::after {
    content: "";
    position: absolute;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: rgba(22,131,255,0.18);
    filter: blur(80px);
    top: 20%;
    left: 25%;
    animation: glow 5s infinite alternate ease-in-out;
}

@keyframes glow {
    from {
        transform: translate(-30px, -20px);
    }

    to {
        transform: translate(50px, 40px);
    }
}

.panel-content {
    position: relative;
    z-index: 2;
    padding: 55px;
}

.panel-label {
    color: #7ca7d4;
    font-size: 11px;
    letter-spacing: 3px;
    font-weight: bold;
}

.hero-panel h2 {
    color: white;
    font-size: clamp(32px, 4vw, 52px);
    line-height: 1.05;
    margin: 25px 0;
}

.hero-panel p {
    color: #9caabc;
}


/* SKILL ANIMATION */

.skill-animation {
    margin-top: 60px;
    height: 230px;
    overflow: hidden;
    position: relative;
}

.skill {
    color: #59677b;
    font-size: 19px;
    padding: 8px 0;
    transition: 0.5s ease;
}

.skill.active {
    color: white;
    font-weight: 800;
    font-size: 23px;
    transform: translateX(10px);
}

.skill.active::before {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    background: var(--blue);
    margin-right: 12px;
    vertical-align: middle;
    box-shadow: 0 0 15px var(--blue);
}


/* SECTIONS */

.section {
    padding: 110px 7%;
}

.section-heading {
    max-width: 750px;
    margin-bottom: 55px;
}

.section-heading h2 {
    font-size: clamp(35px, 5vw, 62px);
    line-height: 1.05;
    letter-spacing: -2px;
}


/* CARDS */

.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.info-card {
    padding: 38px;
    border: 1px solid var(--border);
    min-height: 280px;
    transition: 0.3s ease;
}

.info-card:hover {
    transform: translateY(-6px);
    border-color: var(--blue);
    box-shadow: 0 20px 50px rgba(0,0,0,0.07);
}

.card-number {
    color: var(--blue);
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 45px;
}

.info-card h3 {
    font-size: 22px;
    margin-bottom: 15px;
}

.info-card p {
    color: var(--muted);
}


/* PROJECTS */

.projects-preview {
    background: var(--light);
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.project-card {
    background: white;
    padding: 35px;
    border: 1px solid var(--border);
    transition: 0.3s ease;
}

.project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
}

.project-top {
    display: flex;
    justify-content: space-between;
    color: var(--blue);
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 55px;
}

.project-card h3 {
    font-size: 23px;
    margin-bottom: 15px;
}

.project-card p {
    color: var(--muted);
    margin-bottom: 25px;
}

.project-tech {
    font-size: 11px;
    color: #778293;
    border-top: 1px solid var(--border);
    padding-top: 15px;
    margin-bottom: 25px;
}

.project-card a {
    color: var(--navy);
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;
}

.project-card a:hover {
    color: var(--blue);
}

.center-button {
    text-align: center;
    margin-top: 50px;
}


/* CONNECT */

.connect {
    padding: 120px 7%;
    text-align: center;
    background: var(--navy);
    color: white;
}

.connect h2 {
    font-size: clamp(38px, 5vw, 65px);
    line-height: 1;
    max-width: 800px;
    margin: auto;
}

.connect > p:not(.eyebrow) {
    color: #9caabc;
    max-width: 600px;
    margin: 25px auto 35px;
}

.connect-buttons {
    justify-content: center;
}


/* FOOTER */

footer {
    padding: 30px 7%;
    text-align: center;
    background: #050c16;
    color: #718096;
    font-size: 12px;
}


/* RESPONSIVE */

@media (max-width: 1000px) {

    .hero {
        grid-template-columns: 1fr;
    }

    .hero-panel {
        min-height: 500px;
    }

    .cards,
    .project-grid {
        grid-template-columns: 1fr;
    }
}


@media (max-width: 750px) {

    .site-header {
        height: 70px;
        padding: 0 5%;
    }

    .menu-toggle {
        display: block;
        color: var(--navy);
    }

    .navigation {
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        background: white;
        border-bottom: 1px solid var(--border);
        display: none;
        flex-direction: column;
        padding: 20px 5%;
        gap: 18px;
    }

    .navigation.show {
        display: flex;
    }

    .hero {
        padding: 60px 5%;
        gap: 50px;
    }

    .hero h1 {
        letter-spacing: -2px;
    }

    .hero-panel {
        min-height: 450px;
    }

    .panel-content {
        padding: 35px;
    }

    .section {
        padding: 80px 5%;
    }

    .connect {
        padding: 90px 5%;
    }

}