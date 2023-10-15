'use client';

export default function VariantChangeComponent({name, values, variant, variantChangeHandler}){
    
    return(
    <div className="flex border-t border-gray-200 py-2">
    <span className="text-gray-500 flex items-center">{name.toUpperCase()}</span>
    <span className=" relative ml-auto text-gray-900">
      <select onChange = {(e)=>{ variantChangeHandler({...variant, [name]: e.target.value})}}className="rounded border appearance-none bg-transparent border-blue-300 py-1 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-xs md:text-sm pl-2 pr-10">

        {
            values.map(val=><option key = {val} value = {val.toUpperCase()}>{val.toUpperCase()}</option>)
        }
      </select>
      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
      <i className="bi bi-caret-down-fill"></i>
      </span>
    </span>
  </div>
    )
}