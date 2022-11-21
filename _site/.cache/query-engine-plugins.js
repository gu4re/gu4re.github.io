
import * as pluginGatsbyNode0 from "../node_modules/gatsby-plugin-image/gatsby-node"
import * as pluginGatsbyNode1 from "../node_modules/gatsby-source-filesystem/gatsby-node"
import * as pluginGatsbyNode2 from "../node_modules/gatsby-transformer-sharp/gatsby-node"
import * as pluginGatsbyNode3 from "../node_modules/gatsby-plugin-sharp/gatsby-node"
import * as pluginGatsbyNode4 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyWorker0 from "../node_modules/gatsby-plugin-sharp/gatsby-worker"

export const gatsbyNodes = {
"gatsby-plugin-image": pluginGatsbyNode0,
"gatsby-source-filesystem": pluginGatsbyNode1,
"gatsby-transformer-sharp": pluginGatsbyNode2,
"gatsby-plugin-sharp": pluginGatsbyNode3,
"gatsby-plugin-page-creator": pluginGatsbyNode4,
}

export const gatsbyWorkers = {
"gatsby-plugin-sharp": pluginGatsbyWorker0,
}

export const flattenedPlugins =
  [
  {
    "resolve": "",
    "id": "a9f9c4c1-d74b-569b-a6ec-6093f5d12592",
    "name": "gatsby-plugin-image",
    "version": "3.0.0",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "createSchemaCustomization",
      "onCreateBabelConfig",
      "onCreateWebpackConfig",
      "preprocessSource"
    ],
    "browserAPIs": [],
    "ssrAPIs": [
      "onRenderBody"
    ],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "7e53c246-c2d1-5b4c-81bb-d03c7f073c4a",
    "name": "gatsby-source-filesystem",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "name": "images",
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/src/images"
    },
    "nodeAPIs": [
      "onPreInit",
      "pluginOptionsSchema",
      "sourceNodes",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "822bdf7b-a95a-5885-9351-158705910ac3",
    "name": "gatsby-transformer-sharp",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "onPreInit",
      "onCreateNode",
      "shouldOnCreateNode",
      "createSchemaCustomization",
      "createResolvers"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "9e618b1c-a2d0-52b1-86ab-f91016f37381",
    "name": "gatsby-plugin-sharp",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "base64Width": 20,
      "stripMetadata": true,
      "defaultQuality": 50,
      "failOnError": true,
      "failOn": "warning"
    },
    "nodeAPIs": [
      "onCreateDevServer",
      "onPostBootstrap",
      "onPluginInit",
      "onPreBootstrap",
      "pluginOptionsSchema"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "96b34fa5-0cdc-5926-b77d-4896b60f66a8",
    "name": "gatsby-plugin-page-creator",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/node_modules/gatsby/dist/internal-plugins/dev-404-page/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "7afedc1d-b5c2-5ae2-a044-1ea3b1be97a1",
    "name": "gatsby-plugin-page-creator",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/node_modules/gatsby/dist/internal-plugins/load-babel-config/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "8e2a3eec-3ad7-5251-acdf-fb5764535b74",
    "name": "gatsby-plugin-page-creator",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/node_modules/gatsby/dist/internal-plugins/internal-data-bridge/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "88c8b174-d2cc-5648-84af-6b55f1bff964",
    "name": "gatsby-plugin-page-creator",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/node_modules/gatsby/dist/internal-plugins/prod-404-500/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "f6acb7e8-42af-5ca4-9783-80a20f0a0f22",
    "name": "gatsby-plugin-page-creator",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "067cee25-9694-51b0-a9b3-cd7cac953fb6",
    "name": "gatsby-plugin-page-creator",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "5cbc9f52-4479-5669-993a-e84922b529c0",
    "name": "gatsby-plugin-page-creator",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/node_modules/gatsby/dist/internal-plugins/functions/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "f09ee8f1-ff92-5fa7-8e2a-cf52e678a1fb",
    "name": "gatsby-plugin-page-creator",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/node_modules/gatsby-plugin-image/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "062941f0-981a-509f-b70e-5396caeb2cfd",
    "name": "gatsby-plugin-page-creator",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/node_modules/gatsby-source-filesystem/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "d5bafbac-f3a9-5753-89a0-f0215f3ac8ed",
    "name": "gatsby-plugin-page-creator",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/node_modules/gatsby-transformer-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "4ac03a71-e7b0-5cf9-88e0-e06e74c2e2e9",
    "name": "gatsby-plugin-page-creator",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/node_modules/gatsby-plugin-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "6ce8af22-91ec-50cf-9fd4-ce48e39cf937",
    "name": "gatsby-plugin-page-creator",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/node_modules/gatsby-plugin-manifest/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "787cf932-60c5-527a-85c2-92455c470878",
    "name": "gatsby-plugin-page-creator",
    "version": "5.0.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/diegopicazo/Documents/github/gu4re.github.io/_site/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  }
]
