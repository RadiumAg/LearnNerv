import { VirtualNode } from "nervjs/dist/src/types";
import { Portal,VType } from "../../../nerv-shared/src";

export function createPortal (children: VirtualNode, container: Element): Portal {
  return {
    type: container,
    vtype: VType.Portal,
    children,
    dom: null
  }
}
