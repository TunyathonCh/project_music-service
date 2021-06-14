var express = require("express");
    app = express(),
    multer = require('multer');
    path = require('path');
    storage = multer.diskStorage({
            destination: function(req, file, callback){
                callback(null,'./public/uploads/');
            },
            filename: function(req,file,callback){
                callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
            }
            
    }),
    imageFilter = function(req,file,callback){
        if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)){
            return callback(new Error('Only JPG, jpeg, PNG and GIF image files are allowed!'),false);
        }
        callback(null,true);
    },
    lyricsFilter = function(req,file,callback){
        if(!file.originalname.match(/\.(txt)$/i)){
            return callback(new Error('Only TXT lyrics files are allowed!'),false);
        }
        callback(null,true);
    },
    albumcoverFilter = function(req,file,callback){
        if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)){
            return callback(new Error('Only JPG, jpeg, PNG and GIF image files are allowed!'),false);
        }
        callback(null,true);
    },
    upload = multer({storage: storage, fileFilter: imageFilter}),
    uploadTxt = multer({storage: storage, fileFilter: lyricsFilter}),
    uploadCover = multer({storage: storage, fileFilter: albumcoverFilter}),
    bodyParser = require('body-parser'),
    LocalStrategy = require('passport-local');
var mongoose = require("mongoose");

const passport = require("passport");
const { aggregate } = require("./models/artist");
    mongoose.connect("mongodb://localhost/music");
    Artist = require('./models/artist'),
    Song = require('./models/song'),
    User = require('./models/user'),
    seedDB = require('./seeds');

app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));
seedDB();

app.use(require('express-session')({
    secret: 'secret is always secret.',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});




app.get('/', function(req, res){   //หน้าโฮม
    res.render('home.ejs');
});

app.get('/home', function(req, res){ 
    res.render('home.ejs');
});


app.get('/login', function(req, res){   
    res.render('logIn.ejs');
});

app.post('/login', passport.authenticate('local',
    {
        // successRedirect: '/main',
        failureRedirect: '/login'
    }), function(req,res){
        if(req.user.role==='admin'){
            res.redirect('/foradmin');
        }else{
            res.redirect('/main');
        }
        // console.log('res',req.user);
});

app.get('/signup', function(req, res){   
    res.render('signUp.ejs');
});

app.post('/signup', function(req,res){
    var newUser = new User({username: req.body.username,role:"customer"});
    User.register(newUser, req.body.password, function(err,user){
        if(err){
            console.log(err);
            return res.render('signup');
        }
        passport.authenticate('local')(req, res, function(){
            res.redirect('/main');
        });
    });
});

app.get('/logout', function(req,res){
    req.logout();
    res.redirect('/home');
});

function isLoggedIn(req,res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

app.get('/main', function(req, res){   
    res.render('main.ejs');
});

app.get('/foradmin',isLoggedIn , function(req, res){   
    Artist.find({}, function(err, allArtists){
        if(err){
            console.log(err);
        }else{
            if(req.user.role==='admin'){
                res.render('foradmin.ejs', {artists:allArtists,jsonArtists:JSON.stringify(allArtists)});
            }else{
                res.render('logIn.ejs');
            }
            
        }
    })
});

app.post('/foradmin',upload.single('image'), function(req,res){
    req.body.image = '/uploads/' + req.file.filename;
    // console.log('----- foradmin: ', req.file)
    var newArtist = new Artist({artistname: req.body.artistname,image: req.body.image,nationality: req.body.nationality,gender: req.body.gender});
    Artist.create(newArtist, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            Artist.init() 
            res.redirect('/foradmin'); 
        }
    });
});

