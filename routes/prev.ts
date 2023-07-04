import { Handlers } from '$fresh/server.ts'

import file from '../static/members.json' assert { type: 'json' }

export const handler: Handlers = {
  GET: (req) => {
    const referrer = new URL(req.url).search.slice(1) // ?? req.headers.get('Referer')
    const index = file.members.findIndex(({ url }) => url.includes(referrer))
    const prev = file.members.at(index - 1)

    return Response.redirect(
      (prev ?? file.members.at(-1)!).url,
      307,
    )
  },
}
