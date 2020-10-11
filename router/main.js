var stdInfo = require('./User');

module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
    app.post('/asd', function (req, res) {
        console.log('뭔가...뭔가 입력됨....');
        stdInfo.create( {
            stdNumb: req.body.studentNumb,
            stdName: req.body.studentName,
            },);
        var Numb = req.body.studentNumb;
        var Name = req.body.studentName;
        res.send(Numb + " " + Name);
        console.log(Numb + " " + Name);
    });

}
