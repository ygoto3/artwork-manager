// @flow

export function pick(obj: { [string]: any }, keys: string[]): { [string]: any } {
  const newObj = {};
  keys.forEach(k => newObj[k] = obj[k]);
  return newObj;
}

export function omit(obj: { [string]: any }, keys: string[]): { [string]: any } {
  const newObj = Object.assign({}, obj);
  keys.forEach(k => delete newObj[k]);
  return newObj;
}

export function mongo2response(mongo: MongoData[]): ResponseData[] {
  return mongo
    .map(m => {
      m.id = m._id;
      return omit(m, ['__v', '_id']);
    });
}
