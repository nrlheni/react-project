# Simple Data Table

This project is a React TypeScript application that loads and displays around 1000 rows of data using the following technologies:
- **Shadcn UI**
- **Tailwind CSS**
- **TanStack Table**
- **React Virtualize**

## Demo

You can access the live demo here: [www.example.com](www.example.com)

## Installation

To run the project locally, follow these steps:

1. Clone the repository
2. Run this command in folder of project:

   ```bash
   npm i && npm run dev

## Customizing Data

To customize the data or add more, simply place or modify data files in the `/src/data` folder.

### Data Structure
The fields for each data entry are:
- `id`: A unique identifier for the entry.
- `name`: The person's full name.
- `email`: The email address of the individual.
- `gender`: The gender of the individual.
- `address`: The person's address.

To easily generate custom data, you can use the [Mockaroo](https://www.mockaroo.com/) service to customize amount of data and export is as `.json` file. Place the generated data file inside the `/src/data` folder and import it into your components as needed.

## Features

- **Dynamic Table Rendering**: Uses TanStack Table to efficiently render large datasets.
- **Virtualization**: Implements virtualization for better performance when handling over 1000 rows of data.
