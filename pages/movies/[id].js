
import Router, { useRouter } from 'next/router'
import { getMovieById } from '../../actions/index'


const Movie = (props) => {

    const router = useRouter()
    const { id } = router.query
    const { movie } = props

    return (
        <div className="Container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4"> {movie.name} </h1>
                    <p className="lead"> {movie.description} </p>
                </div>
            </div>
            <p></p>
        </div>
    )
}

Movie.getInitialProps = async ({query}) => {
    
    const movie = await getMovieById(query.id)

    return {movie}
}



export default Movie;

