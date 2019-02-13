import { FilterQuery } from './DatabaseDriver';
import { Utils } from '../utils/Utils';
import { MySqlConnection } from '../connections/MySqlConnection';
import { AbstractSqlDriver } from './AbstractSqlDriver';
import { EntityData, IEntityType } from '../decorators/Entity';

export class MySqlDriver extends AbstractSqlDriver<MySqlConnection> {

  protected readonly connection = new MySqlConnection(this.options, this.logger);

  async count<T extends IEntityType<T>>(entityName: string, where: FilterQuery<T>): Promise<number> {
    const qb = this.createQueryBuilder(entityName);
    const res = await qb.count('id', true).where(where).execute();

    return res[0][0].count;
  }

  async find<T extends IEntityType<T>>(entityName: string, where: FilterQuery<T>, populate: string[] = [], orderBy: { [p: string]: 1 | -1 } = {}, limit?: number, offset?: number): Promise<T[]> {
    const qb = this.createQueryBuilder(entityName);
    qb.select('*').populate(populate).where(where).orderBy(orderBy);

    if (limit !== undefined) {
      qb.limit(limit, offset);
    }

    const res = await qb.execute();

    return res[0].map((r: any) => this.mapResult(r, this.metadata[entityName]));
  }

  async findOne<T extends IEntityType<T>>(entityName: string, where: FilterQuery<T> | string, populate: string[] = []): Promise<T | null> {
    if (Utils.isPrimaryKey(where)) {
      where = { id: where };
    }

    const qb = this.createQueryBuilder(entityName);
    const res = await qb.select('*').populate(populate).where(where).limit(1).execute();

    return this.mapResult(res[0][0], this.metadata[entityName]);
  }

  async nativeInsert<T extends IEntityType<T>>(entityName: string, data: EntityData<T>): Promise<number> {
    const collections = this.extractManyToMany(entityName, data);
    const qb = this.createQueryBuilder(entityName);
    const res = await qb.insert(data).execute();
    await this.processManyToMany(entityName, res[0].insertId, collections);

    return res[0].insertId;
  }

  async nativeUpdate<T extends IEntityType<T>>(entityName: string, where: FilterQuery<T>, data: EntityData<T>): Promise<number> {
    if (Utils.isPrimaryKey(where)) {
      where = { id: where };
    }

    const collections = this.extractManyToMany(entityName, data);
    let res: any[] = [];

    if (Object.keys(data).length) {
      const qb = this.createQueryBuilder(entityName);
      res = await qb.update(data).where(where).execute();
    }

    await this.processManyToMany(entityName, Utils.extractPK(data.id || where)!, collections);

    return res[0] ? res[0].affectedRows : 0;
  }

  async nativeDelete<T extends IEntityType<T>>(entityName: string, where: FilterQuery<T> | string | any): Promise<number> {
    if (Utils.isPrimaryKey(where)) {
      where = { id: where };
    }

    const qb = this.createQueryBuilder(entityName);
    const res = await qb.delete(where).execute();

    return res[0].affectedRows;
  }

}
