GULP=./node_modules/.bin/gulp
#COMPASS=compass

build: 
	env NODE_ENV=production $(GULP) build

deploy: build
	git commit -a
	git push github master

serve:
	$(GULP) build watch serve

#dev: watch

.PHONY: all
