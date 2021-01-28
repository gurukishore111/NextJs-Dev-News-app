import React from 'react';
import articleListStyle from "../styles/Article.module.css";
import { ArticleItems } from './ArticleItems';

export const ArticleList = ({ article }) => {
    return (
        <div className={articleListStyle.grid}>
            {article.map(article => (
            <ArticleItems article={article} /> 
            ))}
        </div>
    )
}
