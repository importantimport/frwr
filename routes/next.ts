import { Handlers } from '$fresh/server.ts'

import file from '../static/members.json' assert { type: 'json' }

export const handler: Handlers = {
  GET: (req) => {
    const referrer = new URL(req.url).search.slice(1) // ?? req.headers.get('Referer')
    const index = file.members.findIndex(({ url }) => url === referrer)
    const next = file.members.at(index + 1)

    return Response.redirect(
      (next ?? file.members.at(0)!).url,
      307,
    )
  }
}