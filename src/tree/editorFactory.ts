import { Editor } from "./editor";

export class EditorFactory {
  private static editorInstance: Editor;

  public static createEditor(editorId: string): Editor {
    if (!this.editorInstance) {
      this.editorInstance = new Editor(editorId);
    }

    return this.editorInstance;
  }

  public static getEditor(): Editor {
    if (!this.editorInstance) {
      throw new Error("There is no editor available!");
    }

    return this.editorInstance;
  }
}
