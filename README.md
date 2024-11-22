# Sample APIs
This repo contains simple WebSocket, REST, and GraphQL servers. The servers are written in Python, but if you want to, I also included a TypeScript version in [*js-version*](/js-version/)

## Setting up
Before you can run the applications, you need to do the following:
1. Clone this repository:
```bash
git clone https://github.com/GhoulKingR/sample-apis.git
```
2. [Set up a virtual environment](#setting-up-a-virtual-environment)
3. Install the project's dependencies:
```bash
pip install -r requirements.txt
```

When you've done this, follow the next section to run the server of your choice

## Running the servers
### REST
The code for the REST server is in *rest.py*. Run it with this command:
```bash
python rest.py
```

### GraphQL
The code for the GraphQL server is in *gql.py*. Run it with this command:
```bash
fastapi dev gql.py
```

### WebSocket
The code for the WebSocket server is in *websocket.py*. Run it with this command:
```bash
python websocket.py
```

## Setting up a virtual environment

Virtual environments allow you to isolate the packages that your project dependends on from your system. This helps to better manage dependencies, and avoid package conflicts.

The virtual environment I prefer to use is [virtualenv](https://virtualenv.pypa.io/en/latest/index.html), because it keeps the libraries, and python executables in the same folder. You can install it with `pipx` like so:
```bash
pipx install virtualenv
```

There are other methods of installinv virtualenv. You can check out these methods in its [installation page](https://virtualenv.pypa.io/en/latest/installation.html).

When the installation is completed, you can verify it with this command:
```bash
virtualenv --help
```

With virtualenv installed, run this command to create the virtual environment (make sure you're in this project's root directory):
```bash
virtualenv .venv
```

After that, initialize the virtual environment:
```bash
# linux or mac
source .venv/bin/activate

# windows
.\venv\Scripts\activate
```