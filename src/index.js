// add the line below if you need jquery
// import * as $ from 'jquery'

//JS file including example
import Post from './Post'

// any type of css fyles including example
import './styles/style.scss'
import './styles/style.less'
import './styles/style.css'

const post = new Post('Webpack is working!')
console.log(post.toString());
