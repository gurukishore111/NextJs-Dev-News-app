import React from 'react';
import articleStyle from "../styles/Article.module.css";
import  Link  from 'next/link';

export const ArticleItems = ({article}) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyle.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}
