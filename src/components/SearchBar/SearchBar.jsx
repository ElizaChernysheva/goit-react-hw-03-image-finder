import React,{Component} from 'react';
import css from './SearchBar.module.css'
import PropTypes from 'prop-types';

class SearchBar extends Component{
  state = {
    input: '',
  }

  handleOnChange = (event) => {
    const {value,name} = event.target
    this.setState({[name]:value})
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.input)
  }

  render() {
    return(
      <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={this.handleOnSubmit}>
        <button className={css.SearchFormButton} type='submit' >
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
        <input className={css.SearchFormInput}
               type='text'
               name="input"
               autoFocus
               required
               placeholder='Search images and photos'
               onInput={this.handleOnChange}
               value={this.state.input}
        />
      </form>
      </header>
    )
  }
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchBar;
