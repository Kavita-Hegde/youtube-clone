import React from 'react';

import { Paper, TextField } from '@material-ui/core';
import youtubelogo from './youtube-logo.png';
import SignInAndSignOut from './Sign-in-and-sign-out.component';

class SearchBar extends React.Component {
    state = {
        searchTerm : ''
    }



    handleChange = (event) => this.setState({searchTerm: event.target.value})

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();
    }


    render(){
        return(
            <div>
                <Paper elevation={6} style={{padding: '25px', display:'flex'}}>
                    <img src={youtubelogo} alt="youtube" style={{height:'80px', width:"80px",marginRight:'20px'}}/>
                    <form onSubmit={this.handleSubmit} style={{marginRight:'20px', justifyContent:'flex-end'}} >
                        <TextField style={{width: '50vw'}} label='Search...'
                            onChange={this.handleChange}/>
                    </form>
                    <SignInAndSignOut />
                </Paper>
            </div>
        )
    }

}

export default SearchBar;