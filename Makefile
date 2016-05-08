GULP=./node_modules/.bin/gulp
#COMPASS=compass

build: 
	$(GULP) build

serve:
	$(GULP) build watch serve

#dev: watch

.PHONY: all
