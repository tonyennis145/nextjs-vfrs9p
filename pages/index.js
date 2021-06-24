import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  Editmode,
  Chunk,
  ChunkCollection,
  useCollectionChunks,
  ChunkFieldValue,
  CustomChunkCollection,
  CollectionItemWrapper
} from 'editmode-react';

export default function Home() {
  const chunks = useCollectionChunks('col_nP3L91mH6svJ');
  return (
    <Editmode projectId="prj_Y5HfCBS4rqZg">
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </Head>

        <main className="bg-white">
          <section className="shadow rounded p-5">
            <h1 className="text-2xl">Render the lfogo</h1>
            <span className="text-">Result</span>
            <div style={{ width: '20px', display: 'flex' }}>
              <Chunk identifier="logo_icon" />
              <Chunk identifier="company_name" />
            </div>

            <pre>{`
  <div style={{ width: '20px', display: 'flex' }}>
    <Chunk identifier="logo_icon" />
    <Chunk identifier="company_name" />
  </div>
            `}</pre>
          </section>

          <div class={styles.section}>
            <h1 className={styles.title}>Render the top navigation</h1>
            <pre class={styles.code}>{`
  <div style={{ width: '20px', display: 'flex' }}>
    <Chunk identifier="logo_icon" />
    <Chunk identifier="company_name" />
  </div>
            `}</pre>

            <div style={{ width: '20px', display: 'flex' }}>
              <CustomChunkCollection identifier="something" chunks={chunks}>
                {chunks.map(chunk => (
                  <CollectionItemWrapper chunk={chunk} key={chunk.identifier}>
                    {getFieldValue('Title', chunk)}
                    <h2>
                      <ChunkFieldValue identifier="Title" />
                    </h2>
                    <p>
                      <ChunkFieldValue identifier="Url" />
                    </p>
                  </CollectionItemWrapper>
                ))}
              </CustomChunkCollection>
            </div>
          </div>
        </main>
      </div>
    </Editmode>
  );
}
