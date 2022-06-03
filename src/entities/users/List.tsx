/**
 * Created by ASTAKHOV A.A. on 01.06.2022
 */

import {FC, memo} from 'react';
import {UserDTO} from './types';
import Link from 'next/link';

interface UserListProps {
    users: Array<UserDTO>;
}

const List: FC<UserListProps> = memo(({users}): JSX.Element | null => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {users.map(({id, name, email}) => (
                <Link
                    href={{
                        pathname: '/users/[id]',
                        query: {
                            id,
                        },
                    }}
                >
                    <a key={id} className="p-4 flex flex-col gap-y-2 text-sm border border-black">
                        <span>{name}</span>
                        <span>{email}</span>
                    </a>
                </Link>
            ))}
        </div>
    );
});

export default List;
