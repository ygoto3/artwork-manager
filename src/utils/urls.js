// @flow

export function isImage(url: string): boolean {
  return !!url.match(/(\.png)|(\.jpg)$/);
}

export function isAPI(url: string): boolean {
  return !!url.match(/\/api\//);
}

export function isSameOrigin(url: string): boolean {
  return !!~url.indexOf(location.origin);
}
