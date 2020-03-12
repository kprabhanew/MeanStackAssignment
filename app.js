var express = require('express');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.status(200).send('I am from get');
})

app.post('/upload', (req, res, next) => {

    const user = req.body;
    console.log('user : ', user);

    const file = req.files.Photo;
    console.log(file);
    console.log("file.name : ", file[0].name);

    // file.mv("./Uploads/"+file[0].name, (err, result) => {
    //     if (err) {
    //         //throw err.message
    //         res.send({
    //             Error : "true",
    //             message: err.message
    //         })
    //     }
    //     res.send({
    //         success: 'true',
    //         message: "File Uploaded !"
    //     });
    // })

    if (req.files) {
        const file = req.files.Photo;
        for (let i = 0; i < file.length; i++) {
            file[i].mv('./uploads/' + file[i].name, function (err) {
                if (err) {
                    res.send(err);
                }
            })
        }
        res.send({
            success: 'true',
            message: "File Uploaded !"
        });
    }
})


app.listen('3000', () => {
    console.log('Server Start Port : 3000');
})
