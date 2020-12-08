import React, {Component} from 'react';

import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);

        this.buttons = [
            {id: 'all', label: 'Все'},
            {id: 'like', label: 'Понравилось'}
        ]
    }
    
    render() {
        const {onDisplayPostChange, display} = this.props

        const button = this.buttons.map(({id, label}) => {
            const clazz = display === id ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button 
                    id={id}
                    key={id}
                    type='button' 
                    className={`btn ${clazz}`}
                    onClick={() => onDisplayPostChange(id)}
                >{label}</button>
            )
        })

        return (
            <div className="btn-group">
                {button}
            </div>
        )
    }
} 
