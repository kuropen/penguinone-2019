import Layouts from '../components/layouts';
import ReactMarkdown from 'react-markdown';

const Profile = (props) => {
  return (
    <Layouts>
        <div className="md:w-10/12 mx-auto">
            <ReactMarkdown source={props.mdContent} />
        </div>
    </Layouts>
  );
};

Profile.getInitialProps = async () => {
    const content = await import('../texts/profile.md');
    return {
        mdContent: content.default
    };
};

export default Profile;
