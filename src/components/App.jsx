import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar'
import Modal from './Modal/Modal'
import ImageGallery from './ImageGallery/ImageGallery'
import fetchImgsData from '../servises/photoService'
import css from './App.module.css'
import Button from './Button/Button';
import Loader from './Loader/Loader';

class App  extends Component{
  state ={
    input: '',
    page: 1,
    images:[],
    modalContent:{},
    isModalOpen:false,
    loading:false,
    error:null,
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, input } = this.state;

    if (page !== prevState.page || input !== prevState.input) {
      this.fetchImages();
    }
  }

  handleOnSubmit = (inputValue) =>{
    if(this.state.input !== inputValue){
      this.setState({
        input:inputValue,
        images: [],
        page: 1,
      })
    }
  }

  async fetchImages()  {
    const {input,page} = this.state
    this.setState({loading:true})

    try{
      const data = await fetchImgsData(input,page);

      this.setState(({ images }) => {
        return {images: [...images, ...data.hits]}
      })
    }catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({ loading: false });
    }
}

  modalOpen = (largeImage,alt) =>{
  this.setState({
      isModalOpen:true,
      modalContent:{largeImage,alt}
    })
  }

  modalClose = () =>{
    this.setState({isModalOpen:false})
  }

  addPictures = () =>{
    this.setState(prevState =>{
      return {page:prevState.page + 1 }
    })
  }

  render() {
    const {isModalOpen,modalContent,images,loading,error} = this.state;
    return (
      <>
        <div className={css.App}>
          {isModalOpen && <Modal modalClose={this.modalClose}>
            <img src={modalContent.largeImage} alt={modalContent.alt} />
          </Modal>}
          <SearchBar onSubmit={this.handleOnSubmit} />
          <ImageGallery images={images} modalOpen={this.modalOpen}/>
          {loading && <Loader/>}
        </div>
        {error && <p className={css.error}>Something went wrong: try again...</p>}
        {images.length > 0 && <Button addPictures={this.addPictures}/>}
      </>
    );
  }

};

export default App;
