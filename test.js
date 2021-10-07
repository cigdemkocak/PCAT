const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-tes-db');

//create schema

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
/*
Photo.create({
  title: 'Photo Title 2',
  description: 'Photo description 2 lorem ipsum',
});
*/
//read a photo
/*
Photo.find({}, (err, data) => {
  console.log(data);
});
*/

// update photo
/*
const id = '615ee8e4cbb9ac789781ca03';

Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo Title updated',
    description: 'Photo description 1 updated',
  },
  {
    new: true,
  },
  (err, data) => {
    console.log(data);
  }
);
*/
//delete a photo
const id = '615eea386d53fb9505bb7e8e'
Photo.findOneAndDelete(id, (err, data) => {
  console.log('Photo is removed');
});
