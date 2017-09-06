#!/usr/bin/env node

require('shelljs/global');
const paths = require('path');
const fs = require('fs');
const figlet = require('figlet');
const chalk = require('chalk');
const execSync = require('child_process').execSync;
const spawn = require('cross-spawn');

function shouldUseYarn() {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

const installPackages = () => {
  console.log(chalk.white.bold('Installing Packages'));
  return new Promise((resolve, reject) => {
    let command;
    let args = ['install'];

    if (shouldUseYarn()) {
      command = 'yarn';
    } else {
      command = 'npm';
    }

    const child = spawn(command, args, { stdio: 'inherit' });
    child.on('close', code => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(' ')}`
        });
        return;
      }
      resolve();
    })
  })
}

const build = (appName) => {
  cp('-r', __dirname + '/../src/.', appName);
  console.log('----------------------------------------------------------');
  figlet.text('React Native Web', {
      horizontalLayout: 'default',
      verticalLayout: 'default'
  }, function(err, data) {
    if (err) {
      return;
    }
    console.log(data);
    console.log('----------------------------------------------------------');
    console.log(chalk.cyan.bold('Welcome to React Native Web'));
    console.log('----------------------------------------------------------');
    cd(appName);
    installPackages().then(() => {
      console.log(chalk.white.bold('Let\'s get started'));
      console.log(chalk.cyan('cd into the newly created ' + appName + ' directory'));
      console.log('----------------------------------------------------------');
      console.log(chalk.white.bold('For Web'));
      console.log(chalk.cyan('Step 1. npm run web'));
      console.log(chalk.black.bold('This starts the webpack dev server and serves up index.web.js'))
      console.log(chalk.cyan('Step 2. Open localhost:8080 in your browser to view the app.'));
      console.log('----------------------------------------------------------');
      console.log(chalk.white.bold('For React Native'));
      console.log(chalk.cyan('iOS: run react-native run-ios'));
      console.log(chalk.black.bold('This starts the packager and runs the iOS simulator.'))
      console.log(chalk.cyan('android. run react-native run-android'));
      console.log(chalk.black.bold('This starts the packager and runs the android emulator.'))
      console.log('----------------------------------------------------------');
    })
    .catch(error => {
      console.log(chalk.red('An unexpected error occurred'))
      console.log(chalk.red(error));
    });
  });
}

module.exports = build;
