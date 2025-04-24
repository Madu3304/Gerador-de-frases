class Musica {
    constructor(data) {
      this.artist = data.artist;
      this.song = data.song;
      this.durationMs = data.duration_ms;
      this.explicit = data.explicit === "True";
      this.year = parseInt(data.year);
      this.popularity = parseFloat(data.popularity);
      this.danceability = parseFloat(data.danceability);
      this.energy = parseFloat(data.energy);
      this.key = parseInt(data.key);
      this.loudness = parseFloat(data.loudness);
      this.mode = parseInt(data.mode);
      this.speechiness = parseFloat(data.speechiness);
      this.acousticness = parseFloat(data.acousticness);
      this.instrumentalness = parseFloat(data.instrumentalness);
      this.liveness = parseFloat(data.liveness);
      this.valence = parseFloat(data.valence);
      this.tempo = parseFloat(data.tempo);
      this.genre = data.genre;
    }
  }
  
//   module.exports = Musica;
  
  export default Musica