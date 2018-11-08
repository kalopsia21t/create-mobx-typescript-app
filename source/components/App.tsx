import * as React from 'react';

import * as styles from './App.less';

class AppContainer extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (<div>
            <header className={styles.appHeader}>
                <h1>React & Typescript</h1>
            </header>
            <article>
                <div>
                    <p>
                    Here's React and Typescript boilerplate, I was thinking that it would be good thing, if start with a couple new technologies will be more easier and faster,
                    so I've created this for purpose if I neeed quick start with Typescript and React, all I need it's just download this repo. I will try make it more useful and make it like
                    "true" boilerplate with possibility to start with it as a npm package. If you will find it useful, send me your feedback, I'm looking for better perfomance.
                    </p>
                </div>
            </article>
            <article>
                <div>
                    <p>
                        For build process I'm using webpack with "awesome-typescript-loader" for TS and Less & CSS-modules.
                        Also I've integrated TSLint with default rules, so if just getting started with Typescript it will help you
                    </p>
                </div>
            </article>
            <article>
                <div>
                    <p>
                       In future I will add Jest as test-runner, and Babel for improve building and react-hot-realoding and TS transpilation.
                    </p>
                </div>
            </article>
        </div>);
    }
}

export default AppContainer;
