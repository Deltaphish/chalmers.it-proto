/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Course_course$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Resturant_resturant$ref: FragmentReference;
declare export opaque type Resturant_resturant$fragmentType: Resturant_resturant$ref;
export type Resturant_resturant = {|
  +name: ?string,
  +courses: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Course_course$ref
  |}>,
  +$refType: Resturant_resturant$ref,
|};
export type Resturant_resturant$data = Resturant_resturant;
export type Resturant_resturant$key = {
  +$data?: Resturant_resturant$data,
  +$fragmentRefs: Resturant_resturant$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Resturant_resturant",
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
      "concreteType": "Course",
      "kind": "LinkedField",
      "name": "courses",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Course_course"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Resturant",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '3fa8010ad33c256e4f4b74af8c8ac8ea';

module.exports = node;
