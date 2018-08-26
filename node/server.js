// server.js
var http = require('http')
var mongoose = require('mongoose')
var options={
    keepAlive:1,
    useMongoClient: true
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/admin',options);


var Schema = mongoose.Schema;

var animalSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    type: String
});

animalSchema.methods.findSimilarType = function (cb) {
    return this.model('Animal').find({type: this.type},cb);
};
animalSchema.virtual('name.full').get(function () {
   return this.name.first+' '+this.name.last;
});
animalSchema.virtual('name.full').set(function (name) {
    var split = name.split(' ');
    this.name.first = split[0];
    this.name.last = split[1];
});


var animalModel =  mongoose.model('Animal',animalSchema);


var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  var arr=[
        {name: {first:'asd1',last:'dfh1'},type: 'dog'},
        {name: {first:'asd2',last:'dfh2'},type: 'dog'},
        {name: {first:'asd3',last:'dfh3'},type: 'dog'},
        {name: {first:'asd4',last:'dfh4'},type: 'cat'}
    ];
    animalModel.create(arr,function (err,docs) {
        res.end(JSON.stringify(docs))
    })
  
})

server.listen(8080, function( ) {
  console.log('Docker DEMO with Node.js is running.')
}) 
