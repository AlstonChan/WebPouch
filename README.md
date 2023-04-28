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

4. To run the site in your machine, run the following command in your terminal, and head to [localhost:3000](http://localhost:3000). You should see the site up and running.

    ```bash
    pnpm dev
    ```

### Updating Content

#### Creating New Document

1. After running `pnpm dev`. Navigate to <http://localhost:3000/admin/index.html>, choose a collections you would like to add a documents to at the sidebar on the left.

2. Click **Create New +** to add a new document and fill in the input box as per the label. Here' something you should take note of when you input the data.

    1. If the input box doesn't have the required data, just leave it blank. For example, most services doesn't open source their product, so there will not be a GitHub repository. In that case, you can ignore the **GitHub Info** sections.

    2. If the input box is a switch that can be toggle, you have to toggle it twice if you meant no. For example, for input box **Can be Self Host**, if the service can't be self hosted, you have to toggle it twice, this is because **TinaCMS** won't registered this field as **false** if you completely neglect it, which might cause error to the component expecting the data.

## License

This project is licensed under the terms of the **GNU General Public License v3.0**
