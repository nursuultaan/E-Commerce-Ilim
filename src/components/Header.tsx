import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { Dropdown, Menu, Space } from 'antd';

const Header = () => {
    const links = [
        { name: 'about', path: '/about' },
        { name: 'catalog', path: '/catalog' },
        { name: 'contacts', path: '/contact' },
        { name: 'partnership', path: '/partnership' },
        { name: 'delivery', path: '/delivery' }
    ];

    const menuItems = links.map((link, index) => ({
        key: index.toString(),
        label: (
            <Link to={link.path} className={"capitalize "}>
                <div className={"w-[200px] px-2 py-1"}>

                    {link.name}

                </div>
            </Link>
        )
    }));

    return (
        <header className="flex flex-row justify-between md:justify-evenly md:gap-4 mt-2 md:mx-6 p-4 items-center">
            <Space wrap>
                <Dropdown overlay={<Menu items={menuItems} />} placement="bottomLeft">
                    <div className="menu_toggle flex-3 lg:hidden flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#000000"
                        >
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </div>
                </Dropdown>
            </Space>

            <div className="flex nav_logo items-center">
                <img src={logo} alt="Logo" className="h-[70px] md:h-[60px] w-full md:w-auto" />
                <nav className="w-full lg:flex hidden justify-center gap-[4rem]">
                    {links.map((link) => (
                        <div key={link.name}>
                            <Link className="uppercase" to={link.path}>
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </nav>
            </div>

            <div className="search_button flex-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
            </div>
        </header>
    );
};

export default Header;
