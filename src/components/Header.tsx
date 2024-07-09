import GradientTitle from "./GradientTitle"

type propsType = {
  white_text: string,
  black_text: string,
  img: string,
}

export default function Header(props: propsType) {
  return (
    <header className={`text-white min-h-[400px] h-[400px] bg-[url('/images/${props.img}.webp')] bg-cover bg-no-repeat bg-center`}>
      <div className='bg-header-gradient h-full flex'>
        <div className="flex items-center justify-center ml-5 mr-5 w-full">
          <div className='flex flex-col justify-center w-full max-w-[1600px]'>
          <GradientTitle whiteText={`${props.white_text} `} blackText={`${props.black_text}`} />
          </div>
        </div>
      </div>
    </header>
  )
}