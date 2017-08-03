// @flow

import multer from 'multer';
import Router from './Router';
import Artwork from '../models/Artwork';
import { mongo2response } from '../utils/format';

const upload = multer({ dest: 'uploads/artworks' });

function modifyImageSource(artwork: Artwork): Artwork {
  return Object.assign({}, artwork, { imageSource: `/uploads/artworks/${artwork.imageSource}` });
}

export default class ArtworksRouter extends Router {

  constructor(path: string = '/api/v1/artworks') {
    super(path);
  }
  
  init(): void {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOneById);
    this.router.post('/', this.saveOne);
    this.router.put('/:id', this.updateOneById);
    this.router.delete('/:id', this.removeOneById);
    this.router.post('/images', upload.single('image'), this.saveImage);
  }

  async getAll(req: $Request, res: $Response): Promise<*> {
    try {
      const artworks = await Artwork.find().lean();
      res.status(200).json(mongo2response(artworks.map(modifyImageSource)));
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  getOneById(req: $Request, res: $Response): void {
    res.status(200).json({ message: 'ArtworksRouter.getById(): ' + req.params.id });
  }

  async saveOne(req: $Request, res: $Response): Promise<*> {
    const { title, imageSource, description } = req.body;
    try {
      const artwork = new Artwork();
      const _id = await Artwork.count();
      Object.assign(artwork, { _id, title, imageSource, description });
      await artwork.save();
      res.status(200).json({ id: _id, title, imageSource, description });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  updateOneById(req: $Request, res: $Response): void {
    res.status(200).json({ message: 'ArtworksRouter.updateOneById(): ' + req.params.id });
  }

  removeOneById(req: $Request, res: $Response): void {
    res.status(200).json({ message: 'ArtworksRouter.removeOneById(): ' + req.params.id });
  }

  saveImage(req: $Request, res: $Response): void {
    res.status(200).json({ filename: req.file.filename });
  }

}
