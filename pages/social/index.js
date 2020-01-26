import React from 'react';
import Layouts from "../../components/layouts";
import {getPagesInCategory, getSinglePage} from "../../utilities/PrismicApi";
import linkResolver from "../../utilities/PrismicLinkResolver";
import {Link, RichText} from 'prismic-reactjs';
import {Twitter, Facebook, Link2, Instagram} from 'react-feather';
import Mastodon from '../../all-logos-in-one-basket/public/basket/mastodon_simple.svg';
import Pleroma from '../../all-logos-in-one-basket/public/basket/pleroma.svg';
import Misskey from '../../all-logos-in-one-basket/public/basket/misskey.svg';

const BlogArticleList = (props) => {
    const listItems = props.accounts.map((article) => {
        let target = {};
        if (article.data.account_link.target) {
            target = { 
                target: article.data.account_link.target,
                rel: "noopener"
            };
        }

        let descriptionSpace = null;
        if (RichText.asText(article.data.description).length > 0) {
            descriptionSpace = (
                <div className="text-sm ml-8">{RichText.render(article.data.description)}</div>
            );
        }

        const iconAttribute = {
            className: 'inline-block mr-2',
        };
        let icon = <Link2 {...iconAttribute} />
        switch(article.data.account_type) {
            case 'Twitter':
                icon = <Twitter {...iconAttribute} />;
                break;
            case 'Facebook':
                icon = <Facebook {...iconAttribute} />;
                break;
            case 'Instagram':
                icon = <Instagram {...iconAttribute} />;
                break;
        }
        let accountType = article.data.account_type;

        return (
            <li key={article.id} className="mt-1 mb-1">
                {icon}
                {accountType}:&nbsp;
                <a href={Link.url(article.data.account_link)} {...target}>
                    {article.data.account_name}
                </a>
                {descriptionSpace}
            </li>
        );
    });
    return (
        <ul className="social_account_list">
            {listItems}
        </ul>
    );
};

export default class extends React.Component {
    static async getInitialProps() {
        const accounts = await getPagesInCategory(
            'social_accounts',
            {
                orderings : '[my.social_accounts.account_type]',
            }
        );
        const policyDocument = await getSinglePage('social_policy');
        return {
            accounts: accounts,
            doc: policyDocument
        };
    }
    render() {
        return (
            <Layouts title="Social">
                <h3>SNSアカウントについて</h3>
                <p>Kuropenは、以下のSNSアカウントを使用しています。</p>
                <BlogArticleList accounts={this.props.accounts} />
                <h3 id="about_activitypub">ActivityPubについて</h3>
                <p>上記のアカウント一覧において、「ActivityPub」と表示されているアカウントについては、<br />
                以下のような分散型SNSシステムからフォローすることができます。<br />
                お使いのSNSにて、「@」以下も含めたアカウント名の検索をお試しください。</p>
                <ul className="social_account_list">
                    <li className="mt-1 mb-1"><a href="https://joinmastodon.org/" rel="noopener" target="_blank"><img className="h-6 w-6 inline-block" src={Mastodon} alt="" /> Mastodon</a></li>
                    <li className="mt-1 mb-1"><a href="https://pleroma.social/" rel="noopener" target="_blank"><img className="h-6 w-6 inline-block" src={Pleroma} alt="" /> Pleroma</a></li>
                    <li className="mt-1 mb-1"><a href="https://join.misskey.page/" rel="noopener" target="_blank"><img className="h-6 w-6 inline-block" src={Misskey} alt="" /> Misskey</a></li>
                </ul>
                <h3>SNSポリシー</h3>
                <div>
                {RichText.render(this.props.doc.data.policy, linkResolver)}
                </div>
            </Layouts>
        );
    }
}

