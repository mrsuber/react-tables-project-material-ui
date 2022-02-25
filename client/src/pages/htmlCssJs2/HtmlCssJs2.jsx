import {useState, useEffect} from 'react'
import {Posts,Pagination,Topbar,Sidebar} from '../../component'
import axios from 'axios'


const HtmlCssJs2 = ({history}) => {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading] = useState(false)
  const [currentPage,setCurrentPage] =useState(1)
  const [postsPerPage] = useState(10)



  useEffect(() =>{
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

      setPosts(res.data)
      setLoading(false);
    }

    fetchPost()
  },[])



//get current posts
const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost-postsPerPage
const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);


// change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)


return (
  <>
  <Sidebar history={history}/>
  <div className="admin__main">
    <Topbar/>
  <div className="table__constainer">
  <h1 className="text-primary mb-3">My Blog</h1>
  <Posts posts={currentPosts} loading={loading}/>

  <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
  </div>
  </div>
  </>
);
}

export default HtmlCssJs2
