import { Editor } from "../types/editor.types";
import { editorInChief } from "./editor-in-chief";
import { associateEditors } from "./associate-editors";

export const editors: Editor[] = [editorInChief, ...associateEditors];