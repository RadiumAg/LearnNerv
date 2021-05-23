import { VText,VType } from "../../../nerv-shared/src";

export default function createVText (text: string | number): VText {
  return {
    text,
    vtype: VType.Text,
    dom: null
  }
}
