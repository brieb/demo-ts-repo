#!/bin/bash

set -x

rm -rf frontend/typescript/.dts
./node_modules/.bin/tsc -p frontend/project-001/tsconfig.dts.json
./node_modules/.bin/tsc -p frontend/project-002/tsconfig.dts.json
./node_modules/.bin/tsc -p frontend/project-003/tsconfig.dts.json
