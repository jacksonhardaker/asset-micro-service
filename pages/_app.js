import App from 'next/app'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron, debug } from '../styletron'
import { GithubCorner } from '../components/GitHubCorner'

export default class _App extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <GithubCorner />
        <main>
          <Component {...pageProps} />
        </main>
      </StyletronProvider>
    )
  }
}
