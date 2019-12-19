import React from 'react';
import PrismicApi from "../utilities/PrismicApi";
import {RichText} from "prismic-reactjs";
import Layouts from "../components/layouts";


export default class extends React.Component {
    static async getInitialProps() {
        const copyrightDocument = await (await PrismicApi()).getSingle('copyright');
        return {
            doc: copyrightDocument
        };
    }
    render() {
        return (
            <Layouts>
                <div className="md:w-10/12 mx-auto">
                    <div className="float-right">
                        {RichText.render(this.props.doc.data.cc_banner)}
                    </div>
                    {RichText.render(this.props.doc.data.text)}
                </div>
            </Layouts>
        );
    }
}