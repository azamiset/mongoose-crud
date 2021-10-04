const Playlist = require("./app");

// DELETE 1:
/* 
const deleteDocument = async (id) => {
  try {
    const result = await Playlist.deleteOne({ _id: id })
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
deleteDocument('615478b60a327ade2ab4cfc1')
 */

// DELETE 2:
const deleteDocument = async (id) => {
  try {
    const result = await Playlist.findByIdAndDelete({ _id: id });
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Hapus data berdasarkan _id
deleteDocument("61571b89df626b3838f41b49")