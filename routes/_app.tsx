import { AppProps } from '$fresh/server.ts'

import { Head } from '$fresh/runtime.ts'
import { CSS } from '$gfm'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'

import file from '../static/members.json' assert { type: 'json' }
import meta from '../static/meta.json' assert { type: 'json' }

export default ({ Component }: AppProps) => (
  <>
    <Head>
      <title>{meta.name}</title>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
    </Head>
    <main class='flex flex-col lg:flex-row'>
      <div class='flex-1'>
        <Header />
        <Component />
        <Footer />
      </div>
      <div class='flex-1'>
        {file.members.map((member) => <p>{member.title}</p>)}
      </div>
    </main>
  </>
)
