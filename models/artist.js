var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema({ //ประกาศschemaใหม่
    artistname: {type: String, index: {unique: true}},
    image: String,
    nationality: String,
    gender: String,
    albums: [
        {
            name: String,
            cover: String
        },
    ],
    songs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Song'
        }
    ],

});

module.exports = mongoose.model('Artist',artistSchema);