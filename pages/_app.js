import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
  <div> <Component {...pageProps} />
  <footer>
    <p>2022 riazi</p>
  </footer>
  </div>)
}

export default MyApp
