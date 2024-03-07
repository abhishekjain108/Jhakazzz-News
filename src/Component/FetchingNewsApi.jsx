import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'


const FetchingNewsApi = (props) => {



    const [state, setState] = useState([])

  

    useEffect(()=>{

        axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1806d32c4cb148af9e6716160fd73702`)
        .then(res => setState(res.data.articles))
    } , [])


  return (
   <>

    <h1 className='text-center' style={{color :props.mode ==='dark' ? 'white' : 'black ' , marginTop : '70px'}}>Jhakazzz-News</h1>
   <div className='container my-1 ' style={{display:'grid' , gridTemplateColumns:'auto auto auto' }}>
    
    {
               state.map((element , i)=>{

                return <GetData key={i} element={element}/>
    
            })
      }
     
   </div>

   </>
  )
}
export default FetchingNewsApi

function GetData(props){

    let {title , urlToImage , url , publishedAt , author } = props.element

    
    return <div className="container my-2">
      <div className="card">
    <img src={!urlToImage ? "https://cdn.pixabay.com/photo/2023/10/14/07/05/sage-8314234_1280.jpg" : urlToImage} className="card-img-top" alt="..." />
    <div className="card-body " >
      <h5 className="card-title">{title}</h5>
      <p className="card-text"><small className="text-body-secondary">by {author} on {publishedAt}</small></p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
    </div>
  </div>
    </div>
}