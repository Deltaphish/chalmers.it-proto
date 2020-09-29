/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Resturant_resturant$ref = any;
export type ResturantListQueryVariables = {||};
export type ResturantListQueryResponse = {|
  +lunch: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Resturant_resturant$ref
  |}>
|};
export type ResturantListQuery = {|
  variables: ResturantListQueryVariables,
  response: ResturantListQueryResponse,
|};
*/


/*
query ResturantListQuery {
  lunch {
    ...Resturant_resturant
  }
}

fragment Course_course on Course {
  name
  dish
}

fragment Resturant_resturant on Resturant {
  name
  courses {
    ...Course_course
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ResturantListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Resturant",
        "kind": "LinkedField",
        "name": "lunch",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Resturant_resturant"
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
    "name": "ResturantListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Resturant",
        "kind": "LinkedField",
        "name": "lunch",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Course",
            "kind": "LinkedField",
            "name": "courses",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dish",
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
    "cacheID": "06576d9d8d4c8df6c6f6bc7eeaf94e9c",
    "id": null,
    "metadata": {},
    "name": "ResturantListQuery",
    "operationKind": "query",
    "text": "query ResturantListQuery {\n  lunch {\n    ...Resturant_resturant\n  }\n}\n\nfragment Course_course on Course {\n  name\n  dish\n}\n\nfragment Resturant_resturant on Resturant {\n  name\n  courses {\n    ...Course_course\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b2cceb198518c5714ea95f0c35cfd2f3';

module.exports = node;
