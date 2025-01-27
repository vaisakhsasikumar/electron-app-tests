# electron-app-tests

## Description
System Test Repository

# How to run locally acceptance tests and e2e tests

1. Download artifact
2. Install the application (make sure that all permissions are set)
3. Prepare environment
    - Install Node 20.x
    - Install dependencies
    - Run `./automated_testing/mock-start.sh` script to start all required mocks 
4. Run command `test:smoke`
5. Run command `test:e2e` or `test:acceptance`

# How to run checks for UAT

1. Download an artifact from the succesfull [Acceptance Stage](https://github.com/vaisakhsasikumar/electron-app-tests/actions/workflows/AcceptanceStage.yml)
2. Install the application (make sure that all permissions are set)
3. Prepare environment
    - Install Node 20.x
    - Install dependencies
4. Run command `test:smoke`
5. Open application and make all manual checks

# How to run checks for production

1. Download an artifact from the succesfull [Acceptance Stage](https://github.com/vaisakhsasikumar/electron-app-tests/actions/workflows/AcceptanceStage.yml)
2. Install the application (make sure that all permissions are set)
3. Prepare environment
    - Install Node 20.x
    - Install dependencies
4. Run command `test:smoke`
5. Open application and make all required checks

# Contributors

- [Vaisakh Sasikumar](https://github.com/vaisakhsasikumar)
- [Andrei Kim](https://github.com/andrei-kim-3tsoftwarelabs)
- [Vlad Lobanov](https://github.com/vladislavlobanov)
- [Hazel Ozmel](https://github.com/Hazel3t)
- [Ivan Martynov](https://github.com/MartynovIvan)
