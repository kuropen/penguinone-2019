import React from 'react';
import Layouts from "../../components/layouts";
import toc from "../../toc/portfolio.json";
import Link from 'next/link';

const PortfolioItemList = (props) => {
    const listItems = props.items.map((item) => {
        return (
            <li key={item.path}>
                <Link href={"/portfolio/" + item.path}>
                    <a>
                        {item.name}
                    </a>
                </Link>
            </li>
        );
    });
    return (
        <ul>
            {listItems}
        </ul>
    );
};

export default class extends React.Component {
    static async getInitialProps() {
        return {
            items: toc
        };
    }
    render() {
        return (
            <Layouts title="Portfolio">
                <h2>ポートフォリオ</h2>
                <p>この一覧では、Kuropenが個人プロジェクトとしてこれまで開発したもので、公開できるものを記載します。</p>
                <PortfolioItemList items={this.props.items} />
            </Layouts>
        );
    }
}
