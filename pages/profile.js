import React from 'react';
import {getSinglePage} from "../utilities/PrismicApi";
import linkResolver from "../utilities/PrismicLinkResolver";
import {RichText} from "prismic-reactjs";
import Layouts from "../components/layouts";


export default class extends React.Component {
    static async getInitialProps() {
        const copyrightDocument = await getSinglePage('about_me');
        return {
            doc: copyrightDocument
        };
    }
    render() {
        return (
            <Layouts title="Profile">
                <div>
                    {RichText.render(this.props.doc.data.text, linkResolver)}
                </div>
            </Layouts>
        );
    }
}