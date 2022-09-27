import * as React from "react"
import { SVGProps } from "react"

const WASM = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"WebAssembly"}</title>
    <path d="M14.745 0v.129a2.752 2.752 0 1 1-5.504 0V0H0v24h24V0h-9.255zm-3.291 21.431-1.169-5.783h-.02l-1.264 5.783H7.39l-1.824-8.497h1.59l1.088 5.783h.02l1.311-5.783h1.487l1.177 5.854h.02l1.242-5.854h1.561l-2.027 8.497h-1.581zm8.755 0-.542-1.891h-2.861l-.417 1.891h-1.59l2.056-8.497h2.509l2.5 8.497h-1.655zm-2.397-6.403-.694 3.118h2.159l-.796-3.118h-.669z" />
  </svg>
)

export default WASM
