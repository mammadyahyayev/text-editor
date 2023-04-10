import { TextComponent } from "./components/textComponent";
import { UUIDGenerator } from "./utils/uuidGenerator";

class App {
  execute(): void {
    const text = new TextComponent();
    text.name  = "Text";
    text.uuid = UUIDGenerator.generateUUID();

    console.log(text.name, text.uuid)
  }
}

const app = new App()
app.execute()