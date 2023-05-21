class Graph {
    values: number[];
    name: string;

    constructor(values: number[], name: string) {
        this.values = values;
        this.name = name;
    }

    draw(): void {
        console.log(`Drawing ${this.name} graph with values: ${this.values}`);
    }
}
  
class LineGraph extends Graph {
    draw(): void {
        console.log(`Drawing line graph with values: ${this.values}`);
    }
}

class Chart extends Graph {
    draw(): void {
        console.log(`Drawing chart with values: ${this.values}`);
    }
}

class Bar extends Graph {
    draw(): void {
        console.log(`Drawing bar graph with values: ${this.values}`);
    }
}
  
const lineGraph: Graph = new LineGraph([1, 2, 3, 4, 5], "Line Graph");
lineGraph.draw();
const chart: Graph = new Chart([10, 20, 30, 40, 50], "Chart");
chart.draw();
const bar: Graph = new Bar([7, 3, 9, 5, 2], "Bar Graph");
bar.draw();