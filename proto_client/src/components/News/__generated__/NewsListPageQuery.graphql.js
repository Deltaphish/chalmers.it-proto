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
  +articleRecords: ?{|
    +$fragmentRefs: NewsList_newslist$ref
  |}
|};
export type NewsListPageQuery = {|
  variables: NewsListPageQueryVariables,
  response: NewsListPageQueryResponse,
|};
*/


/*
query NewsListPageQuery {
  articleRecords {
    ...NewsList_newslist
  }
}

fragment NewsList_newslist on ArticleRecords {
  articles {
    ...News_news
  }
}

fragment News_news on Article {
  title
  details
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
        "concreteType": "ArticleRecords",
        "kind": "LinkedField",
        "name": "articleRecords",
        "plural": false,
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
        "concreteType": "ArticleRecords",
        "kind": "LinkedField",
        "name": "articleRecords",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Article",
            "kind": "LinkedField",
            "name": "articles",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "details",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f38bb4ca1aff432cde3283cbbc46f025",
    "id": null,
    "metadata": {},
    "name": "NewsListPageQuery",
    "operationKind": "query",
    "text": "query NewsListPageQuery {\n  articleRecords {\n    ...NewsList_newslist\n  }\n}\n\nfragment NewsList_newslist on ArticleRecords {\n  articles {\n    ...News_news\n  }\n}\n\nfragment News_news on Article {\n  title\n  details\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = 'e03d72eab2ef4c4bd9d41c56b9d13ded';

module.exports = node;
