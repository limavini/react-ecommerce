import React from "react";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom"; 
import CollectionPage from "../collection/collection.component"

// Sempre tem esses parametros qnd usa Route
const ShopPage = ({match, location, history}) => (
  <div className="shop-page">
    <Route exact path={match.path} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage } />
  </div>
);

export default ShopPage;