app.post('/foradminsong',uploadTxt.single('lyrics'), function(req,res) {
    // console.log('----- foradminsong: ', req.file)
    req.body.lyrics = '/uploads/' + req.file.filename;

    var newSong = new Song({artistid: req.body.artistid, songname: req.body.songname, lyrics: req.body.lyrics, albumname: req.body.albumname})
    Song.create(newSong, function(err, ssss){
        if(err){
            console.log(err);
        }else{
            
            Artist.updateOne({_id: ssss.artistid}, {"$push": {songs: ssss}}, function(err) {
                if (err) {
                    console.log('\n\n debugging 1', err,'\n\n')
                } else {
                    res.redirect('/foradmin'); 
                }
            })
        }
    });
    
})

app.post('/foradminalbum',uploadCover.single('albumcover'), function(req,res) {

    req.body.albumcover = '/uploads/' + req.file.filename;

    var newAlbum = {name: req.body.albumname, cover: req.body.albumcover}

    Artist.updateOne({_id: req.body.artistid}, {"$push": {albums: newAlbum}}, function(err) {
        if (err) {
            console.log('\n\n debugging 1', err,'\n\n')
        } else {
            res.redirect('/foradmin'); 
        }
    })

})

app.post('/searchsong', function(req, res) {
    Artist.find({'artistname': { $regex: `.*${req.body.searchtxt}.*` } }, function(err,relatedartists) { //.*คลุมข้างหน้สข้างหลัง คือlike
        if (err) {
            console.log('\n\n debugging 1', err,'\n\n')
            
        } else {
            Artist.find({'albums.name': { $regex: `.*${req.body.searchtxt}.*` } }, function(err,relatedalbumsartists) {
                if (err) {
                    console.log('\n\n debugging 1', err,'\n\n')
                    
                } else {
                    relatedalbumsartists = relatedalbumsartists.map((artist)=>{
                        var albums = artist.albums.filter((album)=>album.name.includes(req.body.searchtxt))
                        return {
                            artistname:artist.artistname,
                            _id:artist._id,
                            albums:albums
                        }
                    })
                    console.log("testtt222",relatedalbumsartists);
                    Song.find({'songname': { $regex: `.*${req.body.searchtxt}.*` } },function(err,relatedsongs) {
                        if (err) {
                            console.log('\n\n debugging 1', err,'\n\n')
                            
                        } else {
                            
                            var artistids = relatedsongs.map((song)=>song.artistid); //อันนี้แค่return idออกมา
                            // console.log("helllll",artistids);
                            Artist.find({_id:{$in:artistids}},function(err,artistsbysong){ //ตรงนี้ได้ข้อมูล artists จากดาต้าเบส ที่ตรงกับ idใน artistid ในrelatedsongs 
                                if(err){

                                }else{
                                    relatedsongs = relatedsongs.map((song)=>{
                                        
                                        var artist = artistsbysong.find((a)=>a._id.equals(song.artistid)) //ตรงนี้หาartistที่เป็นเจ้าของเพลง
                                        return {
                                            artistid: song.artistid,
                                            songname: song.songname,
                                            albumname: song.albumname,
                                            artistname: artist&&artist.artistname,
                                            _id:song._id
                                        }
                                    })
                                    res.render('searchresult.ejs',{artists:relatedartists,albumsartists:relatedalbumsartists,songs:relatedsongs});
                                }
                            })
                             
                        }});
                }});
    
        }
    })
})




app.get('/artists', function(req, res){  
    // console.log('\n',{nationality: req.query.nationality,gender:req.query.gender},'\n')
    let query = {}
    if (req.query.nationality) {
        query.nationality = req.query.nationality
    }
    if (req.query.gender) {
        query.gender = req.query.gender
    }
    Artist.find(query, function(err, allArtists){
        if(err){
            console.log(err);
        }else{
            res.render('artists.ejs', {artists:allArtists,nationality:req.query.nationality,gender:req.query.gender});
        }
    })
});

app.post('/artists',function(req,res){
    var artistname = req.body.artistname;
    var image = req.body.image;
    var newArtist = {artistname:artistname, image:image};
    Artist.create(newArtist, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect('/artists'); //อันนี้เป็นroute ไม่ได้อ้างอิงถึงไฟล์
        }
    });
});

