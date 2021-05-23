import { noop } from "lodash"
import { Component } from "nervjs"
import { VirtualNode } from "nervjs/dist/src/types"
import { StatelessComponent } from "react"
import { CompositeComponent } from "../../nerv-shared/src"

export type optionsHook = (vnode: CompositeComponent | StatelessComponent) => void

const options: {
  afterMount: optionsHook
  afterUpdate: optionsHook
  beforeUpdate: optionsHook
  beforeUnmount: optionsHook
  beforeMount: optionsHook
  afterCreate: optionsHook
  beforeRender: (component: Component<any, any>) => void
  roots: VirtualNode[],
  debug: boolean
} = {
    afterMount: noop,
    afterUpdate: noop,
    beforeUpdate: noop,
    beforeUnmount: noop,
    beforeRender: noop,
    beforeMount: noop,
    afterCreate: noop,
    roots: [],
    debug: false
  }

export default options
