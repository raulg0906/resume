import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://lh3.googleusercontent.com/3Sm5SntSy8oXt2yyrKqHB6ZUPBgEsRfgO4lNJpsAncyu8YewhBcfT_ZTAtA0anyqqnloYq31C-SF8s07HUlFQNyKaXag5lkKWTxz-RPUGLcwkc-tKylBh-XalSfxTSlbLlSQbVJ7zEPoYvJ1S1aLr_WeZKEUbLRfBV-nEwjmtVWQEzM37ycCJK51zO5hCVhmi9xh3-v7zkURGA3B6MQeGEp2pwjkjGeriAJtbm0eu3r3inZQlfUwBH2P9GzEoK4jW17_s1ahOEN7QjpJjlxjhXQ-aoBJAGVPcSniW4CGR7eNrtUSUzJTbcZ0Dt1qZx7N76pjEggIdWyAfySLG0kRNAaHZKu6plGnU9nc668Vpztt2T4KqmzivM4JaByYA9QzS8bstmrs-Byy8dRwdhbDBjhEyI180xlp78lzVq6NZwoPqhn0x_dzP9zpUUgIGcLJ-bF3_7RXc22_Rt8AIOFVeDlU0LEXqDRNYJQMNBQCw9nSTtggcJKDj8UsKistUav4Fv7ZuuT1cIww3EtJ7BJEtAkONrwFWNjpIVhmheJn5_9laYOJ_UCPGcO-Q3X0acC6zfXOynwWSf-BiQKa5s8wDYJRKHILF3aZGwt5_xrXOYZ5tiUtaiFz6th1gdwTizLH-ULya5T9Oq7W29LLVDLwC9_IV9jmKqlyRz3hb7LRKQxopNJQJadI=w292-h437-no"
              alt="avatar"
              className="avatar-image"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | React | Javascript | MYSQL | Nodejs | JQuery | Redux
                | Express |
              </p>
              <div className="social-links">
                {/*Linked in */}
                <a
                  href="https://www.linkedin.com/in/raul-gonzalez-688138184/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*Instagram */}
                <a
                  href="http://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-rebel" aria-hidden="true" />
                </a>
                {/*Github */}
                <a
                  href="https://github.com/raulg0906"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
