import React from 'react';
import Head from 'next/head';
import Layouts from "../../components/layouts";
import {getSinglePageInCategory} from "../../utilities/PrismicApi"
import linkResolver from "../../utilities/PrismicLinkResolver";
import {RichText} from "prismic-reactjs";
import {ArrowUpCircle, ArrowLeft} from "react-feather";
import Link from 'next/link';
import noImage from "../../images/no_image.png";

export default class extends React.Component {
    static async getInitialProps({asPath}) {
        const pageId = asPath.replace('/blog/', '');
        const page = await getSinglePageInCategory(pageId);
        console.log(page);
        return {
            page: page,
            id: pageId
        };
    }
    render() {
        const subMenu = (
           <ul className="submenu">
               <li><Link href="/blog/index" as="/blog"><a><ArrowLeft className="inline-block" />記事一覧に戻る</a></Link></li>
           </ul>
        );
        const title = `${RichText.asText(this.props.page.data.title)} - Penguinone`;
        const canonicalUrl = `https://kuropen.org/blog/${this.props.id}`;
        const image = this.props.page.data.cover_image.url || noImage;
        return (
            <Layouts title="Blog" subMenu={subMenu}>
                <Head>
                    <title key="title">{title}</title>
                    <meta property="og:title" content={RichText.asText(this.props.page.data.title)} key="ogTitle" />
                    <meta property="og:type" content="blog" key="ogType" />
                    <meta property="og:url" content={canonicalUrl} key="ogUrl" />
                    <meta property="og:image" content={image} key="ogImage" />
                    <meta property="og:site_name" content="Penguinone" key="ogSiteName" />
                </Head>
                <a name="page-head" id="page-head"/>
                <h2>{RichText.asText(this.props.page.data.title)}</h2>
                <div>
                    {RichText.render(this.props.page.data.text, linkResolver)}
                </div>
                <div className="text-right">
                    <a href="#page-head">ページトップに戻る<ArrowUpCircle className="inline-block"/></a>
                </div>
            </Layouts>
        )
    }
}
