import { VirtualChildren } from "nervjs/dist/src/types"
import { Props } from "react"
import { Component } from ".."
import { VNode,VType,EMPTY_OBJ } from "../../../nerv-shared/src"


function createVNode (
  type: string,
  props: Props,
  children: VirtualChildren,
  key,
  namespace: string,
  owner: Component<any, any>,
  ref: Function | string | null | undefined
): VNode {
  return {
    type,
    key: key || null,
    vtype: VType.Node,
    props: props || EMPTY_OBJ,
    children,
    namespace: namespace || null,
    _owner: owner,
    dom: null,
    ref: ref || null
  }
}

export default createVNode
