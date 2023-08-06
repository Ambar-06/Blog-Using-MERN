import React from 'react'
import { Link } from 'react-router-dom'

import ArictleContent from './Article-content';

const ArticleList = () => {
  return (<div>
    <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>Articles List</h1>
    <div className=''>
    {ArictleContent.map((article, index) => (
      <div className='p-4 md:w-1/2'>
      <ol type="1" className='py-1'>
        <li>
      <Link  to={`/article/${article.name}`} className='pl-6 pr-8 py-2' key={index}>{article.title}
      <img className='lg:h-48 md:h-36 w-full object-cover' src={article.thumbnail} alt="blog-image" />
      </Link>
      </li>
      </ol>
      </div>
    ))}
    </div>
    </div>
  )
}

export default ArticleList