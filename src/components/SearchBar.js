import React from 'react';

class SearchBar extends React.Component {
    state = { term : ''};
    // onInputChange(event) {
    //     console.log(event.target.value);

    // }
    // onInputClick() {
    //     console.log('input was clicked')
    // }


    // onFormSubmit = (event) => {
    onFormSubmit (event) {

        event.preventDefault();

        console.log(this.state.term);   
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
             <div className = 'ui segment'>
                 <form onSubmit={(event) => this.onFormSubmit(event)} className='ui form'>
                     <div className='field'>
                        <label>Image Search</label>
                        {/* <input type='text' onChange={this.onInputChange} onClick={this.onInputClick}/> */}
                        {/* <input type='text' onChange={ (event) => console.log(event.target.value)} /> */}
                        {/* <input type='text' onChange={this.onInputChange} /> */}
                        {/* <input type='text' onChange={e => this.setState({term: e.target.value.toUpperCase()})} /> */}
                        <input type='text' onChange={e => this.setState({term: e.target.value})} />



                     </div>

                 </form>

             </div>
        )
    }
}

export default SearchBar;