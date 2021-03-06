import React from 'react';
import {getSinglePage} from "../utilities/PrismicApi";
import linkResolver from "../utilities/PrismicLinkResolver";
import {RichText} from "prismic-reactjs";
import Layouts from "../components/layouts";


export default class extends React.Component {
    static async getInitialProps() {
        const copyrightDocument = await getSinglePage('copyright');
        return {
            doc: copyrightDocument
        };
    }
    render() {
        return (
            <Layouts title="Copyright">
                <div>
                    <div className="float-right">
                        {RichText.render(this.props.doc.data.cc_banner, linkResolver)}
                    </div>
                    {RichText.render(this.props.doc.data.text, linkResolver)}
                </div>
            </Layouts>
        );
    }
}