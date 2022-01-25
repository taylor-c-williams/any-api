--  run `npm run setup-db`
DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  breed TEXT NOT NULL,
  origin TEXT NOT NULL
);