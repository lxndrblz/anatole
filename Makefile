HUGO_BIN=hugo


.PHONY: build demo release release_windows

build:
	$(HUGO_BIN) --themesDir=../.. --source=exampleSite

demo:
	$(HUGO_BIN) server -D --themesDir=../.. --source=exampleSite

release: build
	rm -rf ./resources && cp -r ./exampleSite/resources ./resources

release_windows: build
	IF EXIST ".\resources" rmdir ".\resources" /S /Q
	mkdir resources
	xcopy /s ".\exampleSite/resources" "resources"