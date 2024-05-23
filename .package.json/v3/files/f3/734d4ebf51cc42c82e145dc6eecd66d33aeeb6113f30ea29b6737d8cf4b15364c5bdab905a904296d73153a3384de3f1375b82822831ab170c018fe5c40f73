@SETLOCAL
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\..\..\prebuild-install@7.1.1\node_modules\prebuild-install\bin.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\..\..\prebuild-install@7.1.1\node_modules\prebuild-install\bin.js" %*
)
