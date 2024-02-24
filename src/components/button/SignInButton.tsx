import React from 'react';

interface Props {
    onButtonClick: () => void;
}

const SignInButton: React.FC<Props> = ({ onButtonClick }) => {
    return (
        <button onClick={onButtonClick} className='hidden lg:block'>
            <div className="flex gap-2 ">
                <img src="https://www.testvalley.kr/common/home-event.svg" className='md:w-8' alt="" />
                <div className="border-l border-gray-300 pt-6 my-6"></div>
                <span className="py-4 pt-6 text-sm -tracking-6 font-normal"> 로그인 / 회원가입</span>
            </div>
        </button>
    );
};

export default SignInButton;