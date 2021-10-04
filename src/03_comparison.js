const Playlist = require("./app");

// Mencari data tanpa operator 'comparison/perbandingan'
/* 
const getDocument = async () => {
  try {
    const result = await Playlist
      .find({ videos: 50 })
      .select({ name: true })
    // .limit(1)
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Tampilkan Data
getDocument();
 */

// Mencari data dengan operator 'comparison/perbandingan'
/* 
// cara 1: lebih besar {$gt}
const getDocument = async () => {
  try {
    const result = await Playlist
      .find({ videos: { $gt: 50 } })
      .select({ name: true })
    // .limit(1)
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Tampilkan Data
getDocument();
 */

// cara 2: lebih besar atau sama dengan {$gte}
/* 
const getDocument = async () => {
  try {
    const result = await Playlist
      .find({ videos: { $gte: 50 } })
      .select({ name: true })
    // .limit(1)
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Tampilkan Data
getDocument();
 */

// cara 3: lebih kecil atau sama dengan {$lte}
/* 
const getDocument = async () => {
  try {
    const result = await Playlist
      .find({ videos: { $lte: 50 } })
      .select({ name: true })
    // .limit(1)
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Tampilkan Data
getDocument();
 */

// cara 4: in Array {$in}
const getDocument = async () => {
  try {
    const result = await Playlist
      .find({ ctype: { $in: ["Back End", "Database"] } })
      .select({ name: false })
    // .limit(1)
    console.log(result);

  } catch (err) {
    console.log(err);
  }
}
// Tampilkan Data
getDocument();
