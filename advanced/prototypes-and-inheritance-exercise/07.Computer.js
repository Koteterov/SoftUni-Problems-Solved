function createComputerHierarchy() {
  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = responseTime;
    }
  }
  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = width;
      this.height = height;
    }
  }
  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = expectedLife;
    }
  }
  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      this.manufacturer = manufacturer;
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;

      if (this.constructor == Computer) {
        throw new Error("This is an abstract class");
      }
    }
  }

  class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = weight;
      this.color = color;
      this.battery = battery;
    }
    set battery(b) {
        console.log(b);
      if (!(b instanceof Battery)) {
        throw new TypeError("Not an instance of Battery");
      }
      this._battery = b;
    }

    get battery() {
      return this._battery;
    }
  }

  class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.keyboard = keyboard;
      this.monitor = monitor;
    }

    get keyboard() {
      return this._keyboard;
    }
    get monitor() {
      return this._monitor;
    }
    
    set keyboard(k) {
      if (!(k instanceof Keyboard)) {
        throw new TypeError("Not an instance of Keyboard");
      }
      this._keyboard = k;
    }

    set monitor(m) {
      if (!(m instanceof Monitor)) {
        throw new TypeError("Not an instance of Monitor");
      }
      this._monitor = m;
    }
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop,
  };
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery("Energy", 3);
console.log(battery);
let laptop = new Laptop(
  "Hewlett Packard",
  2.4,
  4,
  0.5,
  3.12,
  "Silver",
  battery
);
console.log(laptop);
