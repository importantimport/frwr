import { Options } from '$fresh/plugins/twindv1.ts'
import presetTailwind from 'https://esm.sh/@twind/preset-tailwind@1.1.4'
import presetAutoprefix from 'https://esm.sh/@twind/preset-autoprefix@1.0.7'

export default {
  presets: [
    presetTailwind(),
    presetAutoprefix(),
  ],
  selfURL: import.meta.url,
} satisfies Options
