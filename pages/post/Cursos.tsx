import Head from 'next/head';
import Image from 'next/image';

const Curses = () => (
  <>
    <Head>
      <title>Programação</title>
      <meta property="og:title" content="Cursos de programação!" />
    </Head>
    <article>
      <h1>Descubra um novo universo e evolue seu aprendizado!</h1>
      <Image
        src="/post/Cursos/javascript-caneca.jpg"
        width={640}
        height={427}
      />
    </article>
  </>
)

export default Curses