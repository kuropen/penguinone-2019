import React from 'react';
import Layouts from "../../components/layouts";
import {getSinglePageInCategory} from "../../utilities/PrismicApi"
import {RichText} from "prismic-reactjs";
import {ArrowUpCircle, ArrowLeft} from "react-feather";
import Link from 'next/link';

export default class extends React.Component {
    static async getInitialProps({asPath}) {
        const pageId = asPath.replace('/blog/', '');
        const page = await getSinglePageInCategory(pageId);
        console.log(page);
        return {
            page: page,
        };
    }
    render() {
        const subMenu = (
           <ul className="submenu">
               <li><Link href="/blog/index" as="/blog"><a><ArrowLeft className="inline-block" />記事一覧に戻る</a></Link></li>
           </ul>
        );
        return (
            <Layouts title="Blog" subMenu={subMenu}>
                <a name="page-head" id="page-head"/>
                <h2>{RichText.asText(this.props.page.data.title)}</h2>
                <div>
                    {RichText.render(this.props.page.data.text)}
                </div>
                <div className="text-right">
                    <a href="#page-head">ページトップに戻る<ArrowUpCircle className="inline-block"/></a>
                </div>
            </Layouts>
        )
    }
}
