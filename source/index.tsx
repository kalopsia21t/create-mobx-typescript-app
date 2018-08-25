import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (<div>
            REACT YEAH!!
        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
