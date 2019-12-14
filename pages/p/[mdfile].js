import React from 'react';
import Layouts from '../../components/layouts';
import ReactMarkdown from 'react-markdown';
import TextDataUtil from "../../utilities/TextDataUtil";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mdContent: props.mdContent,
            mdFile: props.mdFile,
        };
    }

    static async getInitialProps({asPath, req}) {
        // Detecting target file from actual path
        // If next/router is used here, React raises exception
        const mdFile = asPath.replace('/p/', '');
        let initialProps = {
            mdFile: mdFile,
            mdContent: null
        };

        if (!req) {
            // Avoid fetching data from S3 using Lambda@Edge, otherwise it raises 500 error
            // Since the argument "req" is not available in the client-side, used as server-side flag
            try {
                initialProps.mdContent = await TextDataUtil.getS3Text(initialProps.mdFile);
            }catch (e){
                initialProps.mdContent = e;
            }
        }
        return initialProps;
    }
    render() {
        if (this.state.mdFile !== this.props.mdFile) {
            // This condition means client-side move between Markdown pages
            this.setState({
               mdFile: this.props.mdFile,
               mdContent: this.props.mdContent,
            });
        }
        if (!this.state.mdContent) {
            // Since fetching Markdown text in server-side is avoided, client does
            setTimeout(() => {
                TextDataUtil.getS3Text(this.props.mdFile).then((result) => {
                    this.setState({
                        mdContent: result
                    });
                }).catch((result) => {
                    this.setState({
                        mdContent: result
                    });
                });
            }, 1000);
        }
        return (
            <Layouts>
                <div className="md:w-10/12 mx-auto">
                    <ReactMarkdown source={this.state.mdContent} />
                </div>
            </Layouts>
        );
    }
}
