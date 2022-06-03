/**
 * Created by ASTAKHOV A.A. on 01.06.2022
 */

import '../styles/global.css';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function MainApp({Component, pageProps}): AppProps {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}

export default MainApp;