app.get('/artists/:id' ,function(req, res){ 
    Artist.findById(req.params.id).populate('songs').exec(function(err,foundArtist){
        if(err){
            console.log(err);
        }else{
            res.render('showsong.ejs',{artist: foundArtist});//artistตัวหน้าคือชื่อตัวแปรที่จะถูกอ้างอิงในอีกไฟล์นึง ตัวหลังคือไฟล์ที่อยู่ในไฟล์ปัจจุบัน
        }
    });
});

app.get('/showsong', function(req, res){   
    Artist.find({}, function(err, allSongs){
        if(err){
            console.log(err);
        }else{
            res.render('showsong.ejs',{songs:allSongs});
        }
    })
});

app.post('/showsong',function(req,res){
    var artistname = req.body.artistname;
    var image = req.body.image;
    var songname = req.body.songname;
    var lyrics = req.body.lyrics;
    var newSong = {artistname:artistname,image:image,songname:songname, lyrics:lyrics};
    Song.create(newSong, function(err, newlyCreatedSong){
        if(err){
            console.log(err);
        }else{
            res.redirect('/showsong'); 
        }
    });
});

//////////////////

app.post('/showlyrics',function(req,res){
    var artistname = req.body.artistname;
    var image = req.body.image;
    var songname = req.body.songname;
    var lyrics = req.body.lyrics;
    var newSong = {artistname:artistname,image:image,songname:songname, lyrics:lyrics};
    Song.create(newSong, function(err, newlyCreatedSong){
        if(err){
            console.log(err);
        }else{
            res.redirect('/showlyrics'); 
        }
    });
});

app.get('/artists/:aid/albums/:albumname' ,function(req, res){ 
    Artist.findById(req.params.aid).populate('songs').exec(function(err,foundArtist){
        if(err){
            console.log(err);
        }else{
            // console.log(foundArtist)
            
            foundArtist.songs = foundArtist.songs.filter((s)=>s.albumname === req.params.albumname)
            foundArtist.album = foundArtist.albums.find((s)=>s.name === req.params.albumname) //.albumname ไม่เกี่ยวกะsong svhema
            res.render('showsongbyalbum.ejs',{artist: foundArtist});
        }
    });
});

app.get('/artists/:aid/songs/:sid' ,function(req, res){ 
    Artist.findById(req.params.aid).populate('songs').exec(function(err,foundArtist){
        if(err){
            console.log(err);
        }else{
            // console.log(foundArtist)
            Song.findById(req.params.sid).populate('songs').exec(function(err,foundSong){
                if(err){
                    console.log(err);
                }else{
                    var fs = require('fs'), 
                    filename = 'public' + foundSong.lyrics;
                    fs.readFile(filename, 'utf-8', function(err, data) {
                        if(err){
                            console.log(err);
                        }else{
                            // console.log('OK: ' + filename);
                            // console.log(data)
                            foundSong.lyricstext = data
                            console.log(foundArtist);
                            console.log(foundSong);
                            foundArtist.album = foundArtist.albums.find((s)=>s.name === foundSong.albumname);
                            res.render('showlyrics.ejs' ,{artist:foundArtist,song: foundSong});
                        }
                    });

                    
                    
                }
            });
        }
    });
});

app.get('/foradmin/userdelete/:id', function(req, res){
    
    User.remove({_id:req.params.id},function(err){
        if(err){

        }else{
            res.redirect('/foradmin/users'); 
        }
    })

})

app.get('/foradmin/users', function(req, res){
    User.find({},function(err,users){
        if(err){
            
        }else{
            res.render('foradminusers.ejs',{users:users});
        }
    })
})




app.get('*', function(req, res){   
    res.send('Please beware your route');
});


app.listen(3000, function(){
    console.log("Server is running.");
});


