# [JSON CV Generator](https://jsoncvgenerator.netlify.app)

Professional CVs generated from JSON files.

[![Netlify Status](https://api.netlify.com/api/v1/badges/5c994180-61d7-49d1-a0aa-6ab58727a53f/deploy-status)](https://app.netlify.com/sites/jsoncvgenerator/deploys)

## Development

NodeJS v14 or higher is required.

- Clone the repository.
- Install the dependencies:

  ```
  npm install
  ```

- Start the development server:

  ```
  npm start
  ```

- Go to http://localhost:3000/.

## Contributing with a CV template

- Choose a name for the template and add it to the `/src/types/cv-templates.ts` file

- Update the select input options by add your template to the variable `templateOptions` in the `/src/components/ActionBar/ActionBar.tsx` file

- Create a new template component inside `/src/components/Cv`

- Add a new line in the `/src/components/Cv/Cv.tsx` file:

  ```
  {template === 'NewTemplateName' && <NewTemplate cv={cv} />}
  ```
