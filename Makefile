.PHONY: all install dev start build test test-watch coverage lint clean docker-build docker-up

all: install build test

install:
	npm install

dev:
	npm run dev

start:
	npm run start

build:
	npm run build

test:
	npm test

test-watch:
	npm run test:watch

coverage:
	npm run test:coverage

docker-build:
	docker build -t aleans-erp-platform .

docker-up:
	docker compose up -d

clean:
	rm -rf dist node_modules/.vite
