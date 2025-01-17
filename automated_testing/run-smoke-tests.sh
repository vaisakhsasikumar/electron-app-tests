 #!/bin/bash

 # Description:
 # This script runs only the smoke tests located in the test/specs/smoke-tests directory using WebDriverIO.

 # Exit immediately if a command exits with a non-zero status.
 set -e

 # Function to display messages in green
 function echo_success {
   echo -e "\033[0;32m$1\033[0m"
 }

 # Function to display error messages in red
 function echo_error {
   echo -e "\033[0;31m$1\033[0m" >&2
 }

 # Run the smoke tests npm script
 echo "Starting WebDriverIO smoke tests..."
 npm run test:smoke

 # If the above command succeeds, print a success message
 echo_success "WebDriverIO smoke tests completed successfully."