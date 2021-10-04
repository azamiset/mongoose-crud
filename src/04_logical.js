const Playlist = require("./app");

// Query menggunakan operator logical {$or}
/* 
const getDocument = async () => {
  try {
    const result = await Playlist
      .find({
        $or: [
          { ctype: "Back End" },
          { author: "wandy azami" }
        ]
      })
      .select({ name: false })
    // .limit(1)
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Tampilkan Data
getDocument();
 */

// Query menggunakan operator logical {$and}
const getDocument = async () => {
  try {
    const result = await Playlist
      .find({
        $and: [
          { ctype: "Back End" },
          { author: "Wandy Azami" } // case sensitive
        ]
      })
      .select({ name: false })
    // .limit(1)
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Tampilkan Data
getDocument();