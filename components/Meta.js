import Head  from 'next/head'
import React from 'react'

export const Meta = ({ title, keyword, description }) => {
    return (
        <Head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>  
         <meta name="keywords" content={keyword} />
         <meta name="desciption" content={description} />
         <link rel='icon' href="/favicon.ico" />
         <title>{title}</title>
        </Head>
    ) 
}


Meta.defaultProps = {
    title: "WebDev Newz",
    keyword: "Web development,programming",
    description:"Get the latest news in web dev"
}