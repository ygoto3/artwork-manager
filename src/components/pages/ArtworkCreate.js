// @flow

import { connect } from 'react-redux';

import { createArtwork } from '../../actions/artwork';
import { ArtworkCreate } from '../templates/ArtworkCreate';

export default connect(
  null,
  { createArtwork },
)(ArtworkCreate);

