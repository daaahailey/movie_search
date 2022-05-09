import Image from 'next/image'
import { useRouter } from 'next/router';
import styled from "@emotion/styled";

export const PopularMovieCard = (movieItems : any) => {

    const { original_title, release_date, poster_path, id} = movieItems.movieItems;
    const orderedDate = release_date.split("-").reverse().join("-");
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    const router = useRouter();
    const movie = movieItems.movieItems;
    // console.log(movieItems)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push({pathname: `movie/${id}`})
    }

    return (
        <PopularMovieCardItem  onClick={handleClick}>
            {/* <h2>Popular Now</h2> */}
            {/* {console.log(movie)} */}
            { movie["poster_path"] === null ? <Image src="/images/movie_fallback.png" alt={`${movie.title}`} width={200} height={300} />
            : <Image src={`${BASE_URL}${poster_path}`} alt={`${movie.title}`} width={200} height={300}/> } 
            {/* <h3>{original_title}</h3>
            <p>{orderedDate}</p> */}
        </PopularMovieCardItem>
    )
}

const PopularMovieCardItem = styled.article`
    height: 100%;
    // height: 320px;
    // width: 11rem;
    // height: 16rem;
    // padding: 0.5rem;
`