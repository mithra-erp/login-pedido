call build.bat
git add .
echo git commit -m %1
git commit -m %1
git push