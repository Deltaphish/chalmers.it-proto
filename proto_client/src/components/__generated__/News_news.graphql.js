/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type News_news$ref: FragmentReference;
declare export opaque type News_news$fragmentType: News_news$ref;
export type News_news = {|
  +title: ?string,
  +$refType: News_news$ref,
|};
export type News_news$data = News_news;
export type News_news$key = {
  +$data?: News_news$data,
  +$fragmentRefs: News_news$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "News_news",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "News",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'cfeca081632f91e6da47f8474644581b';

module.exports = node;
