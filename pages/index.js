import React from 'react';
import Layouts from '../components/layouts';
import '../styles/index.css';
import {getPagesInCategory} from "../utilities/PrismicApi";
import classnames from 'classnames';
import {ArrowRightCircle, Book} from 'react-feather';
import Link from 'next/link';
import {RichText, Date} from "prismic-reactjs";
import noImage from "../images/no_image.png";

const moment = require('moment');

const YONO_FEED_NUM = 3;
const YONO_MOBILE_FEED_NUM = 2;

const BlogFeedList = (props) => {
  let listCount = 0;
  const listItems = props.articles.map((article) => {
    listCount++;
    const classes = classnames(
      'md:w-1/3',
      'lg:w-1/4',
      'mx-auto',
      'h-40',
      'border-2',
      'yonoArticleBorder',
      'rounded-lg',
      'bg-repeat-space',
      'overflow-hidden',
      'relative',
      {'hidden': listCount > YONO_MOBILE_FEED_NUM},
      {'md:block': listCount > YONO_MOBILE_FEED_NUM},
    );
    return (
      <div className={classes} key={article.id}>
        <Link href="/blog/[article]" as={"/blog/" + article.id}><a className="block">
          <img src={article.data.cover_image.url || noImage} alt="" className="max-w-full" />
          <div className="absolute bottom-0 w-full text-white yonoArticleInfo">
            <p className="text-lg">{RichText.asText(article.data.title)}</p>
            <p>{moment(article.data.posting_date).format('YYYY-MM-DD')}</p>
          </div>
        </a></Link>
      </div>
    );
  });
  return (
    <div className="md:flex">
      {listItems}
    </div>
  );
};

const Index = (props) => {
  return (
    <Layouts>
      <div>
        <p className="border-2 rounded-lg border-yellow-500 md:text-center p-1">
          公開から3ヶ月以上が経過しておりますが現在も準備中のコンテンツがございます。<br />
          お待たせして申し訳ございません。
        </p>
        <h2 className="flex items-center">
          <Book className="w-8 h-8" />
          <span className="block">Recent blog articles</span>
        </h2>
        <BlogFeedList articles={props.blogArticles} />
        <p className="mt-2"><Link href="/blog/index" as="/blog"><a className="flex items-center justify-end">
          <span className="block">Read more articles</span><ArrowRightCircle />
        </a></Link></p>
      </div>
    </Layouts>
  )
};

Index.getInitialProps = async () => {
  const pages = await getPagesInCategory(
      'blog',
      {
        orderings : '[my.blog.posting_date desc]',
        pageSize: YONO_FEED_NUM
      }
  );
  return {
    blogArticles: pages
  };
};

export default Index;
