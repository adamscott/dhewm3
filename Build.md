# Build

Here's the cmake command used to build the project so far.

```sh
emcmake cmake -S neo -B build-emscripten -G Ninja -DCMAKE_C_COMPILER_LAUNCHER=(which ccache) -DCMAKE_CXX_COMPILER_LAUNCHER=(which ccache) -DOPENAL_INCLUDE_DIR=(brew --prefix openal-soft)/include -DDOOM_BASE_DIR='<PATH TO BASE DIR>' -DEMSCRIPTEN_FILE_PACKAGER=<PATH TO FILE PACKAGER>
```

