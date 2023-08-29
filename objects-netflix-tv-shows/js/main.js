//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTVShow{
    constructor(showTitle, showGenre, showRating, numOfEpisodes){
        this.title= showTitle
        this.genre =showGenre
        this.rating = showRating
        this.episodes = numOfEpisodes
    }

    play(){
        aler('Playing')
    }

    pause(){
        alert('Pausing')
    }

    skipIntro(){
        console.log('Skips')
    }

}

let Wednesday = new NetflixTVShow ('Wednesday','thriller','PG-16', '10')