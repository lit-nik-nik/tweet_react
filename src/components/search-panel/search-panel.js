import React, {Component} from 'react';

import PostStatusFilter from '../post-status-filter';

import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;

        this.setState({term})

        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <div className="search-panel d-flex">
                <input 
                    className="form-control search-input"
                    type="text" 
                    placeholder="Поиск по записям" 
                    onChange={this.onUpdateSearch}
                />
                <PostStatusFilter
                    onDisplayPostChange={this.props.onDisplayPostChange}
                    display={this.props.display}
                />
            </div>
        )
    }
    
}
