import { connect } from 'react-redux';
import { selectClaimForUri } from 'redux/selectors/claims';
import { doFetchViewCount, selectViewCountForUri } from 'lbryinc';
import { doAnalyticsView } from 'redux/actions/app';
import FileViewCount from './view';

const select = (state, props) => ({
  claim: selectClaimForUri(state, props.uri),
  viewCount: selectViewCountForUri(state, props.uri),
});

const perform = (dispatch) => ({
  fetchViewCount: (claimId) => dispatch(doFetchViewCount(claimId)),
  doAnalyticsView: (uri) => dispatch(doAnalyticsView(uri)),
});

export default connect(select, perform)(FileViewCount);
