import { User } from './model';

export class UserListGenerator {
  generate(labels: string[], numRange: [number, number], width: number): User[] {
    const result: User[] = [];
    for (let i = 0; i < width; i += 1) {
      result.push(this.generateNode(labels, numRange));
    }
    return result;
  }

  generateNumber(numRange: [number, number]) {
    const diff = numRange[1] - numRange[0];
    return numRange[0] + Math.floor(Math.random() * diff);
  }

  generateName(names: string[]) {
    return names[Math.floor(Math.random() * names.length)];
  }

  private generateNode(names: string[], numRange: [number, number]): User {
    return {
      name: this.generateName(names),
      num: this.generateNumber(numRange)
    };
  }
}
