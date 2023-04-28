<div align="center">
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--yayk2pWn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/Material--UI-0081CB%3Fstyle%3Dfor-the-badge%26logo%3Dmaterial-ui%26logoColor%3Dwhite" alt="Material UI" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
    <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="Visual Studio Code" />
</div>

# Devtools

Devtools is a platform for web developers to easily access and compare different services such as PaaS, BaaS, web hosting platform. We primarily focus on the free-tier services provided, so for developers tha is on a budget should find this helpful.

## Local Development

### Getting Started

1. Clone the repository into your local machine by using git.

    ```bash
    git clone https://github.com/AlstonChan/devtools.git
    ```

2. Install [pnpm](https://pnpm.io/installation), we use **pnpm** as our package manager instead of npm.

3. Change directory into the repository by using `cd Devtools`, and install the required npm dependencies by running the following command in your terminal.

    ```bash
    pnpm install
    ```

4. To run the site in your machine, run the following command in your terminal, and head to [localhost:3000](http://127.0.0.1:3000). You should see the site up and running.

    ```bash
    pnpm dev
    ```

### Updating Content

#### Creating New Document

1. After running `pnpm dev`. Navigate to <http://localhost:3000/admin/index.html> in your browser, choose a collections you would like to add a documents to at the sidebar on the left.

2. Click **Create New +** to add a new document and fill in the input box as per the label. Here' something you should take note of when you input the data.

    1. If the input box doesn't have the required data, just leave it blank. For example, most services doesn't open source their product, so there will not be a GitHub repository. In that case, you can ignore the **GitHub Info** sections.

    2. If the input box is a switch that can be toggle, you have to toggle it twice if you meant no. For example, for input box **Can be Self Host**, if the service can't be self hosted, you have to toggle it twice, this is because **TinaCMS** won't registered this field as **false** if you completely neglect it, which might cause error to the component expecting the data.

#### Creating New Collection

1. Navigate to `./content` in your file system, *change directory (cd)* to the category you would like to create a new collections and create a new folder by using the **[camelCase](https://en.wikipedia.org/wiki/Camel_case)** naming conventions.

2. After that, *change directory (cd)* to `./.tina/schema/{CATEGORY}`. You should find the category which you just create a new empty directory at `./content`, create a new file in **Typescript** with **.ts** extension while following the **[camelCase](https://en.wikipedia.org/wiki/Camel_case)** naming conventions. So your filename should look like this - **`collectionName.ts`**

3. Paste the following code snippets into the file you just created.

    ```typescript
    import { Collection } from "tinacms";
    import commonFields from "./commonFields";

    const collectionNameSchema: Collection<false> = {
    name: "collectionName", // camelCase
    label: "Collection Name", // every first letter is capitalized
    path: "content/web-development/collectionName", // the empty directory you just created on step 1
    format: "json",
    fields: [...commonFields]
    };

    export default collectionNameSchema;
    ```

    Rename the `collectionName` and `Collection Name` to the collection name you just created. For the fields array, you can add the required fields later, for more on how how to add a fields and the field options, you can reference **[TinaCMS docs](https://tina.io/docs/reference/fields/)**.

4. After that, navigate to the file **`./{YOUR_CATEGORY}Schema.ts`**, at there import the file you just created at step 3. Like the following:

    ```typescript
    import { default as collect } from "./collectionName";

    export { ...otherCollection, collect };
    ```

5. Navigate to `./.tina/config.ts`, import the file and add it other collections. If you run `pnpm dev` now, you should see your collection listed on the sidebar at the left.

6. Right now, the application still doesn't know the existences of the collection. To fix that, navigate to `./data/types.ts`, add your collection name to the category type with the first letter capitalized.

7. Then, you have to navigate to `./data/toolsRoute.tsx`, add a new object with the title as your collection name and find a suitable icon from [Material Icons](https://mui.com/material-ui/material-icons/).

8. Once you are finished with that, navigate to `./data/toolsItemDetails/{CATEGORY}.ts`. Create a new `const` variable with type of **`ToolsDetail`**, the title should be the collection name, as the subtitle and metaDescription would be used a description for the page and meta tag description respectively. The variable name should be the same as you defined it in `./.tina/schema/{CATEGORY}/{COLLECTION NAME}.ts` as it will be use to identify the route. Then add your variable to the export object, if your collection name consist of two or more words like **Cloud Providers**, renamed it to "cloud-providers" with **kebab-case** naming convention while adding it to the export object.

9. Refresh your browser in [localhost:3000/tools/](http://127.0.0.1:3000/tools/) and you should see your collection listed on the SideBar with the page function properly instead of getting a 404 error.

## License

This project is licensed under the terms of the **GNU General Public License v3.0**
