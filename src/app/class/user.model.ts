export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public team: string,
    public skills: string[] = []
  ) {}
}
