import axios from 'axios';


// const searchImages = (term ) => {

// }
export default axios.create( {
    baseURL :'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID e9J_QFzh-ZpDBkZLHHLXXhNw0uHtXLwHeYb30Q_QRn8'
    }
})