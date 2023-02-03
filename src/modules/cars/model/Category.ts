import { randomUUID as uuid } from 'node:crypto'

class Category {

  id?: string;
  name: String;
  description: String;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
};

export { Category }