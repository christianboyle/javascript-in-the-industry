class NameBuilder {
  constructor(name) {
    this.name = name;
  }

  capitalize() {
    this.name = this.name
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  }

  createGreeting() {
    this.name = `Hello, ${this.name}`;
  }

  get modifiedName() {
    return this.name;
  }
}

const nameBuilder = new NameBuilder('christian boyle');
nameBuilder.capitalize();
nameBuilder.createGreeting();
const newName = nameBuilder.modifiedName;

console.log(newName); // Hello, Christian Boyle
