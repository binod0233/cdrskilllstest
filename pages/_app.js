import '../styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useRef,useEffect} from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Socials from "../components/Socials";
import TakeMeToTop from "../components/TakeMeToTop";
import TagManager from 'react-gtm-module'
import { SSRProvider } from 'react-bootstrap';
import Script from 'next/script'
import Chatra from "@chatra/chatra";

let config = {
  setup: {
    buttonSize: 75,
    colors: {
      buttonText: "#fff",
      buttonBg: "#203546",
    },
  },
  ID: "rrNdQEsnqBf3wTrLD",
};



const tagManagerArgs = {
  gtmId: 'GTM-PF3C68K'
}

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    TagManager.initialize(tagManagerArgs)

  },[])
  const headScroll = useRef(null);


  const scrollToTop = ()=>{
    headScroll.current.scrollIntoView();
  }
  useEffect(()=>{
    Chatra("init", config);
Chatra("pageView");
  },[])
  return<SSRProvider>
  <div ref={headScroll}></div>
  <Socials />
  <TakeMeToTop scrollToTop={scrollToTop} />
  <Head>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="p:domain_verify" content="e4581bc81db8eda2fd8ab8306e420b39"/>
  <meta name="google-site-verification" content="HHmwlU63B0HUdwmsWjO3ejftL0QN5xQIvkxwkmljGoY" />
  
     
  </Head>
  <Script
        id="clickcease"
        src="https://www.clickcease.com/monitor/stat.js'"
        onLoad={() => {
          var script = document.createElement('script');
      script.async = true; script.type = 'text/javascript';
      var target = 'https://www.clickcease.com/monitor/stat.js';
      script.src = target;var elem = document.head;elem.appendChild(script);
        }}
      />
<Header scrollToTop={scrollToTop}/>
<Component {...pageProps} />
<Footer/>
</SSRProvider> 
}

export default MyApp
