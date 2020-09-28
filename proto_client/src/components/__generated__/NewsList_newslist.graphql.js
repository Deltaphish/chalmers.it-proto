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
export type NewsList_newslist = $ReadOnlyArray<{|
  +$fragmentRefs: News_news$ref,
  +$refType: NewsList_newslist$ref,
|}>;
export type NewsList_newslist$data = NewsList_newslist;
export type NewsList_newslist$key = $ReadOnlyArray<{
  +$data?: NewsList_newslist$data,
  +$fragmentRefs: NewsList_newslist$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "NewsList_newslist",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "News_news"
    }
  ],
  "type": "News",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'fd17af2779b3da9f7b9708ecfea0e036';

module.exports = node;
