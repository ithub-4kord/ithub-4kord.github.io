interface PersonInterface {
    getInfo(): void;
    getStatus(): void;
    getFIO(): void;
}

class Persons {
    protected fullName: string;
    protected birthYear: number;
    protected address: string;

    constructor(fullName: string, birthYear: number, address: string) {
        this.fullName = fullName;
        this.birthYear = birthYear;
        this.address = address;
    }
}

class Supervisers extends Persons implements PersonInterface {
    private position: string;
    private department: string | undefined;
    private phone: string;
    private static count: number = 0;

    constructor(
        fullName: string,
        position: string,
        birthYear: number,
        department: string | undefined,
        phone: string,
        address: string
    ) {
        super(fullName, birthYear, address);
        this.position = position;
        this.department = department;
        this.phone = phone;
        Supervisers.count++;
    }

    getInfo(): void {
        console.log(`Full Name: ${this.fullName}`);
        console.log(`Position: ${this.position}`);
        console.log(`Birth Year: ${this.birthYear}`);
        console.log(`Department: ${this.department}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Address: ${this.address}`);
    }

    getStatus(): void {
        console.log(`Status: Supervisor`);
    }

    getFIO(): void {
        console.log(`Full Name: ${this.fullName}`);
    }

    static getCount(): number {
        return Supervisers.count;
    }
}

class Jobs extends Persons implements PersonInterface {
    private position: string;
    private department: string | undefined;
    private phone: string;
    private static count: number = 0;

    constructor(
        fullName: string,
        position: string,
        birthYear: number,
        department: string | undefined,
        phone: string,
        address: string
    ) {
        super(fullName, birthYear, address);
        this.position = position;
        this.department = department;
        this.phone = phone;
        Jobs.count++;
    }

    getInfo(): void {
        console.log(`Full Name: ${this.fullName}`);
        console.log(`Position: ${this.position}`);
        console.log(`Birth Year: ${this.birthYear}`);
        console.log(`Department: ${this.department}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Address: ${this.address}`);
    }

    getStatus(): void {
        console.log(`Status: Job`);
    }

    getFIO(): void {
        console.log(`Full Name: ${this.fullName}`);
    }

    static getCount(): number {
        return Jobs.count;
    }
}

class Clients extends Persons implements PersonInterface {
    private phone: string;
    private static count_clients: number = 0;

    constructor(fullName: string, birthYear: number, phone: string, address: string) {
        super(fullName, birthYear, address);
        this.phone = phone;
        Clients.count_clients++;
    }

    getInfo(): void {
        console.log(`Full Name: ${this.fullName}`);
        console.log(`Birth Year: ${this.birthYear}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Address: ${this.address}`);
    }

    getStatus(): void {
        console.log(`Status: Client`);
    }

    getFIO(): void {
        console.log(`Full Name: ${this.fullName}`);
    }

    static getCount(): number {
        return Clients.count_clients;
    }
}

const supervisor1: PersonInterface = new Supervisers('Alex Doe', 'Supervisor', 1985, 'Sales', '123456789', '123 Main St');

const supervisor2: PersonInterface = new Supervisers('Jane Smith', 'Supervisor', 1990, 'Marketing', '987654321', '456 Elm St');

const job1: PersonInterface = new Jobs('Alice Johnson', 'Job', 1995, 'Marketing', '555555555', '789 Oak St');

const client1: PersonInterface = new Clients('Bob Anderson', 1980, '777777777', '321 Pine St');

supervisor1.getInfo();
supervisor1.getStatus();
supervisor1.getFIO();

console.log('-----------------');

supervisor2.getInfo();
supervisor2.getStatus();
supervisor2.getFIO();

console.log('-----------------');

job1.getInfo();
job1.getStatus();
job1.getFIO();

console.log('-----------------');

client1.getInfo();
client1.getStatus();
client1.getFIO();

console.log('-----------------');

console.log(`Number of Supervisers: ${Supervisers.getCount()}`);
console.log(`Number of Jobs: ${Jobs.getCount()}`);
console.log(`Number of Clients: ${Clients.getCount()}`);
