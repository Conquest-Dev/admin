import * as React from "react";
import { PlasmicRadixUiButton } from "./plasmic/radix_ui/PlasmicRadixUiButton";

function RadixUiButton_(props, ref) {
  const { plasmicProps } = PlasmicRadixUiButton.useBehavior(props, ref);
  return <PlasmicRadixUiButton {...plasmicProps} />;
}

const RadixUiButton = React.forwardRef(RadixUiButton_);

export default Object.assign(RadixUiButton, { __plumeType: "button" });
