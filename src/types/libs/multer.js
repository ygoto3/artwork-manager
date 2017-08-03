// @flow

declare module 'multer' {
  declare interface Upload {
    single: Function;
  }

  declare module.exports: ({}) => Upload;
}
