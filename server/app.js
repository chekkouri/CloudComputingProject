// Requiring module
const express = require('express');
const env = require('dotenv');
// Creating express object
const app = express();

// Handling GET request
app.get('/', (req, res) => {
	res.send('A simple Node App is '
		+ 'running on this server')
	res.end()
})

env.config();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');

const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const commentsRoute = require('./routes/comments');
const imageRoute = require('./routes/images');
const testRoutes = require('./routes/tests');

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/comments", commentsRoute);
app.use("/images", imageRoute);
app.use("/test", testRoutes);



// Port Number
const PORT = process.env.PORT ||3002; 

// Server Setup
app.listen(PORT,console.log(
`Server started on port ${PORT}`));
