/**
 * Created by ASTAKHOV A.A. on 01.06.2022
 */

import {FC, memo, ReactElement} from 'react';

interface HeaderProps {
    children?: ReactElement;
}

const Header: FC<HeaderProps> = memo(({children}): JSX.Element | null => {
    return <header className="bg-slate-500">{children}</header>;
});

export default Header;
