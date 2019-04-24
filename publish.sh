#!/bin/bash

function build {
  npm run release
}

function updateVersion {
    echo "New version change: $newVersion"
    oldVersionValue=$(cat package.json | grep version | grep -oP "\d+[^\"]+")
    npm version "$newVersion"
    newVersionValue=$(cat package.json | grep version | grep -oP "\d+[^\"]+")
    echo "New version value: $newVersionValue - from $oldVersionValue"
}

newVersion="$1"
if [ -z "$newVersion" ]; then
    newVersion="patch"
fi

git status | grep 'nothing to commit'
if [ $? -eq 1 ]; then
    echo 'Commit everything before running update script.';
    exit 1
fi

git pull origin master
npm install
updateVersion
build

git status | grep 'nothing to commit'
if [ $? -eq 1 ]; then
    git add -A && git commit -m "dump release files"
fi
git push

npm config set scope @eklesia
npm config set access public
npm publish
