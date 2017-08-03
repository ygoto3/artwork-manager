// @flow

export function mirror(obj: {[string]: any}) {
  const o = Object.assign({}, obj);
  for (let key in obj) {
    obj[key] = key;
  }
  return o;
}
