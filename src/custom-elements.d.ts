import type {
  CustomElements,
  CustomCssProperties,
} from "@awesome.me/webawesome/dist/custom-elements-jsx";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  interface CSSProperties extends CustomCssProperties {}
}
