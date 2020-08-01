const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const articleSchema = new Schema({
    title: {type: String, require: true},
    article: {type: String, require: true},
    authorname: {type: String, require: true}
});

const Articles = mongoose.model("Articles", articleSchema);

module.exports = Articles;