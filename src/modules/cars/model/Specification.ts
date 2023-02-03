
import { randomUUID as uuid } from 'node:crypto'

class Specification {

  id?: string;
  name: String;
  description: String;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Specification }