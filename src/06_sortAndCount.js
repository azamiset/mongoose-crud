const Playlist = require("./app");

// Menghitung jumlah document 'countDocuments'
/* 
const getDocument = async () => {
  try {
    const result = await Playlist
      .find({
        $and: [
          { ctype: "Back End" },
          { author: "Wandy Azami" } // case sensitive
        ]
      })
      .countDocuments()
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Tampilkan Data
getDocument();
 */


// Mengurutkan document 'sort'
/* 
const getDocument = async () => {
  try {
    const result = await Playlist
      .find({
        $and: [
          { ctype: "Back End" },
          { author: "Wandy Azami" } // case sensitive
        ]
      })
      .select({ name: true }) // 'true' : tampilkan nama saja;
      .sort()
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Tampilkan Data
getDocument();
 */

// Mengurutkan document 'sort' urutkan berdasarkan nama
const getDocument = async () => {
  try {
    const result = await Playlist
      .find({
        $and: [
          { ctype: "Back End" },
          { author: "Wandy Azami" } // case sensitive
        ]
      })
      .select({ name: true }) // 'true' : tampilkan nama saja; 'false': tampilkan selain nama;
      .sort({ name: -1 }) // '1': urutkan ASC; '-1': urutkan DESC;
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Tampilkan Data
getDocument();