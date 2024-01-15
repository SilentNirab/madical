import { Link } from 'react-router-dom';
import errorpage from '../../assets/images/error.png'
import Container from '../../components/Container';

const ErrorPage = () => {
    return (
        <div className="">
            <Container>
                <div className='flex flex-col items-center justify-center min-h-screen space-y-4'>
                    <h3 className='text-4xl font-bold'>Sorry,</h3>
                    <p className='text-gray-400'>This page is not found.</p>
                    <img src={errorpage} alt="" />
                    <Link to={'/'}><button className="bg-[#F7A582] text-xl py-2 hover:bg-[#ca8668] p-4 text-white rounded-lg">Back to Home</button></Link>
                </div>
            </Container>
        </div>
    );
};

export default ErrorPage;