# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 10.0.0 (2019-11-14)


### Features

* create @diez/framework-core ([#304](https://github.com/diez/diez/issues/304)) ([e8d2c4c](https://github.com/diez/diez/commit/e8d2c4c))





# [10.0.0-beta.6](https://github.com/diez/diez/compare/v10.0.0-beta.5...v10.0.0-beta.6) (2019-11-09)


### Features

* create @diez/framework-core ([#304](https://github.com/diez/diez/issues/304)) ([7a9369d](https://github.com/diez/diez/commit/7a9369d))





# [10.0.0-beta.5](https://github.com/diez/diez/compare/v10.0.0-beta.4...v10.0.0-beta.5) (2019-09-24)

**Note:** Version bump only for package @diez/cli-core





# [10.0.0-beta.4](https://github.com/diez/diez/compare/v10.0.0-beta.3...v10.0.0-beta.4) (2019-08-09)

**Note:** Version bump only for package @diez/cli-core





# [10.0.0-beta.3](https://github.com/diez/diez/compare/v10.0.0-beta.2...v10.0.0-beta.3) (2019-07-30)

**Note:** Version bump only for package @diez/cli-core





# [10.0.0-beta.2](https://github.com/diez/diez/compare/v10.0.0-beta.1...v10.0.0-beta.2) (2019-07-16)

**Note:** Version bump only for package @diez/cli-core





# [10.0.0-beta.1](https://github.com/diez/diez/compare/v10.0.0-beta.0...v10.0.0-beta.1) (2019-07-02)


### Features

* **createproject:** add a loader spinner when installing dependencies ([#179](https://github.com/diez/diez/issues/179)) ([306e081](https://github.com/diez/diez/commit/306e081))
* **targets:** require `--js` param for web target ([#167](https://github.com/diez/diez/issues/167)) ([a4669ad](https://github.com/diez/diez/commit/a4669ad))





# [10.0.0-beta.0](https://github.com/diez/diez/compare/v10.0.0-alpha.0...v10.0.0-beta.0) (2019-06-14)


### Bug Fixes

* run CLI update check in the main thread ([#141](https://github.com/diez/diez/issues/141)) ([739d4f3](https://github.com/diez/diez/commit/739d4f3))
* **analytics:** ensure Sentry events are actually sent. ([76d2ab5](https://github.com/diez/diez/commit/76d2ab5))
* **docs:** typos + styling ([#75](https://github.com/diez/diez/issues/75)) ([7714a61](https://github.com/diez/diez/commit/7714a61))


### Features

* add script that generates example templates for createproject ([#115](https://github.com/diez/diez/issues/115)) ([943513c](https://github.com/diez/diez/commit/943513c))
* add support for design language extraction for Figma files ([#140](https://github.com/diez/diez/issues/140)) ([26b6d87](https://github.com/diez/diez/commit/26b6d87))
* **analytics:** add Sentry crash reporting for private beta ([#152](https://github.com/diez/diez/issues/152)) ([a47a9de](https://github.com/diez/diez/commit/a47a9de))
* **cli:** add opt-out analytics to `diez` ([#92](https://github.com/diez/diez/issues/92)) ([08291ec](https://github.com/diez/diez/commit/08291ec))
* **cli:** allow default command options to be specified in .diezrc ([#84](https://github.com/diez/diez/issues/84)) ([0e8a1bb](https://github.com/diez/diez/commit/0e8a1bb))
* **compiler:** enable fully ejectable Diez SDKs for Android and web ([#97](https://github.com/diez/diez/issues/97)) ([4b57a8e](https://github.com/diez/diez/commit/4b57a8e))
* **createproject:** `yarn create`/`npm init` starter kits for Diez ([#130](https://github.com/diez/diez/issues/130)) ([86caab2](https://github.com/diez/diez/commit/86caab2))
* **createproject:** shore up the behavior of `diez create` ([#126](https://github.com/diez/diez/issues/126)) ([17d0202](https://github.com/diez/diez/commit/17d0202))
* **targets:** add Carthage support to iOS ([#67](https://github.com/diez/diez/issues/67)) ([31ed20f](https://github.com/diez/diez/commit/31ed20f))


### Performance Improvements

* **cli:** reduce the dependency weight of the `diez` CLI ([#86](https://github.com/diez/diez/issues/86)) ([94dbee0](https://github.com/diez/diez/commit/94dbee0))


### BREAKING CHANGES

* **compiler:** the `diez compile` command no longer uses an `--outputPath/-o` flag for directing SDK output to a specified directory nor a `--devMode/-d` flag for running "hot", and instead builds SDKs into `build/` in unique directories per project/target like `build/diez-poodle-surf-ios`.
