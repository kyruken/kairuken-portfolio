import React from "react"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <footer className="footer-container">
                <ul className="footer-list-1-2">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Technologies</li>
                </ul>

                <ul className="navbar-list-2-2">
                    <li><a href="google.com" target="_blank"><LinkedInIcon sx={{ fontSize: "3.3rem" }} /></a></li>
                    <a href="roblox.com" target="_blank"><GitHubIcon sx={{ fontSize: "3rem" }} /></a>
                </ul>
        </footer>
    )
}