import { Handlers } from '$fresh/server.ts'

import file from '../static/members.json' assert { type: 'json' }

export const handler: Handlers = {
  GET: () =>
    Response.redirect(
      file.members.at(
        Math.floor(Math.random() * file.members.length),
      )!.url,
      307,
    ),
}
