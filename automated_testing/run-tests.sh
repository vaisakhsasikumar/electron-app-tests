#!/bin/bash

# Run the npm script
echo "Starting WebDriverIO tests..."
npm run wdio

# Check if the command succeeded
if [ $? -eq 0 ]; then
  echo "WebDriverIO tests completed successfully."
else
  echo "Error: WebDriverIO tests failed." >&2
  exit 1
fi
