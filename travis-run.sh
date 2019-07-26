#!/bin/bash

set -e

pushd linter
yarn run-linter
popd
