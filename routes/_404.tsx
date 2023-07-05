import { Handlers, PageProps } from '$fresh/server.ts'
import { render } from '$gfm'

export const handler: Handlers = {
  GET: async (_, ctx) =>
    ctx.render(await fetch(import.meta.resolve(`../static/docs/404.md`))
      .then((res) => res.text())
      .catch(console.error))
}

export default ({ data }: PageProps) => (
  <div class='p-8 mx-auto max-w-screen-md'>
    <div
      class='markdown-body'
      dangerouslySetInnerHTML={{ __html: render(data) }}
    />
  </div>
)
