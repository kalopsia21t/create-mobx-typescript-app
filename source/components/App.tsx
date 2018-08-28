import * as React from 'react';

import styles from './App.less';

class AppContainer extends React.Component<{}, {}> {
    render() : JSX.Element {
        return (<div>
            <header className={styles.app}>
                Typescript & MobX
            </header>
        </div>)
    }
}

export default AppContainer;