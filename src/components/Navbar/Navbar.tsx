/**
 * Created by ASTAKHOV A.A. on 01.06.2022
 */

import {FC, memo} from 'react';
import Link from 'next/link';

const Navbar: FC = memo((): JSX.Element | null => {
    return (
        <nav className="container">
            <ul className="py-4 flex gap-x-8">
                <li className="text-white/80 hover:text-white">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                </li>
                <li className="text-white/80 hover:text-white">
                    <Link href="/users">
                        <a>Пользователи</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
});

export default Navbar;
