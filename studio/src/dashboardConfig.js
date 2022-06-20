export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62b05617b9dd5016bf334d8a",
                  title: "Sanity Studio",
                  name: "studentparlamentet-studio",
                  apiId: "29054409-489b-47b8-acc9-1ffb30603c4b",
                },
                {
                  buildHookId: "62b056176fa84c1dee584473",
                  title: "Blog Website",
                  name: "studentparlamentet",
                  apiId: "b902982c-2ed9-40eb-a574-381f0bc65f56",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/isakgustavsen/Studentparlamentet",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://studentparlamentet.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
