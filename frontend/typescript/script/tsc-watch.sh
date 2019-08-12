#!/bin/bash

set -x

rm -rf frontend/typescript/.dts
./node_modules/.bin/tsc -b frontend/typescript/tsconfig.dts.json -w
