# Express js docker

## Getting Started

In order to run the project you need `Docker and Docker Compose`, if you already have them installed you can skip the step 1 and 2.

### 1. Install Docker

- [Install Docker](https://docs.docker.com/engine/installation/) in your machine for your corresponding OS.
- Verify your installation. Run:

```bash
$ docker --version
Docker version 17.03.0-ce, build 60ccb23
```

### 2. Install Docker Compose

- [Install Docker Compose](https://docs.docker.com/compose/install/) in your machine for your corresponding OS.
- Verify your installation. Run:

```bash
$ docker-compose --version
docker-compose version 1.22.0, build 1719ceb
```

### 3. Clone the repo with the following command:

```bash
$ git clone git@github.com:Roberto4091/express-js-docker.git
$ cd express-js-docker
```

## Running the application with docker

### 1. Copy .env file

```bash
$ cp ./.env.example ./docker/.env
```

### 2. Build the application

```bash
$ docker-compose -f docker/docker-compose.yml build
```

### 3. Running the application

```bash
$ docker-compose -f docker/docker-compose.yml up
```

Then go to `http://localhost:8000`.

## Other commands

Create new model and migration

```bash
$ docker-compose -f docker/docker-compose.yml run example_dev npm run model:generate -- --name MODEL_NAME --attributes THE_ATTRIBUTE:TYPE
```

Apply migrations

```bash
$ docker-compose -f docker/docker-compose.yml run example_dev npm run migrate
```

Create seed

```bash
$ docker-compose -f docker/docker-compose.yml run example_dev npm run seed:generate -- --name SEED_NAME
```

Run seeds

```bash
$ docker-compose -f docker/docker-compose.yml run example_dev npm run seed
```
