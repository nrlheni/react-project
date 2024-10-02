# Simple Data Table

This project is a React TypeScript application that loads and displays around 1000 rows of data using the following technologies:
- **Shadcn UI**
- **Tailwind CSS**
- **TanStack Table**
- **React Virtualize**

## Demo

You can access the live demo here: [https://simple-datatable-nurulakhni.vercel.app/](https://simple-datatable-nurulakhni.vercel.app/)

## Installation

To run the project locally, follow these steps:

1. Clone the repository
2. Run this command in folder of project:

   ```bash
   npm i && npm run dev

## Customizing Data

To customize the data or add more, simply place or modify data files in the `/src/data` folder.

The fields for each user data entry are: id, name, email, gender, address

To easily generate custom data, you can use the [Mockaroo](https://www.mockaroo.com/) service to customize amount of data and export is as `.json` file.

## Features

- **Dynamic Table Rendering**: Uses TanStack Table to efficiently render large datasets.
- **Virtualization**: Implements virtualization for better performance when handling over 1000 rows of data.
