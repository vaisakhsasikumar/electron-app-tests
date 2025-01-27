echo "Stop MongoDB..."
brew services stop mongodb-community@6.0

echo "Stop WireMock..."
pkill -f wiremock