
const router = require('express').Router()
const Post = require('../models/Post')
const Comment = require('../models/Comment');


//todo: 
// route to get all posts - get

router.get('/', (req, res, next) => {

	Post.find()
		.populate('user')
		.populate('comments')
		.then(posts => {
			console.log("POSTS", posts)
			res.status(200).json(posts)
		})
		.catch(err => next(err))
});

// route to create a post 

router.post('/new', (req, res, next) => {
	const { user, text } = req.body
	Post.create({ user, text })
		.then(post => {
			res.status(201).json(post)
		})
		.catch(err => next(err))
});

// route to give post by user id  - get with id

router.get('/post/:id', (req, res, next) => {
	Post.findById(req.params.id)
		.then(post => {
			// check for a valid mongo object id 
			// mongoose.Types.ObjectId.isValid(req.params.id)
			if (!post) {
				res.status(404).json(post)
			} else {
				res.status(200).json(post)
			}
		})
		.catch(err => next(err))
});

router.put('/post/:id', (req, res, next) => {
	const { user, text, likes, retweetCount, comments, createdAt } = req.body
	Post.findByIdAndUpdate(req.params.id, {
		user,
		text,
		likes,
		retweetCount,
		comments,
		createdAt
	}, { new: true })
		.then(updatedPost => {
			res.status(200).json(updatedPost)
		})
		.catch(err => next(err))
})

// Route to delte post - post 

router.delete('/:id', (req, res, next) => {
	Post.findByIdAndDelete(req.params.id)
		.then(() => {
			res.status(200).json({ message: 'Post has been deleted' })
		})
});




//todo: 

// route to get all comments - get

// when doing axios do /posts/comments

router.get('/comments', (req, res, next) => {
	Comment.find()
		.then(comment => {
			res.status(200).json(comment)
		})
		.catch(err => next(err))
});

// route to create a comment 

router.post('/newcomment', (req, res, next) => {
	console.log(req.body)
	const { user, text, post } = req.body
	Comment.create({ user, post, text })
		.then(comment => {
			Post.findByIdAndUpdate(post, { $push: { comments: comment._id } }, { new: true })
				.then((post) => console.log("UPDATE", post))
				.catch(err => next(err))
			res.status(201).json(comment)
		})
		.catch(err => next(err))
});

// route to give post by user id  - get with id

router.get('/comment/:id', (req, res, next) => {
	Comment.findById(req.params.id)
		.then(comment => {
			// check for a valid mongo object id 
			// mongoose.Types.ObjectId.isValid(req.params.id)
			if (!comment) {
				res.status(404).json(comment)
			} else {
				res.status(200).json(comment)
			}
		})
		.catch(err => next(err))
});

router.put('/comment/:id', (req, res, next) => {
	const { user, post, text, createdAt } = req.body
	Comment.findByIdAndUpdate(req.params.id, {
		user,
		post,
		text,
		createdAt,
	}, { new: true })
		.then(updatedComment => {
			res.status(200).json(updatedComment)
		})
		.catch(err => next(err))
})

// Route to delte post - post 

router.delete('/comment/:id', (req, res, next) => {
	Comment.findByIdAndDelete(req.params.id)
		.then(() => {
			res.status(200).json({ message: 'Comment has been deleted' })
		})
});



module.exports = router;



