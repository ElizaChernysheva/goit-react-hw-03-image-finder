import {InfinitySpin}  from 'react-loader-spinner';
import css from './Loader.module.css'


const Loader = () => {
  return (
    <div className={css.Loader}>
      <InfinitySpin
        width='200'
        height='100'
        color="#3f51b5"
      />
    </div>
  );
};

export default Loader;
