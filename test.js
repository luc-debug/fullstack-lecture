const fs = require("fs/promises");
async function readFile() {
try {
const filePath = "./example.txt";
const content = await fs.readFile(filePath, "utf-8");
console.log("Inhalt der Datei:", content);
} catch (error) {
console.error("Fehler beim Lesen der Datei:", error);
}
}
readFile();
console.log("Nächster Schritt");