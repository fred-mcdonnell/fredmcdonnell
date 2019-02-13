import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import classnames from 'classnames';


import './css/index.scss';

const Page = (props) => {
    return (
        <div id={props.id} className={classnames("page", props.className)}>
            {props.children}
        </div>
    );
}

const assetMap = {
    "react" : "/img/react.js",
    "php" : "/img/react.js",
    "mysql" : "/img/react.js",
    "aws" : "/img/react.js",
    "webpack" : "/img/react.js",
    "python" : "/img/react.js"
}

const Technology = (props) => {

    return (
        <div className={"technology"}>
            <img src={assetMap[props.imgRef]} />
            <div>{props.children}</div>
        </div>
    );
} 

const Navigation = (props) => {
    let linkProps = {
        smooth : true,
        duration : 500,
        style: {
            display: "block",
            float: "left"
        }
    }
    return (
        <div id="navigation">
            <Link to="home" {...linkProps}>
                <div className="link">Home</div>
            </Link>
            <Link to="about" {...linkProps}>
                <div className="link">About Me</div>
            </Link>
            <Link to="tech" {...linkProps}>
                <div className="link">Technologies</div>
            </Link>
            <Link to="contact" {...linkProps}>
                <div className="link">Contact</div>
            </Link>
        </div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: ""
        }
    }

    render() {
        return (
            <div>
                    <Navigation />
                    <Page id="home">
                        <div>
                            <img src="../assets/me.jpg" className="me" />
                            <h1>
                                Fred McDonnell
                            </h1>
                            <h2>
                                Developer | Technical Consultant
                            </h2>
                        </div>
                    </Page>
                    <Page id="about">
                        <div>
                            <h3>
                                About Me
                            </h3>
                            <div>
                                <p>I currently work at QuantSpark as a Senior Analyst, leading on the development of one of our flagship products. I really enjoy my role, working closely with clients, as well as in the development team itself. I am responsible for architecting the solutions to our clients' problems, and delivering these solutions using Agile methodologies. I'm very fortunate to have an incredibly varied role, where the projects I work on may range from creating machine-learning driven models, developing and designing new product features, or drafting system data architectures.</p>
                            </div>
                            <div>
                                <Technology imgRef="react">React.js</Technology>
                                <Technology imgRef="webpack">Webpack</Technology>
                                <Technology imgRef="python">Python</Technology>
                                <Technology imgRef="php">PHP</Technology>
                                <Technology imgRef="mysql">MySQL</Technology>
                                <Technology imgRef="aws">AWS</Technology>
                            </div>
                        </div>
                    </Page>
                    <Page id="tech">
                        <div>
                            <h3>
                                Technologies
                            </h3>
                            <div>
                                Below are some of the technologies I have used across projects in the last few years. 
                            </div>
                            <div>
                                <Technology imgRef="react">React.js</Technology>
                                <Technology imgRef="webpack">Webpack</Technology>
                                <Technology imgRef="python">Python</Technology>
                                <Technology imgRef="php">PHP</Technology>
                                <Technology imgRef="mysql">MySQL</Technology>
                                <Technology imgRef="aws">AWS</Technology>
                            </div>
                        </div>
                    </Page>
                    <Page id="contact">
                        <div>
                            <h3>
                                Contact
                            </h3>
                            <div>
                                Please feel free to get in touch, you can contact me using one of the following:
                            </div>
                            <div>
                                <ul>
                                    <li>GitHub</li>
                                    <li>LinkedIn</li>
                                    <li>Email</li>
                                </ul>
                            </div>
                        </div>
                    </Page>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));