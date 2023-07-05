import { Handlers, PageProps } from '$fresh/server.ts'
import { render } from '$gfm'

import meta from '../static/meta.json' assert { type: 'json' }

type Meta = Record<string, string | Record<string, string>>

export const handler: Handlers = {
  GET: async (_, ctx) => {
    const { docs } = ctx.params
    const markdown = await fetch(import.meta.resolve(`../static/docs/${docs}.md`))
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
      .catch(console.error)
    if (typeof markdown !== 'string')
      return ctx.renderNotFound(
        // @ts-ignore deno-ts(2554)
        await fetch(import.meta.resolve('../static/docs/404.md'))
          .then(res => res.text())
          .catch(console.error)
      )
    else return ctx.render(markdown)
  }
}

export default ({ data }: PageProps) => (
  <div class='p-8 mx-auto max-w-screen-md'>
    <div
      class='markdown-body'
      dangerouslySetInnerHTML={{ __html: render(data) }}
    />
  </div>
)
