import Head from 'next/head'
import Link from 'next/link'
import About from './about.mdx'

import { FaGithub } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Web DNA</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">
                    About the <Link href="/"><a>Web DNA</a></Link> Team
                </h1>

                <div className="flex-container">
                    <aside>
                        <div className="sidebar">
                            <a href="https://github.com/DSC-ISU/web-dna">
                                <FaGithub size="3em" style={{ width: "100%", margin: "auto" }} />
                            </a>
                            <a href="https://dsc.community.dev/iowa-state-university/">
                                <img src="dsc.png" alt="dsc" width="100%" style={{ "margin": "1rem 0rem" }} />
                            </a>
                            <Link href="/about">
                                <a>
                                    <AiFillInfoCircle size="3em" style={{ width: "100%", margin: "auto" }} />
                                </a>
                            </Link>
                        </div>
                    </aside>

                    <div className="content">
                        <About />
                    </div>
                </div>
            </main>

            <footer>
                <a
                    href="https://dsc.community.dev/iowa-state-university/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Built with ♥ by DSC@ISU
                </a>
            </footer>

            <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .flex-container{
          width: 100%;
          min-height: 300px;
          margin: 0 auto;
          display: -webkit-flex;
          display: flex;
        }

        main {
          padding: 3rem 0rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .sidebar {
          border-bottom: 1px solid #E8EAED;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          border-radius: 8px;
          margin: 4em 0;
          position: sticky;
          float: left;
          top: 2em;
          z-index: 1 !important;
          background-color: white;
          width: 5rem;
          padding: 1rem;
        }

        .content {
          padding: 1rem 5rem;
          max-width: 800px;
          float: left;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }
      `}</style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
}
