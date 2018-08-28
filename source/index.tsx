import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AppContainer from './components/App';

class App extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (<div>
            <AppContainer />
        </div>)
        }
}

ReactDOM.render(<App />, document.querySelector('#root'));
