# Any-Api

## Objectives
-   Create and deploy a POST endpoint that creates a resource and responds created object
-   Create and deploy a GET endpoint that returns an array of objects
-   Create and deploy a GET endpoint that returns a single matching object based on the id in the path and req.params.id
-   Create and deploy a PUT/PATCH endpoint that updates a resource with the matching id and responds the updated object
-   Create and deploy a DELETE endpoint that deletes a resource with the matching id and responds the deleted object
-   Add JSON deserialization middleware and use the body in a route
-   Use params to simplify the extraction of "id" from a router
-   Utilize Router to implement a horizontally scalable Express App architecture
-   Use the pg library with $1, $2, $3 syntax to sanitize our SQL queries to prevent SQL injection.
-   Use pg to make queries against a Postgres DB
-   Connect to a Postgres DB using the pg node module
-   Deploy an API to Heroku

## Description[](https://alchemycodelab.github.io/backend-anyapi/#description)

Your task is to create an API with full CRUD capabilities and deploy it to Heroku. Choose what type of data your API will manage (e.g. animals, plants, songs, games, etc.) and build out the corresponding controller, model, and tests.

NOTE: When deploying to Heroku, make sure to:

-   Add the Heroku Postgres add-on
-   Set the `PGSSLMODE` env var to `required`
-   Run `npm run setup-heroku` locally or `npm run setup-db` from your Heroku app -> More -> Run console

## Acceptance Criteria[](https://alchemycodelab.github.io/backend-anyapi/#acceptance-criteria)

-   A controller exists with routes for GET, POST, PUT/PATCH, and DELETE requests
-   A model exists with methods for inserting a row, listing all rows, getting a single row, updating a row, and deleting a row
-   Routes defined in the controller follow REST conventions
-   See [here](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/) and [here](https://restfulapi.net/resource-naming/) for examples
-   `setup.sql` includes the necessary SQL to recreate your table
-   `app.test.js` includes a test for every route

## Rubric[](https://alchemycodelab.github.io/backend-anyapi/#rubric)

| Task | Points |
| --- | --- |
| Controller with all CRUD routes | 4 |
| Model with all required methods | 4 |
| Tests for each route | 4 |
| API is deployed to Heroku | 4 |
| API routes are RESTful | 2 |
| Filenames follow the documented conventions | 2 |