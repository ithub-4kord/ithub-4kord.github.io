class Nota {
    private id: number;
    private name: string;
    private duration: string;
    private hasSharp: boolean;
    private hasFlat: boolean;

    constructor(id: number, name: string, duration: string, hasSharp: boolean, hasFlat: boolean) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.hasSharp = hasSharp;
        this.hasFlat = hasFlat;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDuration(): string {
        return this.duration;
    }

    getHasSharp(): boolean {
        return this.hasSharp;
    }

    getHasFlat(): boolean {
        return this.hasFlat;
    }

    setId(id: number): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }

    setDuration(duration: string): void {
        this.duration = duration;
    }

    setHasSharp(hasSharp: boolean): void {
        this.hasSharp = hasSharp;
    }

    setHasFlat(hasFlat: boolean): void {
        this.hasFlat = hasFlat;
    }
}

class Do extends Nota {
    constructor() {
        super(1, "Do", "Whole", false, false);
    }
}

class Re extends Nota {
    constructor() {
        super(2, "Re", "Whole", false, false);
    }
}

class Mi extends Nota {
    constructor() {
        super(3, "Mi", "Whole", false, false);
    }
}

class Fa extends Nota {
    constructor() {
        super(4, "Fa", "Whole", false, false);
    }
}

class Sol extends Nota {
    constructor() {
        super(5, "Sol", "Whole", false, false);
    }
}

class La extends Nota {
    constructor() {
        super(6, "La", "Whole", false, false);
    }
}

class Si extends Nota {
    constructor() {
        super(7, "Si", "Whole", false, false);
    }
}

const doNota: Nota = new Do();
const reNota: Nota = new Re();
const miNota: Nota = new Mi();
const faNota: Nota = new Fa();
const solNota: Nota = new Sol();
const laNota: Nota = new La();
const siNota: Nota = new Si();

console.log(`Nota ID: ${doNota.getId()}, Name: ${doNota.getName()}, Duration: ${doNota.getDuration()}, Sharp: ${doNota.getHasSharp()}, Flat: ${doNota.getHasFlat()}`);
console.log(`Nota ID: ${reNota.getId()}, Name: ${reNota.getName()}, Duration: ${reNota.getDuration()}, Sharp: ${reNota.getHasSharp()}, Flat: ${reNota.getHasFlat()}`);
console.log(`Nota ID: ${miNota.getId()}, Name: ${miNota.getName()}, Duration: ${miNota.getDuration()}, Sharp: ${miNota.getHasSharp()}, Flat: ${miNota.getHasFlat()}`);
console.log(`Nota ID: ${faNota.getId()}, Name: ${faNota.getName()}, Duration: ${faNota.getDuration()}, Sharp: ${faNota.getHasSharp()}, Flat: ${faNota.getHasFlat()}`);
console.log(`Nota ID: ${solNota.getId()}, Name: ${solNota.getName()}, Duration: ${solNota.getDuration()}, Sharp: ${solNota.getHasSharp()}, Flat: ${solNota.getHasFlat()}`);
console.log(`Nota ID: ${laNota.getId()}, Name: ${laNota.getName()}, Duration: ${laNota.getDuration()}, Sharp: ${laNota.getHasSharp()}, Flat: ${laNota.getHasFlat()}`);
console.log(`Nota ID: ${siNota.getId()}, Name: ${siNota.getName()}, Duration: ${siNota.getDuration()}, Sharp: ${siNota.getHasSharp()}, Flat: ${siNota.getHasFlat()}`);  