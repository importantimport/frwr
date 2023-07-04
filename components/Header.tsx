import meta from '../static/meta.json' assert { type: 'json' }

export default () => (
  <div class='bg-white w-full max-w-screen-md mx-auto p-8 flex flex-col md:flex-row gap-4'>
    <div class='flex items-center flex-1'>
      <div class='text-2xl ml-1 font-bold'>
        <a href='/prev'>⏮️</a>
        <span>{meta?.header?.title ?? meta.name}</span>
        <a href='/next'>⏭️</a>
      </div>
    </div>
  </div>
)
