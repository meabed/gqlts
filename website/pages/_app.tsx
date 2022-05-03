import "nextra-theme-docs/style.css";
import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-tsx");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-javascript");

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
