const Playlist = require("./app");

// Update 1 data
// cara 1:
/* 
const updateDocument = async (id) => {
  try {
    const result = await Playlist.updateOne({ _id: id }, {
      $set: {
        name: "Javascript"
      }
    });

    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Ubah data sekarang
updateDocument("615478b60a327ade2ab4cfc1")
 */

// cara 2:
/* 
const updateDocument = async (id) => {
  try {
    const result = await Playlist.findByIdAndUpdate({ _id: id }, {
      $set: {
        name: "Javascript Modern"
      }
    });

    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Ubah data sekarang
updateDocument("615478b60a327ade2ab4cfc1") 
*/

// cara 3:
const updateDocument = async (id) => {
  try {
    const result = await Playlist.findByIdAndUpdate({ _id: id }, {
      $set: {
        name: "Javascript Modern ES6"
      }
    }, {
      useFindAndModify: true
    });

    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Ubah data sekarang
updateDocument("615478b60a327ade2ab4cfc1")