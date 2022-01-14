import '@styles/global.scss'
import '@fortawesome/fontawesome-free/css/all.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        const threeScript = document.createElement('script');
        threeScript.setAttribute('id', 'threeScript');
        threeScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js');
        document.getElementsByTagName('head')[0].appendChild(threeScript);
        return () => {
            if (threeScript) {
                threeScript.remove();
            }
        };
    }, []);
  return <Component {...pageProps} />;
}