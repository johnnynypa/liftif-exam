// Dependencies
import React, { Component} from 'react';
import { Field, reduxForm} from 'redux-form'

class HomeForm extends Component{

    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(e){
        e.preventDefaut();
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Origen</label>
                    <div>
                    <Field
                        name="origen"
                        component="input"
                        type="text"
                        placeholder="Origen"
                    />
                    </div>
                </div>
                <div>
                    <label>Destino</label>
                    <div>
                    <Field
                        name="destino"
                        component="input"
                        type="text"
                        placeholder="Destino"
                    />
                    </div>
                </div>

            </form>
        )
    }
}

export default reduxForm({
        form: 'homeForm'
    })(HomeForm);