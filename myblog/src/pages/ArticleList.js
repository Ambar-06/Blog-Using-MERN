import React from 'react'
import { Link } from 'react-router-dom'

import ArticleContent from './Article-content';

// component

import Articles from './Articles';

const ArticleList = () => {
  return (<div>
    <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>Articles List</h1>
    <div className='flex flex-wrap -m-4 py-2'>
    <Articles props={ ArticleContent }/>
    </div>
    </div>
  )
}

export default ArticleList