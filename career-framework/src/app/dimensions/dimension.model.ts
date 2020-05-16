export class Dimension {
    public name: string;
    public description: string;
    public evidences: string
  
    constructor(name: string, desc: string, evidences: string) {
      this.name = name;
      this.description = desc;
      this.evidences = evidences;
    }
  }
  