# homebridge-brpc-service

Computer-side services of homebridge-brpc based on koa.

Only compatible with Windows.

## Usage

- **0x01: Clone this repo into your disk**

```bash
git clone https://github.com/backrunner/homebridge-brpc-service.git
```

- **0x02: Install pm2 into your system**

```bash
npm install -g pm2 pm2-windows-service
```

- **0x03: Install pm2 windows service**

```bash
pm2-service-install
```

Recommend use default settings, for Windows 10 users, you need to find the folder of pm2-windows-service, then upgrade a dependency named 'inquirer':

```bash
npm upgrade inquirer
```

- **0x04 Set up config of homebridge-brpc-serivce**

Copy **config.tmpl.json** to **config.json**, then edit config.json.

The option "auth_username" and "auth_key" is necessary, when you finish set up this config, you also need to set up the same options in the config.json of homebridge.

- **0x05 Start homebridge-brpc-serivce with pm2**

```bash
pm2 start ./main.js
pm2 save
```

## API

- ping: (SERVICE_URL)/ping - to let homebridge know whether your computer is online
- shutdown: (SERVICE_URL)/shutdown - need auth info, to shutdown your computer
