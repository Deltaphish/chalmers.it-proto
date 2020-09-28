/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewsList_newslist$ref = any;
export type NewsListPageQueryVariables = {||};
export type NewsListPageQueryResponse = {|
  +news: ?$ReadOnlyArray<?{|
    +$fragmentRefs: NewsList_newslist$ref
  |}>
|};
export type NewsListPageQuery = {|
  variables: NewsListPageQueryVariables,
  response: NewsListPageQueryResponse,
|};
*/


/*
query NewsListPageQuery {
  news {
    ...NewsList_newslist
  }
}

fragment NewsList_newslist on News {
  ...News_news
}

fragment News_news on News {
  title
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewsListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "News",
        "kind": "LinkedField",
        "name": "news",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NewsList_newslist"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NewsListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "News",
        "kind": "LinkedField",
        "name": "news",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9777b20a251b187ec5381cdf45df79a5",
    "id": null,
    "metadata": {},
    "name": "NewsListPageQuery",
    "operationKind": "query",
    "text": "query NewsListPageQuery {\n  news {\n    ...NewsList_newslist\n  }\n}\n\nfragment NewsList_newslist on News {\n  ...News_news\n}\n\nfragment News_news on News {\n  title\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '5edd67bd7c5d69356f8d6cdfe2e611ca';

module.exports = node;
