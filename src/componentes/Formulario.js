import React, {Component} from 'react';

class Formulario extends Component {

    // crear los refs
    ciudadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima = (e) => {
        e.preventDefault();

        // leer los refs y crear el objeto
        const respuesta = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }

        console.log(respuesta);

        // enviar por props
        this.props.datosConsulta(respuesta);

        // resetear el form
    };

    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.ciudadRef} id="ciudad" type="text"/>
                                <label htmlFor="ciudad">Ciudad:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef}>
                                    <option value="" defaultValue>Elige un país</option>
                                    <option value="ES">España</option>
                                    <option value="FR">Francia</option>
                                    <option value="PO">Portugal</option>
                                    <option value="IT">Italia</option>
                                    <option value="US">Estado Unidos</option>
                                    <option value="MX">México</option>
                                </select>
                                <label htmlFor="pais">País:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-2 buscador">
                                <input type="submit" className="waves-effect waves-light btn btn-large yellow accent-4"
                                       value="Buscar..."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Formulario;