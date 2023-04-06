import { TextComponent } from "./components/textComponent";
import { UUIDGenerator } from "./utils/uuidGenerator";

class App {
  execute(): void {
    const text = new TextComponent();
    text.setName("Text");
    text.setUUID(UUIDGenerator.generateUUID());

    console.log(text.getName(), text.getUUID())
  }
}
