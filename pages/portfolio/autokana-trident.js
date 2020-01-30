import React from 'react';
import Head from 'next/head';
import Layouts from "../../components/layouts";
import Link from 'next/link';
import {ArrowUpCircle, ArrowLeft} from "react-feather";

let autoKana;

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            furigana: '',
        };
    }

    componentDidMount() {
        const AutoKana = require('../../utilities/AutoKanaUtil');
        autoKana = AutoKana.bind("#name", "#furigana");
    }

    handleNameInput(ev) {
        this.setState({
            name: ev.target.value,
            furigana: autoKana.getFurigana(),
        });
    }

    render() {
        const subMenu = (
           <ul className="submenu">
               <li><Link href="/portfolio/index" as="/portfolio"><a><ArrowLeft className="inline-block" />ポートフォリオ一覧に戻る</a></Link></li>
           </ul>
        );
        const title = `vanilla-autokana Trident patch - Penguinone`;
        const textBoxStyle = {
            className: "border border-solid border-indigo-700 rounded ml-5",
        };
        return (
            <Layouts title="Portfolio" subMenu={subMenu}>
                <Head>
                    <title key="title">{title}</title>
                </Head>
                <a name="page-head" id="page-head"/>
                <h2>vanilla-autokana Trident patch</h2>
                <p>
                    <a href="https://github.com/ryo-utsunomiya/vanilla-autokana">vanilla-autokana</a>は、
                    使用している一部のコードがIEに対応していないためIEで動作しませんでした。<br />
                    その部分を置換して、IE対応が求められるプロジェクトで利用できるようにしたものです。
                </p>
                <h3>デモンストレーション</h3>
                <p>名前欄に日本語を入力すると自動的にふりがなが入ります。</p>
                <div>
                    <label htmlFor="name">名前</label>
                    <input name="name" id="name" value={this.state.name} onInput={this.handleNameInput.bind(this)} onChange={this.handleNameInput.bind(this)} {...textBoxStyle} />
                </div>
                <div>
                    <label htmlFor="furigana">ふりがな</label>
                    <input name="furigana" id="furigana" value={this.state.furigana} readOnly={true} {...textBoxStyle} />
                </div>
                <h3>入手先</h3>
                <p>
                    GitHub: <a href="https://github.com/kuropen/vanilla-autokana/tree/trident" target="_blank" rel="noopener">https://github.com/kuropen/vanilla-autokana/tree/trident</a><br />
                    ※本家へのContributionや、npmを通じた配布などに関しては現在検討中です。
                </p>
                <div className="text-right">
                    <a href="#page-head">ページトップに戻る<ArrowUpCircle className="inline-block"/></a>
                </div>
            </Layouts>
        )
    }
}
