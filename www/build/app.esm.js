import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-88fb431b.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["apollo-consumer",[[0,"apollo-consumer",{"client":[16],"renderer":[16]}]]],["apollo-subscription",[[0,"apollo-subscription",{"subscription":[8],"renderer":[16],"variables":[8],"options":[16],"client":[16],"result":[32]}]]],["context-consumer",[[0,"context-consumer",{"context":[16],"renderer":[16],"subscribe":[16],"unsubscribe":[32]}]]],["apollo-all-posts",[[0,"apollo-all-posts",{"renderer":[16]}]]],["apollo-upvote-post",[[0,"apollo-upvote-post",{"renderer":[16]}]]],["apollo-provider",[[4,"apollo-provider",{"client":[1040]}]]],["apollo-mutation",[[0,"apollo-mutation",{"mutation":[8],"renderer":[16],"variables":[8],"options":[16],"client":[16],"mutationFn":[32]}]]],["apollo-query",[[0,"apollo-query",{"query":[8],"renderer":[16],"variables":[8],"options":[16],"client":[16],"originalResult":[32],"error":[32]}]]],["my-component-with-codegen",[[0,"my-component-with-codegen",{"first":[1],"last":[1]}]]]], options);
});
