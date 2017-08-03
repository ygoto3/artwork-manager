// @flow

export function allowCrossDomain(req: $Request, res: $Response, next: express$NextFunction): void {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.type === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
}
