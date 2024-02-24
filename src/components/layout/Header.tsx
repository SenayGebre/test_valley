'use client'

import AppLogo from "../Logo";
import MenuButton from "./MenuButton";
import SearchInput from "../input/SearchInput";
import SignInButton from "../button/SignInButton";
import NotificationButton from "../button/NotificationButton";

const Header = () => {
    const handleSearch = (searchText: string) => {
    };
    const onSignIn = () => {
    };

    return (
        <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-900">
        <div className=" max-w-screen-xl md:px-32 flex flex-row justify-between md:flex-wrap items-center md:justify-between md:mx-auto p-1">
          <div className="flex items-center space-x-3 rtl:space-x-reverse ml-4 md:ml-0">
                    <AppLogo />
                    <MenuButton />
                </div>
                <NotificationButton onButtonClick={() => { }} />
                <SearchInput onSearch={handleSearch} />

                <SignInButton onButtonClick={onSignIn} />
            </div>
        </nav>
    );
};

export default Header;
