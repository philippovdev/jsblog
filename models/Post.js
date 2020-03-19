const postsCollection = require('../db').db().collection("posts")

let Post = function(data) {
    this.data = data
}

Post.prototype.cleanUp = function() {

}

Post.prototype.validate = function() {

}

Post.prototype.create = function() {

}

module.exports = Post
