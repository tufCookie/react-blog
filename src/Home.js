import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState('mario');
  

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        if (!res.ok) {
          throw Error('Could not load data')
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch(e =>
      {
        setIsPending(false);
        setError(e.message)
      });
  }, []);

  return ( 
    <div className="home">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div>}
      { blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
    );
}
 
export default Home;
