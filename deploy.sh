rm -rf dist &&
yarn build --base ./ &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@gitee.com:hugh-L/big-screen.git &&
git push -u -f origin master