import React from 'react'
import { Link } from 'react-router-dom';



const Articles = ({ props }) => {
  return (
    <div className='flex flex-wrap'>
        {props.map((article, index) => (
      <div className='p-4 md:w-1/2' key={index}>
        <div className='border-2 border-opacity-5 border-gray-200  rounded-lg overflow-hidden'>
      <ol type="1" className='py-1'>
        <li>
      <Link  to={`/article/${article.name}`} className='pl-6 pr-8 py-1'>
      <img className='lg:h-48 md:h-36 w-full object-cover rounded-lg' src ={article.thumbnail} alt="blog-image" />
      </Link>
      <div className='p-6'>
        <Link key={index} to={`/article/${article.name}`}>
          <h3 className='text-lg font-medium text-gray-900 mb-3'>{article.title}</h3>
        </Link>
        <p className='leading-relaxed mb-3'>{article.content[0].substring(0, 110)}...</p>
      <div>
        <Link to={`/article/${article.name}`} className='text-sm text-blue-600'>Learn More</Link>
      </div>
      </div>
      </li>
      </ol>
      </div>
      </div>
    ))}
    </div>
  )
}

export default Articles