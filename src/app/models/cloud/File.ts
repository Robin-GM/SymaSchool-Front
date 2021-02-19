export class File {
    constructor(
      public name: string,
      public size: number,
      public type: string,
      public path: string,
      public historicPath?: string,
    ) {}
  }