

export default function Banner() {
  return (
    <div className="relative isolate flex justify-center items-center gap-x-6 overflow-hidden bg-brand-400 px-6 py-2 sm:px-3">
      <p className="text-md text-center font-semibold leading-6 text-gray-900">
      Web3.js libraries are being sunset on March 4th, 2025. For migration guides and more details please refer to
        <a href="https://blog.chainsafe.io/web3-js-sunset/" target="_blank" rel="noreferrer" className="whitespace-nowrap font-semibold">
        Chainsafe blog <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
    </div>
  )
}
