#!/bin/bash
REMOTE_USER=boris
REMOTE_HOST=zoris.eu
REMOTE_PATH=/var/www/codebreaker
echo "BUILDING CODEBREAKER"
yarn build
echo "RELEASING CODEBREAKER to $REMOTE_HOST"
rsync -r dist/ $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH --delete;
if [ $? -eq 0 ]; then
   echo "RELEASE SUCCESFULL"
else
   echo "RELEASE FAILED"
fi

