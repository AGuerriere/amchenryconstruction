
type propsType = {
  whiteText: string,
  blackText: string,
}


export default function GradientTitle(props: propsType) {
  return (
    <div className="bg-gradient-to-r from-cyan-800 to-teal-600 justify-start items-center gap-2.5 flex w-fit p-3">
      <div className="text-white text-2xl font-extrabold tracking-wide ">{props.whiteText}<span className="text-gray-900 text-2xl font-extrabold tracking-wide">{props.blackText}</span></div>
    </div>
  )
}