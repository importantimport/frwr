import { Head } from '$fresh/runtime.ts'
import { CSS, render } from "$gfm"
import { useSignal } from '@preact/signals'
import Counter from '../islands/Counter.tsx'

import file from '../static/members.json' assert { type: 'json' }

const about = await fetch(import.meta.resolve('../static/about.md')).then(res => res.text())

export default function Home() {
  const count = useSignal(3)
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <div class='p-4 mx-auto max-w-screen-md'>
        <img
          src='/logo.svg'
          class='w-32 h-32'
          alt='the fresh logo: a sliced lemon dripping with juice'
        />
        <p class='my-6'>
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter count={count} />
      </div>
      {file.members.map((member) => (<p>{member.title}</p>))}
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: render(about) }}
      />
    </>
  )
}
