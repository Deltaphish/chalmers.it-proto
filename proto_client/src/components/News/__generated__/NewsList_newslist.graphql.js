/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type News_news$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewsList_newslist$ref: FragmentReference;
declare export opaque type NewsList_newslist$fragmentType: NewsList_newslist$ref;
export type NewsList_newslist = {|
  +articles: ?$ReadOnlyArray<?{|
    +$fragmentRefs: News_news$ref
  |}>,
  +$refType: NewsList_newslist$ref,
|};
export type NewsList_newslist$data = NewsList_newslist;
export type NewsList_newslist$key = {
  +$data?: NewsList_newslist$data,
  +$fragmentRefs: NewsList_newslist$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NewsList_newslist",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "News_news"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ArticleRecords",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '8e4abd7ff7ecdd05be9f2cf60353c57c';

module.exports = node;
