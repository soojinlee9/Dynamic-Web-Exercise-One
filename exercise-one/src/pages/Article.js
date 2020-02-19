import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router';

import DATA from "../components/Data";
import ArticleItem from "../components/ArticleItem";

function Article() {
    const [article, setArticle] = useState({});
    let { id } = useParams();

    useEffect(() => {
        let dataArray = DATA.filter(article => article.id === id);
        setArticle(dataArray[0]);
    }, [id]);

    return (
        <div>
            <header 
            className="articleHeader"
            style={{
                backgroundImage: `url(${article.image ? article.image.url : ""})`
            }}

            >
                <div className="articleHeaderWrapper">
                    <h1>{article.title}</h1>
                    <p>{article.publishedDate}</p>
                    <p>{article.blurb}</p>
                </div>
            </header>
            <main className="articleContent">
                <div className="articleContentWrapper">
                    {article.articleText && article.articleText.map((text, i) => (
                        <ArticleItem key={i} data={text.data} type={text.type}/>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Article;