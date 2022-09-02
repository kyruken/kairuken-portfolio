import React from "react"

export default function Home() {
    return (
        <div className="home-container">
            <section className="header-container">
                <div className="header-1-2">
                    <h2>Hello, I'm</h2>
                    <h1>Kyle Arenas</h1>
                    <p>I am a self taught web developer who loves problem solving, creative thinking,
                        and organization.
                    </p>
                    
                    <p>There are absolutely ways for better or optimal solutions in every hobby or field
                        in my opinion. I apply this way of thinking to web development, and I strive to learn and apply better solutions.
                    </p>
                </div>

                <div className="header-2-2">
                    <img src="./src/assets/header-photo.jpg" className="header-photo"></img>
                </div>
            </section>

            <section className="projects-container">
                <h2>Projects</h2>
                <div className="project-cards">

                </div>
            </section>

            <section className="technology-container">
                <h2>Technologies</h2>
                <p>I have worked with many frameworks, libraries, and tools through my self learning journey. I enjoy
                    learning new technologies because I love learning new things.
                </p>

                <div className="technology-list-container">
                    <div className="column-1-3">
                        <h3>Web Programming</h3>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>React</p>
                        <p>Bootstrap</p>
                        <p>Material UI</p>
                    </div>

                    <div className="column-2-3">
                        <h3>Languages</h3>
                        <p>Javascript</p>
                        <p>Python</p>
                    </div>
                    
                    <div className="column-3-3">
                        <h3>Tools</h3>
                        <p>Git</p>
                        <p>Github</p>
                        <p>Visual Code Studio</p>
                        <p>Webpack</p>
                        <p>Vite</p>
                    </div>
                </div>


            </section>

        </div>
    )
}