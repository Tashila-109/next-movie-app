import Modal from './Modal';
import MovieCreateForm from './MovieCreateForm';
import {createMovie} from '../actions';

const SideMenu = props => {
  const {categories} = props;

  const handleCreateMovie = movie => {
    createMovie(movie).then(movies => {
      // Close modal after create
      console.log(JSON.stringify(movies));
    });
  };

  return (
    <div>
      <Modal hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className='my-4'>{props.appName}</h1>
      <div className='list-group'>
        {categories.map(c => (
          <a key={c.id} href='#' className='list-group-item'>
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
