class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(){
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param = `height: ${this.height}px; width: ${this.width}px; bg: ${this.bg}; fontSize: ${this.fontSize}px; textAlign: ${this.textAlign}`;
    }
}
const item = new Options(300, 350, "red", 14, "center");
item.createDiv();