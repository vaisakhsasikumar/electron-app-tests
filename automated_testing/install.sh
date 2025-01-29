#!/bin/bash

# Variables
APP_NAME="MongoDB Query Executor"
DMG_FILE=$(find . -name "*.dmg" -print -quit)
MOUNT_NAME=$(basename "$dmg_file")
MOUNT_DIR="/Volumes/$APP_NAME"

# Step 1: Mount the DMG
echo "Mounting DMG..."
hdiutil attach "$DMG_FILE" -nobrowse
hdiutil info

# Step 2: Copy the app to Applications
echo "Copying app to Applications..."
cp -R "$MOUNT_DIR/$APP_NAME.app" /Applications/

# Step 3: Unmount the DMG
echo "Unmounting DMG..."
hdiutil detach "$MOUNT_DIR" -force

# Step 4: Verify the app exists
echo "Checking the app..."
if [ -d "/Applications/$APP_NAME.app" ]; then
  # Fix warnings from Non App Store applications
  xattr -c "/Applications/$APP_NAME.app"
  echo "$APP_NAME installed successfully!"
else
  echo "Installation failed!"
  exit 1
fi
