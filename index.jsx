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



const Technology = (props) => {


    return (
        <a className={"technology"} href={props.href}>
            <div className="image">
                <img src={props.img} />
            </div>
            <div className="descriptor">{props.children}</div>
        </a>
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
        this.techMap = [
            {
                "name": "React.js",
                "img": "../assets/originals/react.png",
                "url": "https://reactjs.org/"
            },
            {
                "name": "JS ES6",
                "img": "../assets/originals/js.jpg",
                "url": "https://developer.mozilla.org/bm/docs/Web/JavaScript/"
            },
            {
                "name": "HTML5",
                "img": "../assets/originals/html5.svg",
                "url": "https://www.w3.org/html/"
            },
            {
                "name": "Sass",
                "img": "../assets/originals/sass.svg",
                "url": "https://sass-lang.com/"
            },
            {
                "name": "Webpack",
                "img": "../assets/originals/webpack.png",
                "url": "https://webpack.js.org/"
            },
            {
                "name": "AWS",
                "img": "../assets/originals/aws.svg",
                "url": "https://aws.amazon.com/"
            },
            {
                "name": "Nginx",
                "img": "../assets/originals/nginx.png",
                "url": "https://www.nginx.com/"
            },
            {
                "name": "MySQL",
                "img": "../assets/originals/mysql.png",
                "url": "https://mysql.com/"
            },
            {
                "name": "Python",
                "img": "../assets/originals/python.svg",
                "url": "https://python.org/"
            },
            {
                "name": "Flask",
                "img": "../assets/originals/flask.svg",
                "url": "http://flask.pocoo.org/"
            },
            {
                "name": "Pandas",
                "img": "../assets/originals/pandas.png",
                "url": "https://pandas.pydata.org/"
            },
            {
                "name": "Jira",
                "img": "../assets/originals/jira.png",
                "url": "https://www.atlassian.com/software/jira"
            }
        ]
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
                                {this.techMap.map(i => {
                                    return (
                                        <Technology href={i.url} img={i.img}>{i.name}</Technology>
                                    )
                                })}
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