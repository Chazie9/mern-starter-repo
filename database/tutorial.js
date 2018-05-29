// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/isItCurrent');

// let tutorialSchema = mongoose.Schema ({
//     author: String,
//     title: String,
//     techStack: Array,
//     currentScore: Number,
//     courseUrl: String,
//     thumbnail: String,
//     githubUrl: String
// })

// let Tutorial = mongoose.model('tutorial', tutorialSchema);


// const addTutorial = (tutorial, callback) => {
//     console.log('in the mongo')
//     let theTutorial = new Tutorial(tutorial);

//     theTutorial.save(function(err, savedTutorial) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('tutorial')
//         }
//     });

   
// };

// var mongoDB = 'mongodb://chazie99:firebird65@ds135810.mlab.com:35810/is_it_current';
// var mongoose = require('mongoose');
// mongoose.connect(mongoDB);
// mongoose.connect('mongodb://localhost/isItCurrent');

var mongoDB = process.env.MONGODB_URI || 'mongodb://chazie9:firebird77@ds135810.mlab.com:35810/is_it_current';
var mongoose = require('mongoose');
mongoose.connect(mongoDB);

let tutorialSchema = mongoose.Schema ({
    orginalSubmission: String,
    author: String,
    title: String,
    techStack: Array,
    currentScore: Number,
    courseUrl: String,
    thumbnail: String,
    githubUrl: String
})

let Tutorial = mongoose.model('tutorial', tutorialSchema);


const addTutorial = (tutorial, callback) => {

    //check to see if tutorial is there already
    //1 check course url if they are same
    //2 check if author is same
    //3 check if title is same
    //4 check if git is the same -- optional

    // function theCheck() { 
    //     let wasFound = false;
        // let check1 = Tutorial.find({courseUrl: tutorial.courseUrl}, function(err, tutorial) {
        //     if (err) {
        //         console.log('oh no :( error')
        //     } else {
        //         console.log('yeah11111! =>', tutorial.length);
        //         if(tutorial !== '') {
        //             wasFound = true;
        //         }
        //     }
        // });
        // let check2 = Tutorial.find({title: tutorial.title}, function(err, tutorial) {
        //     if (err) {
        //         console.log('oh no :( error')
        //     } else {
        //         console.log('yeah222222! =>', tutorial.length);
        //     }
        // })
        // let check3 = Tutorial.find({author: tutorial.author}, function(err, tutorial) {
        //     if (err) {
        //         console.log('oh no :( error')
        //     } else {
        //         console.log('yeah3333333! =>', tutorial.length);
        //         wasFound = true;
        //     }
        // });
        //return wasFound;
  //  }

    console.log('in the mongo')
    let theTutorial = new Tutorial(tutorial);
    theTutorial.save(function(err, savedTutorial) {
        if (err) {
            console.log(err);
        } else {
            console.log('tutorial saved');
            return 'ok';
        }
    });

    // theCheck();

    // if(wasFound) {
    //     theTutorial.save(function(err, savedTutorial) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             console.log('tutorial saved');
    //             return 'ok';
    //         }
    //     });
    // } else {
    //     console.log('tutorial already saved');
    //     return 'already saved'
    // }
}

module.exports.addTutorial = addTutorial;