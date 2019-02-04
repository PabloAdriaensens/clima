import React, {Component} from 'react';

class Clima extends Component {
    render() {

        console.log(this.props.resultado);
        return (
            <div className="container">
                <h1>Desde Clima.js</h1>
            </div>
        )
    }
}

export default Clima;