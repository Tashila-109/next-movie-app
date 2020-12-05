import SideMenu from '../components/SideMenu';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';

import {getMovies, getCategories} from '../actions';

const Home = props => {
  const {images, categories, movies} = props;
  return (
    <div>
      <div className='home-page'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <SideMenu categories={categories} appName={'Movie DB'} />
            </div>
            <div className='col-lg-9'>
              <Carousel images={images} />
              <div className='row'>
                <MovieList movies={movies || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map(movie => ({
    id: `image-${movie.id}`,
    url: movie.cover,
    name: movie.name,
  }));
  return {
    movies,
    images,
    categories,
  };
};

export default Home;
