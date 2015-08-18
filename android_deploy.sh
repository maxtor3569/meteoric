cd ~/build-final/android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 unaligned.apk teamsport
~/.meteor/android_bundle/android-sdk/build-tools/20.0.0/zipalign 4 \
    unaligned.apk production.apk
