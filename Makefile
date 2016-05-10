GULP=./node_modules/.bin/gulp
#COMPASS=compass

build: 
	env NODE_ENV=production $(GULP) build

serve:
	$(GULP) build watch serve

#dev: watch

.PHONY: all
