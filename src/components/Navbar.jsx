import React from "react"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Navbar() {
    return (
        <nav className="navbar-container">
            <ul className="navbar-list-1-2 navbar-link">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#technology">Technologies</a></li>
            </ul>

            <ul className="navbar-list-2-2 navbar-link">
                <li><a href="https://www.linkedin.com/in/avery-kyle-arenas-49224a22a/" target="_blank"><LinkedInIcon sx={{ fontSize: "2.5rem" }} /></a></li>
                <a href="https://github.com/kyruken" target="_blank"><GitHubIcon sx={{ fontSize: "2.3rem" }} /></a>
            </ul>

        </nav>
    )
}