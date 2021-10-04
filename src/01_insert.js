const Playlist = require('./app');

// insert document <Memasukan data ke collection 'playlist'>
/* 
// Cara 1: Tanpa function()
const reactPlaylist = new Playlist({
  name: 'React Js',
  ctype: 'Fornt End',
  videos: 80,
  author: 'Thapa Technical',
  active: true
});
// Store <Simpan data sekarang>
reactPlaylist.save(); 
 */

// cara 2: Menggunakan function() untuk 1 data
/* 
const createDocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: 'Node Js',
      ctype: 'Back End',
      videos: 50,
      author: 'Wandy Azami',
      active: true
    });

    const result = await reactPlaylist.save();
    console.log(result);

  } catch (err) {
    console.log(err);
  }
} 
// Store <Simpan data sekarang>
createDocument();
*/

// cara 3: Menggunakan function() untuk banyak data
const createDocument = async () => {
  try {
    const jsPlaylist = new Playlist({
      name: 'Python',
      ctype: 'Back End',
      videos: 16,
      author: 'Wandy Azami',
      active: true
    });
    const mongoPlaylist = new Playlist({
      name: 'Dart',
      ctype: 'Back End',
      videos: 4,
      author: 'Wandy Azami',
      active: true
    });
    const expressPlaylist = new Playlist({
      name: 'Kotlin',
      ctype: 'Back End',
      videos: 12,
      author: 'Wandy Azami',
      active: true
    });

    const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist, expressPlaylist]);
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Store <Simpan data sekarang>
createDocument();