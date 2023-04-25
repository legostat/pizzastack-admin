import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // schema: "http://localhost:8080/v1/graphql",
  schema: [
    {
      "http://localhost:8080/v1/graphql": {
        headers: {
          "x-hasura-admin-secret": "q5Dwbv3Q9P59tEFE",
        },
      },
    },
  ],
  documents: "src/core/graphql/*.gql",
  generates: {
    "src/core/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
