import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import PostList from '../post-list';
import PostAddForm from '../post-add-form'

import "./app.css";


export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data : [
                {label: 'How much money?', important: true, like: false, id: 1},
                {label: 'What do you do', important: false, like: false, id: 2},
                {label: 'What is your name?', important: false, like: false, id: 3}
            ],
            term: '',
            display: 'all'
        }

        this.delItem = this.delItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.displayPost = this.displayPost.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onDisplayPostChange = this.onDisplayPostChange.bind(this);

        this.index = 4;
    }

    delItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newData = [...data.slice(0, index), ...data.slice(index + 1)]

            return {
                data: newData
            }
        })
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: this.index++
        }

        this.setState(({data}) => {    
            const newData = [...data, newItem]

            return {
                data: newData
            }
        })
    }

    onLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    onImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    displayPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }


    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onDisplayPostChange(display) {
        this.setState({display})
    }

    render() {
        const {data, term, display} = this.state;

        const amountPosts = data.length;
        const likePosts = data.filter(i => i.like).length;

        const visiblePost = this.displayPost(this.searchPost(data, term), display);

        return (
            <div className="app">
                <AppHeader 
                    amountPosts = {amountPosts}
                    likePosts = {likePosts}
                />
                <SearchPanel 
                    onUpdateSearch = {this.onUpdateSearch}
                    onDisplayPostChange = {this.onDisplayPostChange}   
                    display = {display}
                />
                <PostList 
                    posts = {visiblePost} 
                    delItem = {this.delItem} 
                    onLike = {this.onLike}
                    onImportant = {this.onImportant}
                    />
                <PostAddForm 
                    addItem = {this.addItem} 
                    />
            </div>
        )
    }
}