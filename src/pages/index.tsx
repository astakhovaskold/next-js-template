/**
 * Created by ASTAKHOV A.A. on 01.06.2022
 */

import {memo} from 'react';
import {NextPage} from 'next';
import Layout from '../components/Layout/Layout';
import DocumentTitle from '../components/Utils/DocumentTitle';

const Home: NextPage = memo(() => {
    return (
        <>
            <DocumentTitle title="Главная" />
            <Layout>
                <div className="container">
                    <h1 className="h1">Главная страница</h1>
                </div>
            </Layout>
        </>
    );
});

export default Home;
