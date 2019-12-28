import React from 'react';
import Layouts from "../../components/layouts";
import {getPagesInCategory} from "../../utilities/PrismicApi";
import {RichText} from "prismic-reactjs";
import moment from "moment";
import Link from 'next/link';

const BlogArticleList = (props) => {
    const listItems = props.articles.map((article) => {
        const date = new Date(article.data.posting_date);
        const day = moment(date).format("LL");
        return (
            <React.Fragment key={article.id}>
                <dt className="text-xl">
                    <Link href="/blog/[article]" as={"/blog/" + article.id}>
                        <a>
                            {RichText.asText(article.data.title)}
                        </a>
                    </Link>
                </dt>
                <dd className="mb-4 text-gray-700">{day}</dd>
            </React.Fragment>
        );
    });
    return (
        <dl>
            {listItems}
        </dl>
    );
};

export default class extends React.Component {
    static async getInitialProps() {
        const pages = await getPagesInCategory(
            'blog',
            { orderings : '[my.blog.posting_date desc]' }
        );
        console.log(pages);
        return {
            pages: pages
        };
    }
    render() {
        return (
            <Layouts title="Blog">
                <BlogArticleList articles={this.props.pages} />
            </Layouts>
        );
    }
}
