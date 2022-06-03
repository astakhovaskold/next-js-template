/**
 * Created by ASTAKHOV A.A. on 01.06.2022
 */

import {FC, memo} from 'react';
import {UserDTO} from './types';

interface PageProps {
    user: UserDTO;
}

const Page: FC<PageProps> = memo(({user}): JSX.Element | null => {
    const {name, username, email, website} = user;

    return (
        <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-2">
                <span className="text-lg font-bold">{name}</span>
                <span className="text-sm">{username}</span>
            </div>

            <div className="flex flex-col gap-y-2">
                <span>
                    <span className="text-secondary">Email:&nbsp;</span>
                    {email}
                </span>

                <span>
                    <span className="text-secondary">Website:&nbsp;</span>
                    {website}
                </span>
            </div>
        </div>
    );
});

export default Page;
