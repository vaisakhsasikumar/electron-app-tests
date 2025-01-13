#!/bin/bash

# Function to retrieve the theme from the stub
get_theme() {
  # Replace this with the actual stub URL where you're fetching the theme
  STUB_URL="http://localhost:8080/api/theme"

  # Fetch the theme (either 'dark' or 'light') from the stub
  THEME=$(curl -s $STUB_URL | jq -r '.theme')

  # Validate the theme value
  if [[ "$THEME" != "dark" && "$THEME" != "light" ]]; then
    echo "Error: Invalid theme returned from stub: $THEME" >&2
    exit 1
  fi

  echo "$THEME"
}

# Get the theme from the stub
THEME=$(get_theme)

# Export the theme as an environment variable for WebDriverIO
export WDIO_THEME="$THEME"

# Run the WebDriverIO tests
echo "Starting WebDriverIO tests with $THEME theme..."
npm run test:external

# Check if the command succeeded
if [ $? -eq 0 ]; then
  echo "WebDriverIO tests completed successfully."
else
  echo "Error: WebDriverIO tests failed." >&2
  exit 1
fi
