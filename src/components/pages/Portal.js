// @flow

import { connect } from 'react-redux';

import { fetchArtworks } from '../../actions/artwork';
import { Portal } from '../templates/Portal';

const mapStateToProps = state => ({
  artworks: state.artworks,
});

export default connect(
  mapStateToProps,
  { fetchArtworks },
)(Portal);
