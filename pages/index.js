import Head from 'next/head';
import { ArticleList } from '../components/ArticleList';
import { server } from './../config/index';

export default function Home({ article }) {
  return (
    <div>
        <ArticleList article={article} />
    </div>
  )
}


// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const article = await res.json();


//   return {
//     props: {
//       article
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/article/`)
  const article = await res.json();


  return {
    props: {
      article
    }
  }
}
