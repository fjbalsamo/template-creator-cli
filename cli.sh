#!/bin/sh

npm run build

clear

today="$(date '+%Y-%m-%d-%H-%M-%S')"

outPath="/home/fjbalsamo/$today"

gitUrl="https://github.com/fjbalsamo/plop-example-template.git"

echo "make app from $gitUrl"

echo "and save it in $outPath"

node ./build/index.js -g $gitUrl -o $outPath