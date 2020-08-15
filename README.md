# Evaluate News with NLP

This is a Udacity project FrontEnd Nanodegree

## Setup

To view this project on your local machine please following these instructions:

* Clone this respository:
```bash
git clone https://github.com/claudioacioli/udacity-frontend-nlp.git
```

* Move to the Repository on your local machine:
```bash
cd udacity-frontend-nlp
```

* Install the requirements:
```bash
npm install
```

* Setup api key

This project use the api [Meaning cloud](https://www.meaningcloud.com) for NLP processment.
For setup that you need create a ```.env``` file in the root folder and then add new environment variable ```API_KEY```:

```bash
echo "API_KEY=abkjdkj58454" > .env
```

This is a simple way to do that, but there are a lot of ways, so still confortable to do that.

## Running

There are two modes for run this project, following the settings below.

### Development

For running the develpment mode, please following these instructions:

* Start the server:
```bash
npm run start
```

* Start the client:
```bash
npm run build-dev
```

Because we are using the ```webpack-dev-server``` You need these two steps.

### Production

For running the production mode, please following these instructions:

* Make the build:
```bash
npm run build-prod
```

* Start the server:
```bash
npm run start
```


