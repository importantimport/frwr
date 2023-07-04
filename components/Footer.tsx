import BrandGithub from 'https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx'

export default () => (
  <div class='bg-white flex flex-row w-full max-w-screen-md gap-8 md:gap-16 px-8 py-8 text-sm mx-auto'>
    <div class='flex items-center gap-1'>
      <span class='text-gray-500'>
        Powered By
      </span>
      <a class='font-bold text-2xl' href='https://github.com/importantimport/frwr'>
        🍋🕸💍
      </a>
    </div>
    <span class='flex items-center text-center text-gray-500 mx-auto sm:opacity-0'>|</span>
    <a
      href='https://github.com/denoland/fresh'
      class='inline-block hover:text-black my-auto'
      aria-label='GitHub'
    >
      <BrandGithub />
    </a>
  </div>
)
