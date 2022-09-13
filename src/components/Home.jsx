import React from "react"
import WebIcon from '@mui/icons-material/Web';
import LanguageIcon from '@mui/icons-material/Language';
import ConstructionIcon from '@mui/icons-material/Construction';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
    return (
        <div className="home-container">
            <section className="header-container">
                <div className="header-1-2">
                    <div>Hello I'm</div>
                    <h1>Kyle Arenas</h1>
                    I am a self taught web developer who loves problem solving, creative thinking,
                    and organization.
                    
                </div>

                <div className="header-2-2">
                    <img src="./src/assets/header-photo.jpg" className="header-photo"></img>
                </div>
            </section>

            <section className="projects-container">
                <h2 className="margin-left">Projects</h2>
                <div className="project-cards">
                    <div className="project">
                        <img src="./src/assets/project1.png"></img>
                        <div className="project-text">
                            <h3>Devil's Werk Website</h3>
                            <p>
                                Redesigned an old website using modern day HTML5, CSS3, and Javascript procedures. Also used React and Bootstrap to
                                organize code, use reusable styles, and create reusable components throughout the website.
                            </p>
                            <ul>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                            <div className="button-layout">
                                <button>Demo</button>
                                <button>Github</button>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <img src="./src/assets/project2.png"></img>
                        <div className="project-text">
                            <h3>Tic-Tac-Toe</h3>
                            <p>
                                A fun game project that users can play on the web browser. This Tic-Tac-Toe project is meant to be
                                played with two players where a player will play as O and the other will be X to mark squares.
                            </p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Javascript</li>
                            </ul>
                            <div className="button-layout">
                                <button>Demo</button>
                                <button>Github</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="technology-container">
                <h2 className="margin-left">Technologies</h2>
                <p className="margin-left">I have worked with many frameworks, libraries, and tools through my self learning journey. I enjoy
                    learning new technologies because I love learning new things.
                </p>
                <div className="technology-list-container">
                    <div className="column-1-3">
                        <div className="header-border">
                            <WebIcon />
                            <h3>Web Programming</h3>
                        </div>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>React</p>
                        <p>Bootstrap</p>
                        <p>Material UI</p>
                    </div>

                    <div className="column-2-3">
                        <div className="header-border">
                            <LanguageIcon />
                            <h3>Languages</h3>
                        </div>
                        <p>Javascript</p>
                        <p>Python</p>
                    </div>
                    
                    <div className="column-3-3">
                        <div className="header-border">
                            <ConstructionIcon />
                            <h3>Tools</h3>
                        </div>
                        <p>Git</p>
                        <p>Github</p>
                        <p>Visual Code Studio</p>
                        <p>Webpack</p>
                        <p>Vite</p>
                    </div>
                </div>
            </section>

            <section className="contact-container">
                <h2 className="margin-left">Contact Me</h2>
                <div className="margin-left">
                    <div className="header-border margin-left">
                        <EmailIcon />
                        <h3>Email</h3>
                    </div>
                    <p className="margin-left">Kyruken@gmail.com</p>
                </div>
            </section>

            <section className="quote-container">
                <div>The most certain way to succeed is always to try just one more time.</div>
                <div>-Thomas Edison</div>
            </section>

        </div>
    )
}