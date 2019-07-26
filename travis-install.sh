#!/bin/bash

set -e

pushd linter
yarn install
yarn build-ts
popd
