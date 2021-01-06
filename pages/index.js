import React from 'react'
import Sidemenu from '../components/sidemenu'
import Carousel from '../components/carousel'
import MovieList from '../components/MovieList'
import { useState, useEffect } from 'react'
import { GetMovies, GetCategories } from '../actions/index'


const Home = (props) => {
  const { images, categories } = props
  return (
    <div>      
      <div className='home-page'>
        <div className="container">
          <div className="row">
            <Sidemenu
            categories={categories}
             appName={"Movie DB"}/>
            <div className="col-lg-9">
              <Carousel 
              images={images} />
              <div className="row">
                <MovieList 
                key= {props}
                movies={props.movies || []}  />
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )

}

[{id: 'image-1', image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'}]
Home.getInitialProps = async () => {
      const movies = await GetMovies()
      const categories = await GetCategories()
      const images = movies.map(movie => ({
          id: `image-${movie.id}`,
          url: movie.image,
          name: movie.name }))
    return {
      movies,
      images,
      categories
    }
  }


// class Home extends React.Component {

//   static async getInitialProps(){
//     const movies = await GetMovies()
//     return {
//       movies: movies
//     }
//   }
//   // constructor(props){
//   //   super(props)
//   //   this.state ={
//   //     movies:[],
//   //     errorMessage: ''
//   //   }
//   // }
//   // state = {
//   //   movies: []
//   // }
//   // Is called only on a client browser
//   // componentDidMount() {
//   //   GetMovies().then((movies) => {
//   //   this.setState({movies})
//   //   })
//   //   .catch((error) => {
//   //     this.setState({errorMessage: error})
//   //   })
//   // }

//   render(){
//     const { movies, errorMessage } = this.props
//     return (
//       <div>
//         <Head>
//           <title>Home</title>
//           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
//           <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
//           <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//           <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//         </Head>
//         <Navbar />
//         <div className='home-page'>
//           <div className="container">
//             <div className="row">
//               <Sidemenu
//                appName={"Movie DB"}/>
//               <div className="col-lg-9">
//                 <Carousel />
//                 <div className="row">

//                   <MovieList movies={movies} />
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
//         <Footer />
//         <style jsx>{`
//       .home-page {
//         padding-top: 80px;
//       }
//   `}</style>
//       </div>
//     )
//   }

// }

export default Home;