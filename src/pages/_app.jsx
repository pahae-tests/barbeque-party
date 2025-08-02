import React from 'react'
import styles from '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  // function render() {
  //   const space = [];
  //   const colors = ['bg-red-600', 'bg-blue-500', 'bg-green-400', 'bg-white'];
  //   for (let i = 0; i < 100; i++) {
  //     const top = Math.floor(Math.random() * 100);
  //     const left = Math.floor(Math.random() * 100);
  //     const color = Math.floor(Math.random() * colors.length);
  //     space.push(
  //       <div
  //         key={i}
  //         className={`${colors[color]} w-1 h-1 rounded-full fixed`}
  //         style={{ top: `${top}%`, left: `${left}%` }}
  //       ></div>
  //     );
  //   }
  //   return space;
  // }

  return (
    <>
      {/* {render()} */}
      <Head>
        <link rel='icon' href='/logo.png'></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
