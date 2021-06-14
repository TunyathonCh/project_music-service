var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({ //ประกาศschemaใหม่
    artistid: mongoose.Schema.Types.ObjectId,
    songname: String,
    lyrics: String,
    albumname: String,


});

module.exports = mongoose.model('Song',songSchema);
