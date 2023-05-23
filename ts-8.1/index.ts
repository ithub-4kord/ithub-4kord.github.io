interface PersonInterface {
    getInfo(): void;
    getStatus(): void;
    getFIO(): void;
  }
  
  class Supervisers implements PersonInterface {
    private fullName: string;
    private position: string;
    private birthYear: number;
    private department: string | undefined;
    private phone: string;
    private address: string;
  
    constructor(fullName: string, position: string, birthYear: number, department: string | undefined, phone: string, address: string) {
      this.fullName = fullName;
      this.position = position;
      this.birthYear = birthYear;
      this.department = department;
      this.phone = phone;
      this.address = address;
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
  }
  
  class Jobs implements PersonInterface {
    private fullName: string;
    private position: string;
    private birthYear: number;
    private department: string | undefined;
    private phone: string;
    private address: string;
  
    constructor(fullName: string, position: string, birthYear: number, department: string | undefined, phone: string, address: string) {
      this.fullName = fullName;
      this.position = position;
      this.birthYear = birthYear;
      this.department = department;
      this.phone = phone;
      this.address = address;
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
  }
  
  class Clients implements PersonInterface {
    private fullName: string;
    private birthYear: number;
    private phone: string;
    private address: string;
  
    constructor(fullName: string, birthYear: number, phone: string, address: string) {
      this.fullName = fullName;
      this.birthYear = birthYear;
      this.phone = phone;
      this.address = address;
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
  }
  
  const supervisor: PersonInterface = new Supervisers('Alex Doe', 'Supervisor', 1985, 'Sales', '123456789', '123 Main St');
  
  const job: PersonInterface = new Jobs('Alice Smith', 'Job', 1990, 'Marketing', '987654321', '456 Elm St');
  
  const client: PersonInterface = new Clients('Bob Johnson', 1982, '555555555', '789 Oak St');
  
  supervisor.getInfo();
  supervisor.getStatus();
  supervisor.getFIO();
  
  console.log('-----------------');
  
  job.getInfo();
  job.getStatus();
  job.getFIO();
  
  console.log('-----------------');
  
  client.getInfo();
  client.getStatus();
  client.getFIO();
  