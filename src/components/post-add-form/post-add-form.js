import React, {Component} from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state.text);
        this.setState({
            text: ''
        })

    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input 
                    className="form-control new-post-label"
                    type="text"
                    placeholder="О чем вы думаете сейчас"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <div>
                    <button
                        type="submit"
                        className="btn btn-outline-secondary">
                        Добавить</button>
                </div>
            </form>
        )
    }
}
 