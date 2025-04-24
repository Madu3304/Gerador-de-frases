import Musica from "../Views/Models/Musicas.js"

import fetch from 'node-fetch'

const API_URL = 'https://guilhermeonrails.github.io/api-csharp-songs/songs.json'

const getMusica = async (req, res) => {
  const { artist } = req.params

  try {
    const response = await fetch(API_URL)
    const data = await response.json()

    console.log(data)

    const songs = data.filter(song => song.artist.toLowerCase().includes(artist.toLowerCase()))

    if (songs.length === 0) {
      return res.status(404).json({ message: `Nenhuma música encontrada para o artista: ${artist}` })
    }

    const musicas = songs.map(songData => new Musica(songData))

    res.json(musicas)
  } catch (error) {
    console.error('Erro ao buscar músicas:', error)
    res.status(500).json({ message: 'Erro ao buscar músicas.' })
  }
}

export { getMusica }