const mongoose = require('mongoose');

// Connection <Membuat koneksi ke database 'thapamongoose'>
mongoose.connect('mongodb://localhost:27017/thapamongoose', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("conection successfully..."))
  .catch((err) => console.log(err));

// Schema <Membuat struktur document/data>
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now
  }
})

// Model <Membuat model 'Playlist' sekaligus collection 'playlists'>
const Playlist = new mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
