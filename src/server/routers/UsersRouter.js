// @flow

import Router from './Router';
import User from '../models/User';

export default class UsersRouter extends Router {

  constructor(path: string = '/api/v1/users') {
    super(path);
  }
  
  init(): void {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOneById);
    this.router.post('/', this.saveOne);
    this.router.put('/:id', this.updateOneById);
    this.router.delete('/:id', this.removeOneById);
  }

  getAll(req: $Request, res: $Response): void {
    res.status(200).json([{ name: 'Yusuke' }]);
  }

  getOneById(req: $Request, res: $Response): void {
    res.status(200).json({ message: 'Users.getById(): ' + req.params.id });
  }

  async saveOne(req: $Request, res: $Response): Promise<*> {
    const name = req.body.name;
    const passward = req.body.password;

    try {
      const usr = await User.find({ name });
      if (!usr.length) {
        const user: typeof User = new User();

        user.name = name;
        user.passward = passward;

        await user.save();
        res.send('created');
      } else {
        res.send('found: ' + usr[0].name);
      }
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  updateOneById(req: $Request, res: $Response): void {
    res.status(200).json({ message: 'Users.updateOneById(): ' + req.param.id });
  }

  removeOneById(req: $Request, res: $Response): void {
    res.status(200).json({ message: 'Users.removeOneById(): ' + req.param.id });
  }

}
