/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Course_course$ref: FragmentReference;
declare export opaque type Course_course$fragmentType: Course_course$ref;
export type Course_course = {|
  +name: ?string,
  +dish: ?string,
  +$refType: Course_course$ref,
|};
export type Course_course$data = Course_course;
export type Course_course$key = {
  +$data?: Course_course$data,
  +$fragmentRefs: Course_course$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Course_course",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dish",
      "storageKey": null
    }
  ],
  "type": "Course",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'a881690fbb0b841446f273e13ee3996d';

module.exports = node;
