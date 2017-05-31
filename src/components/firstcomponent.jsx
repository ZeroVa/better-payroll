import React from 'react';

class FirstComponent extends React.Component {    
    render() {
        var peeps = ["Jim", "Pam", "Angela"];
        return <div>
            {peeps.map(x => (<h1>{x}</h1>))}
        </div>
    }
}

export default FirstComponent;