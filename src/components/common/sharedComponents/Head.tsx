import Head from 'next/head'

type Props = {
  title: string | null;
  subTitle?: string;
  content?: string;
}

function AppHead({title, subTitle, content}: Props) {
  return (
    <Head>
      <title>NLR1 - {title || ''} {subTitle && `| ${subTitle}`}</title>
      <meta name="description" content={`Philippine Eagles NLR1 Northern Luzon Region 1 - ${content}`} />
      <meta name="google-site-verification" content="2VJE6y9w9P0c2HTyFmZQBdHzsFB6ff6Izfi_AHDk9zI" />
      <link rel="icon" href="/images/nlr1.png" />
      {/* <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@800&display=swap" rel="stylesheet" />
      <link
        rel="preload"
        href="/fonts/brush script.ttf"
        as="font"
        type="font/brushscript"
        crossOrigin=""
      /> */}
    </Head>
  )
}

export default AppHead