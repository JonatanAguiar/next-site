import Head from 'next/head';
import Image from 'next/image';

const Tips = () => (
  <>
    <Head>
      <title>Dicas</title>
      <meta property="og:title" content="Dicas para seu desenvolvimento!" />
    </Head>
    <article>
      <h1>Foque, estude sempre pouco além e pratique!</h1>
      <Image
        src="/post/Dicas-para-seu-desenvolvimento/lampada.jpg"
        width={640}
        height={427}
      />
    </article>
  </>
)

export default Tips;