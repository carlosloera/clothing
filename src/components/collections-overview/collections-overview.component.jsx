import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collections-overview.styles.scss';
import  CollectionPreview  from '../preview-collection/preview-collection.component';
import { selectCollectionsForPreview }  from '../../redux/shop/shop.selector';

const CollectionsOverview = ({collections}) => (
  <div className='collection-overview'>
    {
      collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps}/>
      ))
    }
  </div>
)
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionsOverview);
