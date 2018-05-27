
const express = require('express');
const db = require('../database/tutorial')
const cors = require('cors');
// const router = require('./router.js')
const morgan = require('morgan');
const BodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const app = express();
const fetch = require('node-fetch');

var helmet = require('helmet');

const prepForCompute = require('./helpers/prepForCompute');
 
require('dotenv').config();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(BodyParser.json());
app.use(express.static('./client/dist'));



// app.get('/api/getScore', function(req, res){
//     //do stuff
//     console.log(req.body, "WOWOWOWOW")
//     //res.send({body: 'okokokokok'});
// });




// fetch('https://registry.npmjs.org/babel-preset-es2015')
// .then(res => res.text())
// .then(body => console.log(body));





app.put('/api/computeScore', function(req, res){
    
    let arrayToReturn = [];
    //req.body.toString();
    let arrayOfLines = req.body.dependenicy.split('\n')
    let gotSomething = false;
    let gotAuthor = false;
    let gotGitUrl = false;
    let gotName = false;
    let author = []
    let gitUrl = []
    let name = []
    let listOfDependicies = []

    arrayOfLines.forEach((line) => {
        let pendicy = [];
        let arrayOfSplitLines = line.split('"')
        // console.log(arrayOfSplitLines)
         arrayOfSplitLines.forEach((L, i) => {
            
             if(L === 'dependencies') {
                //  console.log('got something@!!!!!')
                 gotSomething = true;
                 gotGitUrl = false;
                 gotAuthor = false;
             }
             if(L === 'repository') {
                //  console.log('got something@!!!!!')
                gotSomething = false;
                gotGitUrl = true;
                gotAuthor = false;
             }
             if(L === 'author') {
                //  console.log('got something@!!!!!')
                gotAuthor = true;
                gotGitUrl = false;
                gotSomething = false;
             }
             if(L === 'name') {
                //  console.log('got something@!!!!!')
                gotName = true;
                gotGitUrl = false;
                gotSomething = false;
                gotAuthor = false;
             }

             if(gotName) {
                if(L === ": ") {
                    name.push(arrayOfSplitLines[i + 1])
                    gotName = false;
                }
            }
             
             if(gotAuthor) {
                // make data nicer 
                console.log('im the authors L', L)
                if(L === ": ") {
                    author.push(arrayOfSplitLines[i + 1])
                    gotAuthor = false;
                }
            }
             let th = L.length
             if(gotGitUrl && th > 40) {
                 // make data nicer 
                let cop = L.slice(4)
                gitUrl.push(cop)
             }
            
             if(gotSomething && i === 1 || i === 3) {
                pendicy.push(L)
             }
            //console.log(L);
         })
         
         
         if(pendicy.length > 1) {
            arrayToReturn.push(pendicy)
         }
    })
    // console.log(arrayToReturn, 'same thing')

    console.log(name, 'the Name ')
    let scorePassArray = []
    let scoreFailArray = []
    
    // ----- get version info from npm -----//////

    
    
    arrayToReturn.forEach((item, i) => {
        listOfDependicies.push(item)
        fetch(`https://registry.npmjs.org/${item[0]}`)
        .then(res => res.text())
        .then(body => {
            obj = JSON.parse(body);
            // console.log(obj['dist-tags'].latest, 'return from npm')
            //--- Compare version numbers ----//
            let name = item[0]
            let currentV = item[1]
            // let github = item
            let newestV = obj['dist-tags'].latest
            let s = currentV.split('')
            s.shift()

            //the number of times its been changed, the keys are also the versions
            //console.log(Object.keys(obj.time).length);

            //let versionCount = obj.time
            
            if(s.join('') === newestV) {
                scorePassArray.push([name, currentV, newestV, 'Pass'])
                return 'Pass'
            } else {
                scoreFailArray.push([name, currentV, newestV, 'Fail'])
                return 'Fail'
            }
            //compareVersions(name, currentV, obj['dist-tags'].latest);
        }).then(() => {
            if(scorePassArray.length + scoreFailArray.length === arrayToReturn.length) {
                let total = scorePassArray.length + scoreFailArray.length
                let score = scorePassArray.length / total
                let scoreDetailsArray = scorePassArray.concat(scoreFailArray);
                console.log(total, 'total')
                console.log((score * 100).toFixed(2), 'score')
                let finalScore = (score * 100).toFixed(2)

                let tutorial = {
                    author: author,
                    title: name,
                    techStack: scoreDetailsArray,
                    currentScore: finalScore,
                    courseUrl: '',
                    thumbnail: '',
                    githubUrl: gitUrl[0],
                }
    
                db.addTutorial(tutorial, function(req, res){
                    console.log('i am creating a tutorial', tutorial)
                });
                res.send({name: name, author: author, score: finalScore, gitUrl: gitUrl[0], list: listOfDependicies, scoreDetails: scoreDetailsArray, pass: scorePassArray, fail: scoreFailArray })
            }
        })
    })
});


//app.use(router);



app.listen(PORT, ()=>console.log(`Listening on PORT ${PORT}!`));
