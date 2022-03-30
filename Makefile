install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint --fix .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

build:
	# npx eslint --fix .
	NODE_OPTIONS=--experimental-vm-modules npx jest
	npm publish --dry-run