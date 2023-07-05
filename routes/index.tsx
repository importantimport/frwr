import { render } from '$gfm'
import { useSignal } from '@preact/signals'
import Counter from '../islands/Counter.tsx'

import meta from '../static/meta.json' assert { type: 'json' }

type Meta = Record<string, string | Record<string, string>>

const about = await fetch(import.meta.resolve('../static/about.md'))
  .then((res) => res.text())
  .then((text) =>
    text.replaceAll(
      /{{ meta\.([a-z.]+) }}/g,
      (_, match) =>
        match.split('.').reduce(
          (acc: Meta, curr: string) => acc[curr],
          meta as Meta,
        ),
    )
  )

export default function Home() {
  const count = useSignal(3)
  return (
    <div class='p-8 mx-auto max-w-screen-md'>
      <img
        src='/logo.svg'
        class='w-32 h-32'
        alt='the fresh logo: a sliced lemon dripping with juice'
      />
      <p class='my-6'>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter count={count} />
      <div
        class='markdown-body'
        dangerouslySetInnerHTML={{ __html: render(about) }}
      />
    </div>
  )
}
