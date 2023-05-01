import { HtmlEvent } from "../model/htmlEvent";

export class Command {
  addCommand(
    element: HTMLElement,
    event: HtmlEvent,
    listener: (this: HTMLElement, e: Event) => any
  ): void {
    element.addEventListener(event, listener);
  }
}
