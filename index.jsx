import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';


import './css/index.scss';

const Page = (props) => {
    return (
        <div className={classnames("page", props.className)}>
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

function App() {
  return (
    <div>
        <Page className="first">
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
        <Page>
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
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));