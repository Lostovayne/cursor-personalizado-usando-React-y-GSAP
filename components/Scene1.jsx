import Cursor from "./Cursor"

const Scene1 = () => {
  return (
    <div className="flex justify-center items-center h-full" > 
      <h1 className="p-20 max-w-[90vw] text-[4.5vw] text-center text-white" >
        The quick brown fox jumps over the lazy dog
      </h1>
      <Cursor />
    </div>
  )
}
export default Scene1