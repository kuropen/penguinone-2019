import Layouts from '../components/layouts';
import '../styles/index.css';
import getYonoArticles from '../utilities/getYonoArticles';
import classnames from 'classnames';
import {ArrowRightCircle, Book} from 'react-feather';

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
        <a href={article.url} target="_blank" rel="noopener" className="block">
          <img src={article.image_url} alt="" className="max-w-full" />
          <div className="absolute bottom-0 w-full text-white yonoArticleInfo">
            <p className="text-lg">{article.title}</p>
            <p>{article.published_at}</p>
          </div>
        </a>
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
  console.log(props);
  return (
    <Layouts>
      <div className="md:w-10/12 mx-auto">
        <p className="border-2 rounded-lg kp-gradientBorder-T1 md:text-center p-1">
          2019年12月7日、当サイトはリニューアルオープンしました。<br className="md:hidden" />なお、一部準備中のコンテンツや、調整中のシステムがございます。<br />
          お気づきの点がございましたら、SNSなどで管理者までご連絡ください。<br />
          <span className="text-sm">（地元路線の埼京線が相鉄線と直通したのを記念し、埼京線で使われているLCDをオマージュしたデザインで展開中です）</span>
        </p>
        <h2 className="flex items-center">
          <Book className="w-8 h-8" />
          <span className="block">Recent blog articles</span>
        </h2>
        <BlogFeedList articles={props.blogArticles} />
        <p className="mt-2"><a href="https://kuropen.goat.me/" target="_blank" rel="noopener" className="flex items-center justify-end">
          <span className="block">Read more articles</span><ArrowRightCircle />
        </a></p>
      </div>
    </Layouts>
  )
};

Index.getInitialProps = async () => {
  const yonoArticles = await getYonoArticles(YONO_FEED_NUM);
  return {
    blogArticles: yonoArticles
  };
};

export default Index;
