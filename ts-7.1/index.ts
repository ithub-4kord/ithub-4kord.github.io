abstract class Geometry {
    protected width: number;
    protected color: string;

    constructor(width: number, color: string) {
        this.width = width;
        this.color = color;
    }

    abstract draw(): void;
}

class Line extends Geometry {
    private x1: number;
    private y1: number;
    private x2: number;
    private y2: number;

    constructor(x1: number, y1: number, x2: number, y2: number, width: number, color: string) {
        super(width, color);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    draw(): void {
        console.log(`Drawing a line from (${this.x1}, ${this.y1}) to (${this.x2}, ${this.y2})`);
        console.log(`Width: ${this.width}, Color: ${this.color}`);
    }
}

class Rect extends Geometry {
    private x1: number;
    private y1: number;
    private x2: number;
    private y2: number;

    constructor(x1: number, y1: number, x2: number, y2: number, lineWidth: number, color: string) {
        super(lineWidth, color);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    draw(): void {
        const width = Math.abs(this.x2 - this.x1);
        const height = Math.abs(this.y2 - this.y1);

        console.log(`Drawing a rectangle from (${this.x1}, ${this.y1}) to (${this.x2}, ${this.y2})`);
        console.log(`Width: ${width}, Height: ${height}`);
        console.log(`Line Width: ${this.width}, Color: ${this.color}`);
    }
}

class Ellipse extends Geometry {
    private cx: number;
    private cy: number;
    private rx: number;
    private ry: number;

    constructor(cx: number, cy: number, rx: number, ry: number, lineWidth: number, color: string) {
        super(lineWidth, color);
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = ry;
    }

    draw(): void {
        console.log(`Drawing an ellipse at (${this.cx}, ${this.cy})`);
        console.log(`Radius X: ${this.rx}, Radius Y: ${this.ry}`);
        console.log(`Line Width: ${this.width}, Color: ${this.color}`);
    }
}
  
const line: Geometry = new Line(0, 0, 100, 100, 2, 'black');
line.draw();
const rect: Geometry = new Rect(50, 50, 200, 200, 3, 'blue');
line.draw();
const ellipse: Geometry = new Ellipse(150, 150, 100, 50, 1, 'red');
line.draw();