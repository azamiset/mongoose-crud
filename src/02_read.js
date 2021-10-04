const Playlist = require("./app")

// Menampilkan semua data

const getDocument = async () => {
  const result = await Playlist.find()
  console.log(result);
}
// Tampilkan Data
getDocument();


// Tampilkan data berdasarkan field 'ctype' yang ditetapkan
/*
const getDocument = async () => {
  const result = await Playlist.find({ ctype: 'Front End' })
  console.log(result);
}
// Tampilkan Data
getDocument();
 */

// Tampilkan data 'name' berdasarkan field 'ctype' yang ditetapkan
/*
const getDocument = async () => {
  const result = await Playlist.find({ ctype: 'Front End' })
    .select({ name: 1 })
  console.log(result);
}
// Tampilkan Data
getDocument();
 */

// Tampilkan data 'name' berdasarkan field 'ctype' dan 'limit' yang ditetapkan
/*
const getDocument = async () => {
  const result = await Playlist.find({ ctype: 'Front End' })
    .select({ name: 1 })
    .limit(1)
  console.log(result);
}
// Tampilkan Data
getDocument();
 */

// Mengunakan Try Catch
/*
const getDocument = async () => {
  try {
    const result = await Playlist.find({ ctype: 'Front End' })
      .select({ name: 1 })
      .limit(1)
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Tampilkan Data
getDocument();
*/