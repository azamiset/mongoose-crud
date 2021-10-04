const mongoose = require('mongoose');
const validator = require('validator');

// Connection <Membuat koneksi ke database 'thapamongoose'>
mongoose.connect('mongodb://localhost:27017/thapamongoose', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("conection successfully..."))
  .catch((err) => console.log(err));

// Schema - Mengunakan library validator
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
    minlength: [5, 'Jumlah minimal name adalah 5 karakter'],
    maxlength: [255, 'Jumlah maximal name adlah 255 karakter']
  },
  ctype: {
    type: String,
    required: true,
    enum: ['frontend', 'backend', 'database'],
    trim: true,
    lowercase: true
  },
  videos: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Jumlah vidoeo tidak boleh negatif')
      }
    }
  },
  author: {
    type: String,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Alamat email anda tidak valid');
      }
    }
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now
  }
})

// Model <Membuat model 'Playlist' sekaligus collection 'playlists'>
const Playlist = new mongoose.model('Playlist', playlistSchema);

const createDocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: '      my sql     ',
      ctype: 'DataBase',
      email: 'aku',
      videos: 50,
      author: 'Wandy Azami',
    });

    const result = await reactPlaylist.save();
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Store <Simpan data sekarang>
createDocument();

