var mongoose = require('mongoose');
var Artist = require('./models/artist');
var Song = require('./models/song');

var data = [
    {
        artistname:'UrboyTJ', 
        image:'/uploads/UrboyTJ.jpg' ,
        nationality:'Thai',
        gender:'Male',
        albums: [
            {
                name: 'Selfmade',
                cover:'/uploads/UrboyTJ-ปกSelfmade.jpg'
            },
            {
                name: 'แบกไม่ไหว',
                cover:'/uploads/UrboyTJ-ปกแบกไม่ไหว.jpg'
            },
        ],
        songs_data:[
            {
                songname: 'ถามคำ',
                lyrics:'/uploads/UrboyTJ-ถามคำ.txt',
                albumname:'Selfmade'
            },
            {
                songname: 'กอดได้ไหม',
                lyrics:'/uploads/UrboyTJ-กอดได้ไหม.txt',
                albumname:'Selfmade'
            },
            {
                songname: 'ช่วยไม่ได้',
                lyrics:'/uploads/UrboyTJ-ช่วยไม่ได้.txt',
                albumname:'Selfmade'
            },
            {
                songname: 'เค้าก่อน',
                lyrics:'/uploads/UrboyTJ-เค้าก่อน.txt',
                albumname:'Selfmade'
            },
            {
                songname: 'แบกไม่ไหว',
                lyrics:'/uploads/UrboyTJ-แบกไม่ไหว.txt',
                albumname:'แบกไม่ไหว'
            },
            {
                songname: 'วายร้าย',
                lyrics:'/uploads/UrboyTJ-วายร้าย.txt',
                albumname:'Selfmade'
            }
        ]
        
        },
    {
        artistname:'ป๊อป ปองกูล' , 
        image:'/uploads/ป๊อป ปองกูล.jpg' ,
        nationality:'Thai',
        gender:'Male',
        albums: [
            {
                name: 'Happy ending',
                cover:'/uploads/ป๊อป ปองกูล-ปกHappy ending.jpg'
            },
            {
                name: 'Undo100x100',
                cover:'/uploads/ป๊อป ปองกูล-ปกUndo100x100.jpg'
            },
        ],
        songs_data:[
            {
                songname: 'Undo',
                lyrics:'/uploads/ป๊อป ปองกูล-Undo.txt',
                albumname:'Undo100x100'
            },
            // {
            //     songname: 'ยิ่งไม่รู้ ยิ่งต้องทำ',
            //     lyrics:'/uploads/ป๊อป ปองกูล-ยิ่งไม่รู้ ยิ่งต้องทำ.txt',
            //     albumname:'Happy ending'
            // },
            {
                songname: 'ภาพจำ',
                lyrics:'/uploads/ป๊อป ปองกูล-ภาพจำ.txt',
                albumname:'Happy ending'
            },
            {
                songname: 'ปล่อย',
                lyrics:'/uploads/ป๊อป ปองกูล-ปล่อย.txt',
                albumname:'Happy ending'
            },
            {
                songname: 'พรุ่งนี้ค่อย...',
                lyrics:'/uploads/ป๊อป ปองกูล-พรุ่งนี้ค่อย....txt',
                albumname:'Happy ending'
            },
            {
                songname: 'ไม่รู้จักฉัน ไม่รู้จักเธอ',
                lyrics:'/uploads/ป๊อป ปองกูล-ไม่รู้จักฉัน ไม่รู้จักเธอ.txt',
                albumname:'Happy ending'
            }
        ]
    },
    {
        artistname:'อะตอม ชนกันต์' , 
        image:'/uploads/อะตอม ชนกันต์.jpg' ,
        nationality:'Thai',
        gender:'Male',
        albums: [
            {
                name: 'Cyantist',
                cover:'/uploads/อะตอม ชนกันต์-ปกCyantist.jpg'
            },
            
        ],
        songs_data:[
            {
                songname: 'ปล่อยปาก',
                lyrics:'/uploads/อะตอม ชนกันต์-ปล่อยปาก.txt',
                albumname:'Cyantist'
            },
            {
                songname: 'PLEASE',
                lyrics:'/uploads/อะตอม ชนกันต์-PLEASE.txt',
                albumname:'Cyantist'
            },
            {
                songname: 'อ้าว',
                lyrics:'/uploads/อะตอม ชนกันต์-อ้าว.txt',
                albumname:'Cyantist'
            },
            {
                songname: 'ทางของฝุ่น',
                lyrics:'/uploads/อะตอม ชนกันต์-ทางของฝุ่น.txt',
                albumname:'Cyantist'
            },
            {
                songname: 'Good Morning Teacher',
                lyrics:'/uploads/อะตอม ชนกันต์-Good Morning Teacher.txt',
                albumname:'Cyantist'
            },
            {
                songname: 'แผลเป็น',
                lyrics:'/uploads/อะตอม ชนกันต์-แผลเป็น.txt',
                albumname:'Cyantist'
            }
        ]
    },
    {
        artistname:'Maiyarap' , 
        image:'/uploads/Maiyarap.jpg' ,
        nationality:'Thai',
        gender:'Male',
        albums: [
            {
                name: 'Popstar',
                cover:'/uploads/Maiyarap-ปกPopstar.jpg'
            },
            
        ],
        songs_data:[
            {
                songname: 'เก็บไว้ในใจไม่พอ',
                lyrics:'/uploads/Maiyarap-เก็บไว้ในใจไม่พอ.txt',
                albumname:'Popstar'
            },
            {
                songname: 'แฟนใหม่หน้าคุ้น',
                lyrics:'/uploads/Maiyarap-แฟนใหม่หน้าคุ้น.txt',
                albumname:'Popstar'
            },
            {
                songname: 'ก่อนเคยเป็น',
                lyrics:'/uploads/Maiyarap-ก่อนเคยเป็น.txt',
                albumname:'Popstar'
            },
            {
                songname: 'ซุปเปอร์ไซย่า',
                lyrics:'/uploads/Maiyarap-ซุปเปอร์ไซย่า.txt',
                albumname:'Popstar'
            },
            {
                songname: 'Fact',
                lyrics:'/uploads/Maiyarap-Fact.txt',
                albumname:'Popstar'
            },
            {
                songname: 'Try To',
                lyrics:'/uploads/Maiyarap-Try To.txt',
                albumname:'Popstar'
            }
        ]
    },
    {
        artistname:'INK WARUNTORN' , 
        image:'/uploads/INK WARUNTORN.jpg' ,
        nationality:'Thai',
        gender:'Female',
        albums: [
            {
                name: 'สายตา',
                cover:'/uploads/INK WARUNTORN-ปก.jpg'
            },
            
        ],
        songs_data:[
            {
                songname: 'สายตาหลอกกันไม่ได้',
                lyrics:'/uploads/INK WARUNTORN-สายตาหลอกกันไม่ได้.txt',
                albumname:'สายตา'
            },
            {
                songname: 'ลบไม่ได้ช่วยให้ลืม',
                lyrics:'/uploads/INK WARUNTORN-ลบไม่ได้ช่วยให้ลืม.txt',
                albumname:'สายตา'
            },
            {
                songname: 'อยากเริ่มต้นใหม่กับคนเดิม',
                lyrics:'/uploads/INK WARUNTORN-อยากเริ่มต้นใหม่กับคนเดิม.txt',
                albumname:'สายตา'
            },
            {
                songname: 'เผลอหรือตั้งใจ',
                lyrics:'/uploads/INK WARUNTORN-เผลอหรือตั้งใจ.txt',
                albumname:'สายตา'
            },
            {
                songname: 'ดีใจด้วยนะ',
                lyrics:'/uploads/INK WARUNTORN-ดีใจด้วยนะ.txt',
                albumname:'สายตา'
            },
            {
                songname: 'เกี่ยวกันไหม',
                lyrics:'/uploads/INK WARUNTORN-เกี่ยวกันไหม.txt',
                albumname:'สายตา'
            }
        ]
    },
    {
        artistname:'ดา เอ็นโดรฟิน' , 
        image:'/uploads/ดา เอ็นโดรฟิน.jpg' ,
        nationality:'Thai',
        gender:'Female',
        albums: [
            {
                name: 'สองใจ',
                cover:'/uploads/ดา เอ็นโดรฟิน-ปกสองใจ.jpg'
            },
            {
                name: 'เธอมีฉัน ฉันมีใคร',
                cover:'/uploads/ดา เอ็นโดรฟิน-ปก2.jpg'
            },
        ],
        songs_data:[
            {
                songname: 'สองใจ',
                lyrics:'/uploads/ดา เอ็นโดรฟิน-สองใจ.txt',
                albumname:'สองใจ'
            },
            {
                songname: 'เธอมีฉัน ฉันมีใคร',
                lyrics:'/uploads/ดา เอ็นโดรฟิน-เธอมีฉัน ฉันมีใคร.txt',
                albumname:'เธอมีฉัน ฉันมีใคร'
            },
            {
                songname: 'ยิ่งรู้จักยิ่งรักเธอ',
                lyrics:'/uploads/ดา เอ็นโดรฟิน-ยิ่งรู้จักยิ่งรักเธอ.txt',
                albumname:'เธอมีฉัน ฉันมีใคร'
            },
            {
                songname: 'ครั้งหนึ่ง...เราเคยรักกัน',
                lyrics:'/uploads/ดา เอ็นโดรฟิน-ครั้งหนึ่ง...เราเคยรักกัน.txt',
                albumname:'เธอมีฉัน ฉันมีใคร'
            },
            {
                songname: 'เขียนในใจ ร้องในเพลง',
                lyrics:'/uploads/ดา เอ็นโดรฟิน-เขียนในใจ ร้องในเพลง.txt',
                albumname:'เธอมีฉัน ฉันมีใคร'
            },
            {
                songname: 'ภาพลวงตา',
                lyrics:'/uploads/ดา เอ็นโดรฟิน-ภาพลวงตา.txt',
                albumname:'เธอมีฉัน ฉันมีใคร'
            }
        ]
    },
    {
        artistname:'BOWKYLION' , 
        image:'/uploads/BOWKYLION.jpg' ,
        nationality:'Thai',
        gender:'Female',
        albums: [
            {
                name: 'ซับ',
                cover:'/uploads/BOWKYLION-ปกซับ.jpg'
            },
            {
                name: 'crush',
                cover:'/uploads/BOWKYLION-ปกcrush.jpg'
            },
        ],
        songs_data:[
            {
                songname: 'ซับ',
                lyrics:'/uploads/BOWKYLION-ซับ.txt',
                albumname:'ซับ'
            },
            {
                songname: 'ลงใจ',
                lyrics:'/uploads/BOWKYLION-ลงใจ.txt',
                albumname:'crush'
            },
            {
                songname: 'ยิ้มมา',
                lyrics:'/uploads/BOWKYLION-ยิ้มมา.txt',
                albumname:'crush'
            },
            {
                songname: 'คิดถึงแต่',
                lyrics:'/uploads/BOWKYLION-คิดถึงแต่.txt',
                albumname:'crush'
            },
            {
                songname: 'คงคา',
                lyrics:'/uploads/BOWKYLION-คงคา.txt',
                albumname:'crush'
            },
            {
                songname: 'ไปหาทำ',
                lyrics:'/uploads/BOWKYLION-ไปหาทำ.txt',
                albumname:'crush'
            }
        ]
    },
    {
        artistname:'Palmy' , 
        image:'/uploads/Palmy.jpg' ,
        nationality:'Thai',
        gender:'Female',
        albums: [
            {
                name: 'ขวัญเอยขวัญมา',
                cover:'/uploads/Palmy-ปกขวัญเอยขวัญมา.jpg'
            },
            {
                name: 'ซ่อนกลิ่น',
                cover:'/uploads/Palmy-ปก2.jpg'
            },
        ],
        songs_data:[
            {
                songname: 'ขวัญเอยขวัญมา',
                lyrics:'/uploads/Palmy-ขวัญเอยขวัญมา.txt',
                albumname:'ขวัญเอยขวัญมา'
            },
            {
                songname: 'ซ่อนกลิ่น',
                lyrics:'/uploads/Palmy-ซ่อนกลิ่น.txt',
                albumname:'ซ่อนกลิ่น'
            },
            {
                songname: 'คิดมาก',
                lyrics:'/uploads/Palmy-คิดมาก.txt',
                albumname:'ซ่อนกลิ่น'
            },
            {
                songname: 'ดวงใจ',
                lyrics:'/uploads/Palmy-ดวงใจ.txt',
                albumname:'ขวัญเอยขวัญมา'
            },
            {
                songname: 'คิดถึง',
                lyrics:'/uploads/Palmy-คิดถึง.txt',
                albumname:'ขวัญเอยขวัญมา'
            },
            {
                songname: 'ทบทวน',
                lyrics:'/uploads/Palmy-ทบทวน.txt',
                albumname:'ซ่อนกลิ่น'
            }
        ]
    },
    
    {
        artistname:'Justin Bieber', 
        image:'/uploads/Justin Bieber.jpg' ,
        nationality:"Int'l",
        gender:'Male',
        albums: [
            {
                name: 'Believe',
                cover:'/uploads/Justin Bieber-ปกBelieve.jpg'
            },
            {
                name: 'Justice',
                cover:'/uploads/Justin Bieber-ปกJustice.jpg'
            },
        ],
        songs_data:[
            {
                songname: 'Peaches',
                lyrics:'/uploads/Justin Bieber-Peaches.txt',
                albumname:'Justice'
            },
            {
                songname: 'Mistletoe',
                lyrics:'/uploads/Justin Bieber-Mistletoe.txt',
                albumname:'Believe'
            },
            {
                songname: 'Anyone',
                lyrics:'/uploads/Justin Bieber-Anyone.txt',
                albumname:'Justice'
            },
            {
                songname: 'Intentions',
                lyrics:'/uploads/Justin Bieber-Intentions.txt',
                albumname:'Justice'
            },
            {
                songname: 'Be Alright',
                lyrics:'/uploads/Justin Bieber-Be Alright.txt',
                albumname:'Believe'
            },
            {
                songname: 'Hold On',
                lyrics:'/uploads/Justin Bieber-Hold On.txt',
                albumname:'Justice'
            },
        ]
        
        },
    {
        artistname:'Shawn Mendes', 
        image:'/uploads/Shawn Mendes.jpg' ,
        nationality:"Int'l",
        gender:'Male',
        albums: [
            {
                name: 'Shawn',
                cover:'/uploads/Shawn Mendes-ปกShawn Mendes.jpg'
            },
            {
                name: 'Wonder',
                cover:'/uploads/Shawn Mendes-ปกWonder.jpg'
            },
            
        ],
        songs_data:[
            {
                songname: 'Perfectly Wrong',
                lyrics:'/uploads/Shawn Mendes-Perfectly Wrong.txt',
                albumname:'Wonder'
            },
            {
                songname: 'Treat You Better',
                lyrics:'/uploads/Shawn Mendes-Treat You Better.txt',
                albumname:'Shawn'
            },
            {
                songname: 'Imagination',
                lyrics:'/uploads/Shawn Mendes-Imagination.txt',
                albumname:'Wonder'
            },
            {
                songname: 'In My Blood',
                lyrics:'/uploads/Shawn Mendes-In My Blood.txt',
                albumname:'Wonder'
            },
            {
                songname: 'Stitches',
                lyrics:'/uploads/Shawn Mendes-Stitches.txt',
                albumname:'Shawn'
            },
            {
                songname: 'Where Were You In The Morning?',
                lyrics:'/uploads/Shawn Mendes-Where Were You In The Morning.txt',
                albumname:'Wonder'
            },
        ]
        
        },
    {
        artistname:'Ed Sheeran', 
        image:'/uploads/Ed Sheeran.jpg' ,
        nationality:"Int'l",
        gender:'Male',
        albums: [
            {
                name: 'divide',
                cover:'/uploads/Ed Sheeran-ปกdivide.jpg'
            },
            {
                name: 'X',
                cover:'/uploads/Ed Sheeran-ปกX.jpg'
            },
        ],
        songs_data:[
            {
                songname: 'Perfect',
                lyrics:'/uploads/Ed Sheeran-Perfect.txt',
                albumname:'divide'
            },
            {
                songname: 'Afterglow',
                lyrics:'/uploads/Ed Sheeran-Afterglow.txt',
                albumname:'X'
            },
            {
                songname: 'Galway Girl',
                lyrics:'/uploads/Ed Sheeran-Galway Girl.txt',
                albumname:'divide'
            },
            {
                songname: 'Thinking out Loud',
                lyrics:'/uploads/Ed Sheeran-Thinking out Loud.txt',
                albumname:'X'
            },
            {
                songname: 'Happier',
                lyrics:'/uploads/Ed Sheeran-Happier.txt',
                albumname:'divide'
            },
            {
                songname: 'Supermarket Flowers',
                lyrics:'/uploads/Ed Sheeran-Supermarket Flowers.txt',
                albumname:'divide'
            },
        ]
        
        },
    {
        artistname:'Lewis Capaldi', 
        image:'/uploads/Lewis Capaldi.jpg' ,
        nationality:"Int'l",
        gender:'Male',
        albums: [
            {
                name: 'Divinely Uninspired to a Hellish Extent',
                cover:'/uploads/Lewis Capaldi-ปกDivinely Uninspired to a Hellish Extent.jpg'
            },
            
        ],
        songs_data:[
            {
                songname: 'Someone You Loved',
                lyrics:'/uploads/Lewis Capaldi-Someone You Loved.txt',
                albumname:'Divinely Uninspired to a Hellish Extent'
            },
            {
                songname: 'Before You Go',
                lyrics:'/uploads/Lewis Capaldi-Before You Go.txt',
                albumname:'Divinely Uninspired to a Hellish Extent'
            },
            {
                songname: 'Bruises',
                lyrics:'/uploads/Lewis Capaldi-Bruises.txt',
                albumname:'Divinely Uninspired to a Hellish Extent'
            },
            {
                songname: 'Forever',
                lyrics:'/uploads/Lewis Capaldi-Forever.txt',
                albumname:'Divinely Uninspired to a Hellish Extent'
            },
            
        ]
        
        },
    {
        artistname:'Taylor Swift', 
        image:'/uploads/Taylor Swift.jpg' ,
        nationality:"Int'l",
        gender:'Female',
        albums: [
            {
                name: 'Evermore',
                cover:'/uploads/Taylor Swift-ปกEvermore.jpg'
            },
            
        ],
        songs_data:[
            {
                songname: 'Love story',
                lyrics:'/uploads/Taylor Swift-Love story.txt',
                albumname:'Evermore'
            },
            {
                songname: 'Blank Space',
                lyrics:'/uploads/Taylor Swift-Blank Space.txt',
                albumname:'Evermore'
            },
            {
                songname: 'willow',
                lyrics:'/uploads/Taylor Swift-willow.txt',
                albumname:'Evermore'
            },
            {
                songname: 'Lover',
                lyrics:'/uploads/Taylor Swift-Lover.txt',
                albumname:'Evermore'
            },
            {
                songname: 'cardigan',
                lyrics:'/uploads/Taylor Swift-cardigan.txt',
                albumname:'Evermore'
            },
            {
                songname: 'Delicate',
                lyrics:'/uploads/Taylor Swift-Delicate.txt',
                albumname:'Evermore'
            },
        ]
        
        },
    {
        artistname:'Ariana Grande', 
        image:'/uploads/Ariana Grande.jpg' ,
        nationality:"Int'l",
        gender:'Female',
        albums: [
            {
                name: 'My Everything',
                cover:'/uploads/Ariana Grande-ปกMy Everything.jpg'
            },
            {
                name: 'positions',
                cover:'/uploads/Ariana Grande-ปกpositions.jpg'
            },
        ],
        songs_data:[
            {
                songname: 'pov',
                lyrics:'/uploads/Ariana Grande-pov.txt',
                albumname:'positions'
            },
            {
                songname: 'positions',
                lyrics:'/uploads/Ariana Grande-positions.txt',
                albumname:'positions'
            },
            {
                songname: 'thank u, next',
                lyrics:'/uploads/Ariana Grande-thank u, next.txt',
                albumname:'positions'
            },
            {
                songname: 'no tears left to cry',
                lyrics:'/uploads/Ariana Grande-no tears left to cry.txt',
                albumname:'My Everything'
            },
            {
                songname: 'One Last Time',
                lyrics:'/uploads/Ariana Grande-One Last Time.txt',
                albumname:'My Everything'
            },
            {
                songname: 'Moonlight',
                lyrics:'/uploads/Ariana Grande-Moonlight.txt',
                albumname:'positions'
            },
        ]
        
        },
    {
        artistname:'Billie Eilish', 
        image:'/uploads/Billie Eilish.jpg' ,
        nationality:"Int'l",
        gender:'Female',
        albums: [
            {
                name: 'When We All Fall Asleep, Where Do We Go',
                cover:'/uploads/Billie Eilish-ปกWhen We All Fall Asleep, Where Do We Go.png'
            },
            {
                name: 'Live at Third Man Records',
                cover:'/uploads/Billie Eilish-ปกLive at Third Man Records.jpg'
            },
        ],
        songs_data:[
            {
                songname: 'lovely',
                lyrics:'/uploads/Billie Eilish-lovely.txt',
                albumname:'When We All Fall Asleep, Where Do We Go'
            },
            {
                songname: 'wish you were gay',
                lyrics:'/uploads/Billie Eilish-wish you were gay.txt',
                albumname:'Live at Third Man Records'
            },
            {
                songname: 'listen before i go',
                lyrics:'/uploads/Billie Eilish-listen before i go.txt',
                albumname:'When We All Fall Asleep, Where Do We Go'
            },
            {
                songname: 'everything i wanted',
                lyrics:'/uploads/Billie Eilish-everything i wanted.txt',
                albumname:'When We All Fall Asleep, Where Do We Go'
            },
            {
                songname: 'Six Feet Under',
                lyrics:'/uploads/Billie Eilish-Six Feet Under.txt',
                albumname:'Live at Third Man Records'
            },
            {
                songname: 'idontwannabeyouanymore',
                lyrics:'/uploads/Billie Eilish-idontwannabeyouanymore.txt',
                albumname:'Live at Third Man Records'
            },
        ]
        
        },
    {
        artistname:'Sasha Sloan', 
        image:'/uploads/Sasha Sloan.jpg' ,
        nationality:"Int'l",
        gender:'Female',
        albums: [
            {
                name: 'Self Portrait',
                cover:'/uploads/Sasha Sloan-ปกSelf Portrait.jpg'
            },
            
        ],
        songs_data:[
            {
                songname: 'Dancing With Your Ghost',
                lyrics:'/uploads/Sasha Sloan-Dancing With Your Ghost.txt',
                albumname:'Self Portrait'
            },
            {
                songname: 'Runaway',
                lyrics:'/uploads/Sasha Sloan-Runaway.txt',
                albumname:'Self Portrait'
            },
            {
                songname: 'Older',
                lyrics:'/uploads/Sasha Sloan-Older.txt',
                albumname:'Self Portrait'
            },
            {
                songname: 'Too Sad To Cry',
                lyrics:'/uploads/Sasha Sloan-Too Sad To Cry.txt',
                albumname:'Self Portrait'
            },
            
        ]
        
        },
            
];


function seedDB(){
    console.log('\n\n seedDB called \n\n')
    Song.remove({},function(err){  
        if(err){
            console.log(err)
        }
        console.log('\n\n Remove songs completed \n\n')
        Artist.remove({},function(err){
            if(err){
                console.log(err)
                return
            }
        
            console.log('Remove artists completed');
            console.log('--- data len: ', data.length, '\n\n')
            data.forEach(function(seed){
                Artist.create(seed , function(err, artist){
                    if(err){
                        console.log(err);
                    }else{
                        console.log('---- new artist added', artist.artistname)
                        seed.songs_data.forEach(function(seed2){
                            seed2.artistid = artist._id
                            Song.create(seed2, function(err, song){
                                if(err){
                                    console.log(err)
                                }else{
                                    Artist.updateOne({_id:artist.id},{"$push":{songs:song}},function(err){
                                        if(err){
                                            console.log(err)
                                        }else{
                                            // console.log("success push to ", artist.artistname, '\n');
                                        }
                                    })
                                }
                            });
                        });
                    };
                });
            });
        });
    });
}

module.exports = seedDB;