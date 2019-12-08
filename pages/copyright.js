import Layouts from '../components/layouts';
import ReactMarkdown from 'react-markdown';

const Copyright = (props) => {
  return (
    <Layouts>
        <div className="md:w-10/12 mx-auto">
            <a class="block float-right" rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
                <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
            </a>
            <ReactMarkdown source={props.mdContent} />
        </div>
    </Layouts>
  );
};

Copyright.getInitialProps = async () => {
    const content = await import('../texts/copyright.md');
    return {
        mdContent: content.default
    };
};

export default Copyright;
