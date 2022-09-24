import QuizProvider from '../context/quizContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <QuizProvider> <Component {...pageProps} /> </QuizProvider>
}

export default MyApp
