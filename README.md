## Start a database

1. Start a docker container with a postgres database.

```sh
docker compose up
```

2. Push the schema to database

```sh
npx prisma dp push
```

3. Open prisma studio to make sure the database has a right shape.

```sh
npx prisma studio
```

## Connect GitHub auth

1. Go to GitHub -> Settings -> Developer settings -> OAuth Apps -> New OAuth App

2. Fill the data

- Application name: `YourAppName`
- Homepage URL: `http://localhost:3000`
- Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

3. Go to GitHub -> Settings -> Developer settings -> OAuth Apps -> YourAppName.

4. Copy Client ID to `GITHUB_CLIENT_ID` env variable
5. Copy Client secret to `GITHUB_CLIENT_SECRET` env variable
