type IdentifierFn<T> = (object: T) => string;

export class InMemoryStorage<T> {
  private _data = new Map<string, T>();

  constructor(private readonly _identifierFn: IdentifierFn<T>) {}

  async findAll(): Promise<T[]> {
    return [...this._data.values()];
  }

  async addOrUpdate(item: T): Promise<T> {
    this._data.set(this._identifierFn(item), item);
    return item;
  }

  async getItem(id: string): Promise<T> {
    return this._data.get(id);
  }

  async delete(id: string): Promise<void> {
    const found = await this._data.has(id);
    if (!found) throw new Error('No data with id ' + id);

    await this._data.delete(id);
  }
}
