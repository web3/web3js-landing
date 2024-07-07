import { docsUrl } from "./urls"

export default function Banner() {
  return (
    <div className="relative isolate flex justify-center items-center gap-x-6 overflow-hidden bg-brand-400 px-6 py-2 sm:px-3">
      <p className="text-md text-center font-semibold leading-6 text-gray-900">
        v4 is here! {" "}
        <a href={docsUrl} target="_blank" rel="noreferrer" className="whitespace-nowrap font-semibold">
          Read all about it <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
    </div>
  )
}
